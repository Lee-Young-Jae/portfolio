import styled from "styled-components";
import Section from "../common/Section";
import { colors, sectionList } from "../../constants";

const ExperienceSection = () => {
  return (
    <Section
      title="Experience"
      subtitle="경험 & 이력"
      id={sectionList.EXPERIENCE}
    >
      <Styled.ExperienceContainer>
        <Styled.ExperienceTimeline>
          <Styled.ExperiencePoint />
          <Styled.ExperienceDetail>
            <Styled.ExperienceDate>
              2023년 03월 ~ 2023년 05월
            </Styled.ExperienceDate>
            <Styled.ExperienceTitle>
              제 3회 금융 데이터 활용 아이디어 경진대회
            </Styled.ExperienceTitle>
            <Styled.ExperienceSubTitle>본선 진출</Styled.ExperienceSubTitle>
          </Styled.ExperienceDetail>
          <Styled.ExperienceContent>
            주식상품의 위험성을 계산해 일반인도 쉽게 접근할 수 있게 만들자라는
            주제로 디자이너, 기획자와 함께 팀을 이뤄 목업 서비스를
            제작하였습니다. 서로 신뢰하는 기획자, 디자이너와의 함께 팀을 이루어
            다양한 분야의 전문가들과 소통하며 만족스러운 협업을 경험했습니다.
          </Styled.ExperienceContent>
        </Styled.ExperienceTimeline>
        {/* <Styled.ExperienceTimeline>
          <Styled.ExperiencePoint />
          <Styled.ExperienceDetail>
            <Styled.ExperienceDate>
              2021년 03월 ~ 2023년 02월
            </Styled.ExperienceDate>
            <Styled.ExperienceTitle>건국대학교 GLOCAL</Styled.ExperienceTitle>
            <Styled.ExperienceSubTitle>
              소프트웨어학 전공 (학사)
            </Styled.ExperienceSubTitle>
          </Styled.ExperienceDetail>
          <Styled.ExperienceContent>
            전공 수업에서 컴퓨터 구조, 네트워크, 운영체제, 프로그래밍 언어,
            웹개발 등을 학습했습니다.
          </Styled.ExperienceContent>
        </Styled.ExperienceTimeline> */}
      </Styled.ExperienceContainer>
    </Section>
  );
};

const Styled = {
  ExperienceContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid ${colors.MINT_700};
    padding-left: 20px;
  `,

  ExperienceTimeline: styled.div`
    position: relative;
    margin-top: 16px;
    display: flex;
    align-items: flex-start;
    max-width: 512px;
    flex-wrap: wrap;
  `,

  ExperiencePoint: styled.div`
    width: 8.5px;
    height: 8.5px;
    border: 2px solid ${colors.MINT_700};
    border-radius: 50%;
    position: absolute;
    left: -26.5px;
    top: 7.5px;
    background-color: ${colors.MINT_300};
  `,

  ExperienceDetail: styled.div`
    display: flex;
    flex-direction: column;
  `,

  ExperienceTitle: styled.h3`
    margin-top: 6px;
    font-size: 1.1rem;
    width: 100%;
  `,

  ExperienceSubTitle: styled.p`
    font-size: 0.8rem;
    width: 100%;
  `,

  ExperienceDate: styled.span`
    width: fit-content;
    font-size: 14px;
    margin-bottom: 5px;
    border-radius: 14px;
    padding: 5px 10px;
    text-align: center;
    border: 1px solid ${colors.MINT_700};
  `,

  ExperienceContent: styled.p`
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.5;
  `,
};

export default ExperienceSection;
