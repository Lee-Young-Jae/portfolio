import { useEffect } from "react";

import { sectionList } from "../constants/sections";

interface SectionObserverProps {
  setActiveSection: (sectionId: string) => void;
}

const useSectionObserver = ({ setActiveSection }: SectionObserverProps) => {
  useEffect(() => {
    const sections = Object.values(sectionList)
      .map((section) => document.getElementById(section))
      .filter((section) => section !== null) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setActiveSection]);
};

export default useSectionObserver;
