import "./App.css";
import { Canvas } from "@react-three/fiber";
import Particles from "./components/three/Particles";
import CameraController from "./components/three/CameraController";
import styled from "styled-components";
import Section from "./components/common/Section";
import Navigator from "./components/common/Navigator";
import { sectionList } from "./constants";
import AboutSection from "./components/\bSection/About";

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
      </Styled.Sections>
    </div>
  );
}

const Styled = {
  Background: styled.div`
    background-color: #000;
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
