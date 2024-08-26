import "./App.css";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

import Particles from "./components/three/Particles";
import CameraController from "./components/three/CameraController";
import Navigator from "./components/common/Navigator";
import AboutSection from "./components/section/About";
import ProjectSection from "./components/section/Projects";
import ExperienceSection from "./components/section/Experience";
import { colors } from "./constants";

function App() {
  return (
    <div className="App">
      <Styled.Background>
        <Styled.Canvas>
          <Particles count={3000} />
          <CameraController />
        </Styled.Canvas>
      </Styled.Background>
      <Navigator />
      <Styled.Sections>
        <AboutSection />
        <ProjectSection />
        <ExperienceSection />
      </Styled.Sections>
      <div id="modalRoot" />
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
