import "./App.css";
import { Canvas } from "@react-three/fiber";
import Particles from "./components/three/Particles";
import CameraController from "./components/three/CameraController";
import styled from "styled-components";
import Navigator from "./components/common/Navigator";
import AboutSection from "./components/Section/About";
import { colors } from "./constants";
import ProjectSection from "./components/Section/Projects";

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
      </Styled.Sections>
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
