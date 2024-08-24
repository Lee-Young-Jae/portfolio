import styled from "styled-components";
import { sectionPaths } from "../../constants";

const Navigator = () => {
  return (
    <Styled.Navigator>
      <Styled.Link href={sectionPaths.about}>About</Styled.Link>
      <Styled.Link href={sectionPaths.projects}>Projects</Styled.Link>
      <Styled.Link href={sectionPaths.contact}>Contact</Styled.Link>
    </Styled.Navigator>
  );
};

const Styled = {
  Navigator: styled.div`
    position: fixed;
    top: 0;
    width: 100dvw;
    height: 76px;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
  `,
  Link: styled.a`
    text-decoration: none;
    color: white;
    margin: 0 20px;
    font-size: 20px;
  `,
};

export default Navigator;
