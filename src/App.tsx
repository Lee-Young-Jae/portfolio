import "./App.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

import Particles from "./components/three/Particles";
import CameraController from "./components/three/CameraController";
import Navigator from "./components/common/Navigator";
import AboutSection from "./components/section/About";
import ProjectSection from "./components/section/projects/ProjectSection";
import ExperienceSection from "./components/section/Experience";
import { colors } from "./constants";
import ModalRoot from "./components/common/ModalRoot";

function App() {
  return (
    <div className="App">
      <Styled.Background>
        <Suspense fallback={null}>
          <Styled.Canvas>
            <Particles count={3000} />
            <CameraController />
          </Styled.Canvas>
        </Suspense>
      </Styled.Background>
      <Navigator />
      <Styled.Sections>
        <AboutSection />
        <ProjectSection />
        <ExperienceSection />
      </Styled.Sections>
      <ModalRoot />
    </div>
  );
}

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

  Sections: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

export default App;
