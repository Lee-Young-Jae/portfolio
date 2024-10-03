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
          제공하는 라이브러리입니다. "요소"라는 단어에서 영감을 받아 제작된 이
          라이브러리는 모듈화된 UI 컴포넌트를 제공합니다. ImageSlider, Modal
          등의 다양한 UI 요소를 포함하며, 각 컴포넌트는 styled-components를
          활용해 구성되었습니다. 더불어 Storybook을 통해 각 컴포넌트에 대한
          다양한 시나리오를 시각적으로 확인하고, 문서와 데모를 제공하여
          개발자들이 쉽게 사용할 수 있도록 했습니다.
        </Styled.Paragraph>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>개발 및 기여 내용</Styled.SectionTitle>
        <Styled.Paragraph>
          - 다양한 UI 컴포넌트 (Button, Modal, Popover 등) 설계 및 구현 <br />
          - Storybook을 활용한 문서화 및 데모 페이지 구성 <br />- TypeScript를
          통한 타입 안전성과 코드 유지보수성 강화
        </Styled.Paragraph>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionTitle>
          성능 최적화 및 사용자 경험 개선
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
            작성한 리액트 컴포넌트들을{" "}
            <Styled.Highlight>rollup</Styled.Highlight>을 이용해 번들링하고,
            cjs, esm format을 모두 지원해 CRA, Next.js 등 다양한 환경에서 사용할
            수 있도록 했습니다. 또한,{" "}
            <Styled.Highlight>YosoThemeProvider</Styled.Highlight>를 도입하여
            테마 변경 및 커스터마이징이 가능하게 하여 확장성을 확보했습니다.
          </Styled.Paragraph>
        </Styled.SubSection>
      </Styled.Section>
    </Styled.Article>
  );
};

export default YosoUI;
