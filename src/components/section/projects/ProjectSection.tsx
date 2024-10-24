import styled from "styled-components";
import { colors, sectionList } from "../../../constants";
import Section from "../../common/Section";
import ModalTrigger from "../../common/ModalTrigger";
import 같이면접 from "./modal/같이면접";
import SafetyWatch from "./modal/SafetyWatch";
import MonggeulMonggeul from "./modal/몽글몽글";
import Darf from "./modal/Darf";
import TakeCareOfMyRefrigerator from "./modal/TakeCareOfMyRefrigerator";
import YosoUI from "./modal/YosoUI";
// import 포트폴리오 from "./modal/포트폴리오";

const ProjectsSection = () => {
  return (
    <Section
      title="Projects"
      id={sectionList.PROJECTS}
      subtitle="주요 프로젝트"
    >
      <Styled.ProjectContainer>
        <Styled.ProjectCard>
          <Styled.ProjectTitle>
            React 기반 UI 라이브러리, 요소 UI (개선 중)
          </Styled.ProjectTitle>
          <Styled.LinkWrapper>
            <Styled.ProjectLink
              href="https://www.npmjs.com/package/yoso-ui"
              target="_blank"
            >
              https://www.npmjs.com/package/yoso-ui
            </Styled.ProjectLink>
          </Styled.LinkWrapper>
          <Styled.ProjectDetail>
            React 기반 프로젝트에서 재사용 가능한 UI 컴포넌트를 제공하는
            라이브러리입니다. UI 컴포넌트를 Storybook을 통해 컴포넌트의 다양한
            시나리오를 시각적으로 확인할 수 있도록 구성하였습니다.
          </Styled.ProjectDetail>
          <ModalTrigger>
            <YosoUI />
          </ModalTrigger>
        </Styled.ProjectCard>
        {/* <Styled.ProjectCard>
          <Styled.ProjectTitle>포트폴리오 사이트</Styled.ProjectTitle>
          <Styled.LinkWrapper>
            <Styled.ProjectLink
              href="https://youngjae-portfolio.vercel.app/"
              target="_blank"
            >
              https://youngjae-portfolio.vercel.app
            </Styled.ProjectLink>
          </Styled.LinkWrapper>
          <Styled.ProjectDetail>
            이 포트폴리오 사이트는 UI 재사용성과 성능 최적화에 중점을 두고
            개발되었습니다. React와 styled-components를 활용해 모듈화된
            컴포넌트를 구성하고, Three.js와 @react-three/fiber를 이용해
            인터랙티브 3D 그래픽을 통합했습니다.
          </Styled.ProjectDetail>
          <ModalTrigger>
            <포트폴리오 />
          </ModalTrigger>
        </Styled.ProjectCard> */}
        <Styled.ProjectCard>
          <Styled.ProjectTitle>
            가상 면접 AI 피드백 서비스, 같이면접
          </Styled.ProjectTitle>
          <Styled.LinkWrapper>
            <Styled.ProjectLink
              href="https://gachi-interview.vercel.app"
              target="_blank"
            >
              https://gachi-interview.vercel.app
            </Styled.ProjectLink>
          </Styled.LinkWrapper>
          <Styled.ProjectDetail>
            모의 면접을 보고, AI 피드백을 받을 수 있는 서비스를 개발했습니다. 한
            달간 매일 다른 개발자와 소통해가며 기획을 개선하였고 영상 처리
            최적화를 통한 UX 최적화에 신경썼습니다.
          </Styled.ProjectDetail>
          <ModalTrigger>
            <같이면접 />
          </ModalTrigger>
        </Styled.ProjectCard>
        <Styled.ProjectCard>
          <Styled.ProjectTitle>
            산업 재해 예방 플랫폼, Safety-Watch
          </Styled.ProjectTitle>
          <Styled.LinkWrapper>
            <Styled.ProjectLink
              href="https://safety-watch.vercel.app/"
              target="_blank"
            >
              https://safety-watch.vercel.app
            </Styled.ProjectLink>
          </Styled.LinkWrapper>
          <Styled.ProjectDetail>
            산업 안전관리 직무에 종사중인 지인의 요청으로 개발한 서비스입니다.
            현장에서 발생한 중대 재해 상황을 확인하고 관련된 KOSHA 예방 지침을
            제공합니다. 또한, 키워드를 통한 지침/법령 검색 기능을 제공합니다.
          </Styled.ProjectDetail>
          <ModalTrigger>
            <SafetyWatch />
          </ModalTrigger>
        </Styled.ProjectCard>
        <Styled.ProjectCard>
          <Styled.ProjectTitle>모임 관리 서비스, 몽글</Styled.ProjectTitle>
          <Styled.LinkWrapper>
            <Styled.ProjectLink
              href="https://moim.monggeul.online"
              target="_blank"
              $isActive={false}
            >
              https://moim.monggeul.online
            </Styled.ProjectLink>
            <Styled.LinkDescription>
              (24.08.27 서비스 종료)
            </Styled.LinkDescription>
          </Styled.LinkWrapper>
          <Styled.ProjectDetail>
            "프로젝트 몽글"은 여러개의 소모임을 관리함에 한계를 느끼고 제작한
            모임 관리 웹 서비스입니다. 사용자는 모임을 생성하고 관리할 수
            있으며, 모임 일정, 투표, 실시간 채팅 등을 통해 모임 관리를
            효율적으로 할 수 있습니다.
          </Styled.ProjectDetail>
          <ModalTrigger>
            <MonggeulMonggeul />
          </ModalTrigger>
        </Styled.ProjectCard>
        <Styled.ProjectCard>
          <Styled.ProjectTitle>함께하는 다이어트, Darf</Styled.ProjectTitle>
          <Styled.LinkWrapper>
            <Styled.ProjectLink
              href="https://darf-firebase.web.app"
              target="_blank"
              $isActive={false}
            >
              https://darf-firebase.web.app
            </Styled.ProjectLink>
            <Styled.LinkDescription>
              (23.11.30 서비스 종료)
            </Styled.LinkDescription>
          </Styled.LinkWrapper>
          <Styled.ProjectDetail>
            KKU 졸업 프로젝트로 진행한 식단 관리 서비스입니다. 사용자는 식단을
            등록하고, 다른 사용자의 식단을 참고할 수 있습니다. 또한, 식단을
            통계로 확인하고, 칼로리 정보와 같이 다이어트에 도움이 되는 정보를
            얻을 수 있습니다.
          </Styled.ProjectDetail>
          <ModalTrigger>
            <Darf />
          </ModalTrigger>
        </Styled.ProjectCard>
        <Styled.ProjectCard>
          <Styled.ProjectTitle>
            똑똑한 냉장고 관리 비서, 내 냉장고를 부탁해
          </Styled.ProjectTitle>
          <Styled.LinkWrapper>
            <Styled.ProjectLink href="" target="_blank" $isActive={false}>
              https://tcom-refrigerator.vercel.app
            </Styled.ProjectLink>
            <Styled.LinkDescription>
              (23.06.02 서비스 종료)
            </Styled.LinkDescription>
          </Styled.LinkWrapper>
          <Styled.ProjectDetail>
            냉장고에 있는 재료를 등록하고, 레시피를 추천받을 수 있는
            서비스입니다. 사용자는 레시피를 찾고, 레시피를 등록할 수 있습니다.
            또한, 레시피를 통해 재료를 구매할 수 있는 기능을 제공합니다.
          </Styled.ProjectDetail>
          <ModalTrigger>
            <TakeCareOfMyRefrigerator />
          </ModalTrigger>
        </Styled.ProjectCard>
      </Styled.ProjectContainer>
    </Section>
  );
};

const Styled = {
  ProjectContainer: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 26px;
    justify-content: center;
    padding: 0 26px;
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      padding: 0;
    }
  `,
  ProjectCard: styled.div`
    display: flex;
    flex-wrap: wrap;
    -webkit-backdrop-filter: blur(0.5px);
    backdrop-filter: blur(0.5px);
    background-color: rgba(30, 41, 73, 0.5);
    border-radius: 10px;
    padding: 26px;
    border: 0.6px solid rgba(12, 120, 120, 0.7);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.3);
    max-width: 476px;
  `,
  ProjectTitle: styled.h3`
    font-size: 20px;
    width: 100%;
    margin-bottom: 6px;
  `,

  ProjectDetail: styled.p`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    font-size: 16px;
    margin-bottom: 16px;
  `,
  LinkWrapper: styled.div`
    display: flex;
    align-items: end;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 8px;
  `,

  ProjectLink: styled.a<{ $isActive?: boolean }>`
    text-decoration: none;
    word-break: break-all;
    font-size: 15px;

    color: ${({ $isActive = true }) => {
      return $isActive ? colors.MINT_700 : colors.GRAY_500;
    }};
    cursor: ${({ $isActive = true }) => {
      return $isActive ? "pointer" : "not-allowed";
    }};
    pointer-events: ${({ $isActive = true }) => {
      return $isActive ? "auto" : "none";
    }};
    text-decoration: ${({ $isActive = true }) => {
      return $isActive ? "none" : "line-through";
    }};
  `,

  LinkDescription: styled.sub`
    color: ${colors.GRAY_500};
    font-size: 12px;
  `,
};

export default ProjectsSection;
