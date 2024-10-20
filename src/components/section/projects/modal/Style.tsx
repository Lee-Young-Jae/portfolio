import styled from "styled-components";
import { colors } from "../../../../constants";

const Styled = {
  Article: styled.article`
    margin-top: 32px;
    color: ${colors.WHITE};
    font-family: "Arial", sans-serif;
  `,

  Header: styled.header`
    margin-bottom: 24px;
  `,

  Title: styled.h2`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 8px;
    color: ${colors.MINT_500};
  `,
  Date: styled.span`
    font-size: 14px;
  `,

  LinkContainer: styled.div`
    display: flex;
    margin-top: 8px;
    gap: 8px;
    flex-wrap: wrap;
  `,

  Link: styled.a`
    color: ${colors.MINT_300};
    text-decoration: none;
    word-break: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
    display: inline-block;
    white-space: pre-wrap;
  `,

  Section: styled.section`
    margin-bottom: 24px;
  `,
  SectionTitle: styled.h3`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
    color: ${colors.MINT_500};
  `,
  SubSection: styled.div`
    margin-bottom: 32px;
  `,
  SubTitle: styled.h4`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  `,
  Paragraph: styled.p`
    font-size: 16px;
    line-height: 1.6;
  `,
  SkillList: styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
  `,
  SkillItem: styled.li`
    font-size: 14px;
    padding: 4px 8px;
    border-radius: 4px;
    color: ${colors.WHITE};
    border: 1px solid ${colors.MINT_700};
  `,
  Highlight: styled.span`
    font-weight: bold;
    color: ${colors.MINT_300};
  `,

  List: styled.ul`
    list-style-type: disc;
    margin-left: 20px;
  `,
  ListItem: styled.li`
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 8px;
  `,
  TechItem: styled.div`
    margin-bottom: 16px;
  `,

  CodeBlocks: styled.code`
    display: block;
    margin-top: 16px;
    margin-bottom: 16px;
    background-color: ${colors.GRAY_700};
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    font-size: 14px;
  `,

  SemiCodeBlocks: styled.code`
    background-color: ${colors.GRAY_800};
    padding: 8px;
    border-radius: 8px;
    font-size: 14px;
    margin: 0 4px;
  `,

  VideoLink: styled.a`
    display: block;
    margin-top: 16px;
    font-size: 16px;
  `,
};

export default Styled;
