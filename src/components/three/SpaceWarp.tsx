import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WarpLine: React.FC<{
  start: THREE.Vector3;
  end: THREE.Vector3;
  color: THREE.Color;
}> = ({ start, end, color }) => {
  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array([...start.toArray(), ...end.toArray()])}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={0.5} />
    </line>
  );
};

const Star = ({ position }: { position: THREE.Vector3 }) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime;
      ref.current.scale.setScalar(
        0.8 + Math.sin(state.clock.elapsedTime * 2) * 0.2
      );
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color={0xffffff} />
    </mesh>
  );
};

const GlowingSphere = () => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.scale.setScalar(
        1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      );
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -15]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial color={0xffffff} />
      <pointLight color={0xffffff} intensity={2} distance={20} />
    </mesh>
  );
};

const WarpTunnel = () => {
  const lines = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 200; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = 10;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      const start = new THREE.Vector3(x, y, z);
      const end = start.clone().multiplyScalar(100);
      const color = new THREE.Color().setHSL(Math.random(), 0.8, 0.6);
      temp.push({ start, end, color });
    }
    return temp;
  }, []);

  const stars = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 1000; i++) {
      const position = new THREE.Vector3();
      position.x = THREE.MathUtils.randFloatSpread(200);
      position.y = THREE.MathUtils.randFloatSpread(200);
      position.z = THREE.MathUtils.randFloatSpread(200);
      temp.push(position);
    }
    return temp;
  }, []);

  return (
    <>
      {lines.map((line, index) => (
        <WarpLine
          key={`line-${index}`}
          start={line.start}
          end={line.end}
          color={line.color}
        />
      ))}
      {stars.map((position, index) => (
        <Star key={`star-${index}`} position={position} />
      ))}
      <GlowingSphere />
      <ambientLight intensity={0.1} />
    </>
  );
};

const CameraAnimation = () => {
  useFrame((state) => {
    state.camera.position.z = 100 - (state.clock.elapsedTime % 5) * 23;
    state.camera.updateProjectionMatrix();
  });
  return null;
};

export const WarpEffect = () => {
  return (
    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
      <color attach="background" args={["#000000"]} />
      <WarpTunnel />
      <CameraAnimation />
    </Canvas>
  );
};
