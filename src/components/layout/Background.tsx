import { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

import Particles from "../three/Particles";
import CameraController from "../three/CameraController";
import { colors } from "../../constants";

const Background = () => {
  return (
    <Styled.Background>
      <Suspense fallback={null}>
        <Styled.Canvas>
          <Particles count={3000} />
          <CameraController />
        </Styled.Canvas>
      </Suspense>
    </Styled.Background>
  );
};

const Styled = {
  Background: styled.div`
    background-color: ${colors.BLACK};
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  `,

  Canvas: styled(Canvas)`
    display: block;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
  `,
};

export default Background;
