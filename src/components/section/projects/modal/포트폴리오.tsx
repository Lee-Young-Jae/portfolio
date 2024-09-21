import { projectImages } from "../../../../constants";
import Carousel from "../../../common/Carousel";
import Styled from "./Style";

const Portfolio = () => {
  return (
    <Styled.Article>
      <Styled.Header>
        <Styled.Title>포트폴리오 사이트</Styled.Title>
        <Styled.Date>2024년 09월</Styled.Date>
        <Carousel images={Object.values(projectImages.Portfolio)} />
        <Styled.LinkContainer>
          서비스 링크:
          <Styled.Link
            href="https://youngjae-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            https://youngjae-portfolio.vercel.app
          </Styled.Link>
        </Styled.LinkContainer>
        <Styled.LinkContainer>
          GitHub:
          <Styled.Link
            href="https://github.com/Lee-Young-Jae/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/Lee-Young-Jae/portfolio
          </Styled.Link>
        </Styled.LinkContainer>
      </Styled.Header>

      <Styled.Section>
        <Styled.SectionTitle>사용한 기술</Styled.SectionTitle>
        <Styled.SkillList>
          {[
            "React",
            "Three.js",
            "@react-three/fiber",
            "styled-components",
            "TypeScript",
            "Vercel",
          ].map((skill) => (
            <Styled.SkillItem key={skill}>{skill}</Styled.SkillItem>
          ))}
        </Styled.SkillList>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionTitle>프로젝트 개요</Styled.SectionTitle>
        <Styled.Paragraph>
          이 포트폴리오 사이트는 UI 재사용성과 성능 최적화에 중점을 두고
          개발되었습니다. 컴포넌트는 사이트의 여러 섹션에서 재사용을 극대화하기
          위해 모듈성을 염두에 두고 구조화되어 향후 업데이트와 확장이 원활하게
          이루어질 수 있도록 설계되었습니다. 또한, Three.js와
          @react-three/fiber를 이용해 인터랙티브한 3D 그래픽을 통합했습니다.
        </Styled.Paragraph>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionTitle>개발 및 기여 내용</Styled.SectionTitle>
        <Styled.Paragraph>
          - UI/UX 설계 및 구현 <br />- Three.js를 활용한 3D 파티클 애니메이션 및
          인터랙티브 요소 개발 <br />- 공통 컴포넌트 및 레이아웃 구성
        </Styled.Paragraph>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>
          성능 최적화 및 사용자 경험 개선
        </Styled.SectionTitle>
        <Styled.SubSection>
          <Styled.SubTitle>[문제 상황: 3D 렌더링 성능 저하]</Styled.SubTitle>
          <Styled.Paragraph>
            3D 모델과 애니메이션이 많은 리소스를 차지해 초기 로딩 시간이
            느려지는 문제가 발생했습니다.
          </Styled.Paragraph>
        </Styled.SubSection>
        <Styled.SubSection>
          <Styled.SubTitle>[해결 방안 1: 렌더링 최적화]</Styled.SubTitle>
          <Styled.Paragraph>
            Three.js의 메모리 사용을 줄이기 위해 메모이제이션을 활용하고, 렌더링
            최적화를 통해 Thee.js 객체의 불필요한 렌더링을 방지했습니다. 이를
            통해 최초 배포 단계에서의 LightHouse 성능 점수를{" "}
            <Styled.Highlight>81점</Styled.Highlight>에서{" "}
            <Styled.Highlight>98점</Styled.Highlight>으로 끌어올렸습니다.
          </Styled.Paragraph>
        </Styled.SubSection>
        <Styled.SubSection>
          <Styled.SubTitle>[해결 방안 2: 이미지 확장자 변경]</Styled.SubTitle>
          <Styled.Paragraph>
            기존 GIF 이미지를 WebP로 변경해 이미지 용량을 줄이고, 로딩 속도를
            개선했습니다. 4G 환경에서의 로딩 속도를 3.6초에서 65ms로{" "}
            <Styled.Highlight>98%</Styled.Highlight> 단축시켰습니다.
          </Styled.Paragraph>
        </Styled.SubSection>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionTitle>사용자 추적 및 데이터 분석</Styled.SectionTitle>
        <Styled.Paragraph>
          사용자 유입 경로와 행동 분석을 통해 사용자 흐름을 파악하고자 했습니다.
          Google Analytics 4를 도입하여 사용자 상호작용에 대한 데이터를
          수집하고, 실시간 피드백을 통해 사용자 흐름을 개선하고 전반적인 성능을
          향상시켰습니다.
        </Styled.Paragraph>
      </Styled.Section>
    </Styled.Article>
  );
};

export default Portfolio;
