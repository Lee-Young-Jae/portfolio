import { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../../constants";

interface SectionProps {
  id: string;
  title?: string;
  children?: ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <Styled.SectionContainer id={id}>
      <Styled.Section>
        <Styled.Title>{title}</Styled.Title>
        {children}
      </Styled.Section>
    </Styled.SectionContainer>
  );
};

const Styled = {
  SectionContainer: styled.div`
    margin-top: 76px;
  `,
  Section: styled.section`
    padding: 50px 0;
    min-height: 100vh;
    color: ${colors.WHITE};
    margin-top: 76px;
    padding: 20px;
    min-height: 100vh;
  `,
  Title: styled.h2`
    font-size: 36px;
    margin-bottom: 30px;
  `,
};

export default Section;
