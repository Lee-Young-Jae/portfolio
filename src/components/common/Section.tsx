import { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../../constants";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}

const Section = ({ id, title, subtitle, children }: SectionProps) => {
  return (
    <Styled.SectionContainer id={id}>
      <Styled.Section>
        {title && <Styled.Title>{title}</Styled.Title>}
        {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
        {children}
      </Styled.Section>
    </Styled.SectionContainer>
  );
};

const Styled = {
  SectionContainer: styled.div`
    /* margin-top: 76px; */
  `,
  Section: styled.section`
    margin-top: 76px;
    padding: 20px;
    min-height: calc(100vh - 76px - 76px);
    color: ${colors.WHITE};

    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Title: styled.h2`
    font-size: 1.5rem;
    font-weight: "bold";
    margin-bottom: 16px;
    text-align: center;
  `,
  Subtitle: styled.h3`
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 20px;
    text-align: center;
  `,
};

export default Section;
