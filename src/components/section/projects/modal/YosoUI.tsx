import { projectImages } from "../../../../constants";
import Carousel from "../../../common/Carousel";
import Styled from "./Style";

const YosoUI = () => {
  return (
    <Styled.Article>
      <Styled.Header>
        <Styled.Title>YOSO UI</Styled.Title>
        <Styled.Date>2024년 09월</Styled.Date>

        <Carousel images={Object.values(projectImages.YOSO_UI)} />

        <Styled.LinkContainer>
          npm:
          <Styled.Link
            href="https://www.npmjs.com/package/yoso-ui"
            target="_blank"
            rel="noreferrer"
          >
            https://www.npmjs.com/package/yoso-ui
          </Styled.Link>
        </Styled.LinkContainer>

        <Styled.LinkContainer>
          github:
          <Styled.Link
            href="https://github.com/Lee-Young-Jae/yoso-ui"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/Lee-Young-Jae/yoso-ui
          </Styled.Link>
        </Styled.LinkContainer>

        <Styled.LinkContainer>
          docs:
          <Styled.Link
            href="https://lee-young-jae.github.io/yoso-ui/"
            target="_blank"
            rel="noreferrer"
          >
            https://lee-young-jae.github.io/yoso-ui/
          </Styled.Link>
        </Styled.LinkContainer>
      </Styled.Header>
      <Styled.Section>
        <Styled.SectionTitle>사용한 기술</Styled.SectionTitle>
        <Styled.SkillList>
          {["React", "TypeScript", "styled-components", "Storybook", "npm"].map(
            (skill) => (
              <Styled.SkillItem key={skill}>{skill}</Styled.SkillItem>
            )
          )}
        </Styled.SkillList>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionTitle>프로젝트 개요</Styled.SectionTitle>
        <Styled.Paragraph>
          yoso-ui는 다양한 React 기반 프로젝트에서 재사용 가능한 UI 컴포넌트를
          제공하는 라이브러리입니다. <br /> 여러 프로젝트를 진행해 오며, 매번
          다시 만들던 여러 공용 컴포넌트를 모듈화하여 라이브러리로 제공하고자
          시작하게 되었습니다. ImageSlider, Modal 등의 다양한 UI 컴포넌트를
          제공하며, Storybook을 통해 각 컴포넌트에 대한 다양한 시나리오를
          시각적으로 확인가능한 문서와 데모를 제공합니다. 또한, 번들링된 파일을
          npm 패키지로 배포하였고, 기능 추가에 따른 버전 관리를 통해 사용자에게
          안정적인 서비스를 제공하고 있습니다.
        </Styled.Paragraph>
      </Styled.Section>
       
      <Styled.Section>
        <Styled.SectionTitle>개발 및 기여 내용</Styled.SectionTitle>
        <Styled.Paragraph>
          - 접근성과 개발자경험, 그리고 성능을 고려한 다양한 UI 컴포넌트
          (ImageSlider, Modal, Toast 등) 설계 및 구현 <br />
          - Storybook을 활용한 문서화 및 데모 페이지 구성 <br />- 번들링된
          파일을 npm에 배포하고, 기능 추가에 따른 버전 관리 <br />- 성능 최적화
          및 사용자 경험 개선
        </Styled.Paragraph>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionTitle>
          확장성을 고려한 디자인 시스템 구성
        </Styled.SectionTitle>
        <Styled.SubSection>
          <Styled.SubTitle>[문제 상황: 라이브러리의 확장성]</Styled.SubTitle>
          <Styled.Paragraph>
            다양한 프로젝트 환경에서 쉽게 통합할 수 있도록 해야 했습니다. 특히
            Remix, Next.js 같은 환경에서 동작하는{" "}
            <Styled.Highlight>유연한 컴포넌트 구조</Styled.Highlight>가
            필요했습니다.
          </Styled.Paragraph>
        </Styled.SubSection>
        <Styled.SubSection>
          <Styled.SubTitle>
            [해결 방안: 확장 가능한 디자인 시스템]
          </Styled.SubTitle>
          <Styled.Paragraph>
            작성한 리액트 컴포넌트들을 Vite(
            <Styled.Highlight>rollup</Styled.Highlight>)을 통해 번들링의 크기를
            줄이고, cjs, esm format을 모두 지원하도록 구성하여 CRA, Next.js 등
            다양한 환경에서 사용할 수 있도록 했습니다. 또한,{" "}
            <Styled.Highlight>YosoThemeProvider</Styled.Highlight>를 도입하여
            테마 변경 및 커스터마이징이 가능하게 하여 확장성을 확보했습니다.
          </Styled.Paragraph>
        </Styled.SubSection>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionTitle>
          사용자 경험을 고려한 문서화 및 배포
        </Styled.SectionTitle>
        <Styled.SubSection>
          <Styled.SubTitle>[문제 상황: 문서화의 필요성]</Styled.SubTitle>
          <Styled.Paragraph>
            라이브러리에서 제공하는 컴포넌트가 많아질수록 docs관리의 부담이
            커졌습니다. 또한 사용자가 보는 문서가 최신 스펙을 반영하는지 보장할
            수 없었습니다.
          </Styled.Paragraph>
        </Styled.SubSection>
        <Styled.SubSection>
          <Styled.SubTitle>
            [해결 방안: Storybook을 활용한 문서화]
          </Styled.SubTitle>
          <Styled.Paragraph>
            - Storybook을 활용하여 컴포넌트의 다양한 시나리오를 시각적으로
            확인할 수 있게 하였습니다. 또한, docs 페이지를 통해 컴포넌트의
            사용법과 데모를 제공하여 사용자가 쉽게 이해하고 사용할 수 있도록
            했습니다.
            <br />- Github Action을 통한 자동 배포를 통해 최신 스펙을 반영하고,
            사용자에게 안정적인 서비스를 제공했습니다.
          </Styled.Paragraph>
        </Styled.SubSection>
      </Styled.Section>
    </Styled.Article>
  );
};

export default YosoUI;
