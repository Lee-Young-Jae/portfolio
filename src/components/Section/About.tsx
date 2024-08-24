import Section from "../common/Section";
import styled from "styled-components";
import { colors } from "../../constants";

const AboutSection = () => {
  return (
    <Section id="about">
      <Styled.Title>안녕, 세상! 🙋</Styled.Title>
      <Styled.Title>
        <Styled.Strong>
          {" <"}프론트엔드 개발자 {"/> "}
        </Styled.Strong>
        이영재입니다.
      </Styled.Title>
      <Styled.Paragraph>
        삶에서 마주한 문제를 서비스 개발을 통해 해결하는 것을 좋아하며, 다양한
        IT 프로젝트 참여를 통해 꾸준히 성장해나가고 있습니다.
      </Styled.Paragraph>
      <Styled.Paragraph>
        저의 경험과 지식을 통해 훌륭한 동료들과 함께 성장하고, 새로운 도전을
        함께 하고 싶습니다.
      </Styled.Paragraph>
      <Styled.LinkContainer>
        <Styled.Link href="https://github.com/Lee-Young-Jae" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link href="mailto: ori_@kakao.com">Email</Styled.Link>
      </Styled.LinkContainer>
    </Section>
  );
};

const Styled = {
  Title: styled.h1`
    font-size: 36px;
    margin-bottom: 30px;
  `,
  Paragraph: styled.p`
    font-size: 18px;
    margin-bottom: 20px;
  `,
  Strong: styled.strong`
    color: ${colors.MINT};
  `,
  LinkContainer: styled.div`
    display: flex;
    justify-content: center;
  `,
  Link: styled.a`
    text-decoration: none;
    color: ${colors.MINT};
    font-size: 18px;
    margin: 0 10px;
  `,
};

export default AboutSection;
