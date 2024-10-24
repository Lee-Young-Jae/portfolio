import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";

const ScrolledCameraController = () => {
  const { camera } = useThree();
  const cameraRef = useRef(camera);

  const scrollY = useRef(0);
  const maxScroll = useRef(1);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    const updateMaxScroll = () => {
      maxScroll.current = document.body.scrollHeight - window.innerHeight;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateMaxScroll);

    updateMaxScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMaxScroll);
    };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const radius = 500; // 카메라가 회전할 반경
    const speed = 0.1; // 회전 속도

    // 스크롤 비율 계산
    const scrollFactor = scrollY.current / maxScroll.current || 0;
    const scrollOffset = scrollFactor * 1100; // 이동 범위

    cameraRef.current.position.x = Math.sin(t * speed) * radius;
    cameraRef.current.position.z = Math.cos(t * speed) * radius - scrollOffset;
    cameraRef.current.position.y = Math.sin(t * speed) * radius * -0.5;

    cameraRef.current.lookAt(0, 0, 0);
  });

  return null;
};

export default ScrolledCameraController;
