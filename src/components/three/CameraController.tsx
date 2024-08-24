import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

const CameraController = () => {
  const { camera } = useThree();
  const cameraRef = useRef(camera);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const radius = 1100; // 카메라가 회전할 반경
    const speed = 0.1; // 회전 속도

    cameraRef.current.position.x = Math.sin(t * speed) * radius;
    cameraRef.current.position.z = Math.cos(t * speed) * radius;
    cameraRef.current.position.y = Math.sin(t * speed) * radius * -0.5;
    cameraRef.current.lookAt(0, 0, 0);
  });

  return null;
};

export default CameraController;
