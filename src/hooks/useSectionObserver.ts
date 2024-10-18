import { useEffect } from "react";

interface SectionObserverProps<T extends string> {
  setActiveSection: (sectionId: T) => void;
  sectionList: Record<string, T>;
}

const useSectionObserver = <T extends string>({
  setActiveSection,
  sectionList,
}: SectionObserverProps<T>) => {
  useEffect(() => {
    const sections = Object.values(sectionList)
      .map((section) => document.getElementById(section))
      .filter((section) => section !== null) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as T);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setActiveSection]);
};

export default useSectionObserver;
