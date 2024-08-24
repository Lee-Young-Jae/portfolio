import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { InstancedMesh, Object3D } from "three";

interface ParticlesProps {
  count: number;
}

const Particles = ({ count }: ParticlesProps) => {
  const mesh = useRef<InstancedMesh>(null!);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new Object3D(), []);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { time, factor, speed, x, y, z } = particle;

      time = particle.time += speed / 2;
      const a = Math.cos(time) + Math.sin(time * 1) / 10;
      const b = Math.sin(time) + Math.cos(time * 2) / 10;
      const s = Math.cos(time);

      dummy.position.set(
        x + Math.cos((time / 10) * factor) + (Math.sin(time * 1) * factor) / 10,
        y + Math.cos((time / 10) * factor) + (Math.sin(time * 2) * factor) / 10,
        z + Math.cos((time / 10) * factor) + (Math.sin(time * 3) * factor) / 10
      );
      dummy.scale.set(s, a, a);
      dummy.rotation.set(s * 5, s * 5, b * 5);
      dummy.updateMatrix();

      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <ambientLight intensity={1} />
      <instancedMesh
        ref={mesh}
        args={[undefined, undefined, count]}
        renderOrder={1}
      >
        <dodecahedronGeometry args={[1, 1]} />
        <meshPhongMaterial color="#ffffff" />
      </instancedMesh>
    </>
  );
};

export default Particles;
