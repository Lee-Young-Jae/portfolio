import { memo, useMemo, useState } from "react";
import styled from "styled-components";

import { sectionList } from "../../constants";
import useSectionObserver from "../../hooks/useSectionObserver";
import Navigator from "../common/Navigator";
import AboutSection from "../section/About";
import ProjectsSection from "../section/projects/ProjectSection";
import ExperienceSection from "../section/Experience";
import ModalRoot from "../common/ModalRoot";

type SectionList = (typeof sectionList)[keyof typeof sectionList];

const AppContent = () => {
  const [activeSection, setActiveSection] = useState<SectionList>(
    sectionList.ABOUT
  );
  useSectionObserver({ setActiveSection, sectionList });

  const MemoizedSections = useMemo(() => {
    const Sections = () => (
      <Styled.Sections>
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
      </Styled.Sections>
    );
    return memo(Sections);
  }, []);

  return (
    <>
      <Navigator activeSection={activeSection} />
      <MemoizedSections />
      <ModalRoot />
    </>
  );
};

const Styled = {
  Sections: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

export default AppContent;
