import styled from "styled-components";

import { colors, sectionPaths, sectionList } from "../../constants";

interface NavigatorProps {
  activeSection: string;
}

const Navigator = ({ activeSection }: NavigatorProps) => {
  return (
    <Styled.Navigator>
      <Styled.Link
        href={sectionPaths.ABOUT}
        $active={activeSection === sectionList.ABOUT}
      >
        About
      </Styled.Link>
      <Styled.Link
        href={sectionPaths.PROJECTS}
        $active={activeSection === sectionList.PROJECTS}
      >
        Projects
      </Styled.Link>
      <Styled.Link
        href={sectionPaths.EXPERIENCE}
        $active={activeSection === sectionList.EXPERIENCE}
      >
        Experience
      </Styled.Link>
    </Styled.Navigator>
  );
};

const Styled = {
  Navigator: styled.div`
    position: fixed;
    top: 0;
    width: 100dvw;
    min-height: 76px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    z-index: 1000;
  `,
  Link: styled.a<{ $active: boolean }>`
    text-decoration: none;
    color: ${({ $active }) => ($active ? colors.MINT_700 : colors.WHITE)};
    text-shadow: ${({ $active }) =>
      $active ? `0 0 1px ${colors.WHITE}` : "none"};

    margin: 0 20px;
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    &:hover {
      color: ${colors.MINT_700};
      text-shadow: 0 0 1px ${colors.WHITE};
    }
  `,
};

export default Navigator;
