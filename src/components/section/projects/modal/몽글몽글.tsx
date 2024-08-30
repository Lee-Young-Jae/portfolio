import { projectImages } from "../../../../constants";
import Carousel from "../../../common/Carousel";
import Styled from "./Style";

const MonggeulMonggeul = () => {
  return (
    <Styled.Article>
      <Styled.Header>
        <Styled.Title>프로젝트 몽글</Styled.Title>
        <Styled.Date>2023년 06월 ~ 2023년 08월</Styled.Date>
        <Carousel images={Object.values(projectImages.MONGGEUL_MONGGEUL)} />
        <Styled.LinkContainer>
          GitHub:
          <Styled.Link
            href="https://github.com/Lee-Young-Jae/MonggeulMonggeul"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/Lee-Young-Jae/MonggeulMonggeul
          </Styled.Link>
        </Styled.LinkContainer>
      </Styled.Header>

      <Styled.Section>
        <Styled.SectionTitle>사용한 기술</Styled.SectionTitle>
        <Styled.SkillList>
          {[
            "Next.js",
            "TypeScript",
            "React-Query",
            "Socket.io",
            "Styled-Component",
            "Express",
            "MySQL",
            "AWS EC2",
            "Nginx",
          ].map((skill) => (
            <Styled.SkillItem key={skill}>{skill}</Styled.SkillItem>
          ))}
        </Styled.SkillList>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>프로젝트 개요</Styled.SectionTitle>
        <Styled.Paragraph>
          "프로젝트 몽글"은 여러개의 소모임을 관리함에 한계를 느끼고 제작한 모임
          관리 웹 서비스입니다. 사용자는 모임을 생성하고 관리할 수 있으며, 모임
          일정, 공지사항, 멤버 관리 등을 효율적으로 할 수 있습니다. 각 모임은
          비공개 초대 코드를 통해 구성원을 초대할 수 있고 원활한 소통을 위해
          모임 별 채팅 기능을 제공합니다.
        </Styled.Paragraph>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>개발 및 기여 내용</Styled.SectionTitle>

        <Styled.SubSection>
          <Styled.SubTitle>
            [문제 상황: 에러 처리 보일러 플레이트 코드]
          </Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>
              서비스 기능이 추가됨에 따라 비동기 요청이 많아졌습니다. 그 결과
              비동기 에러 처리 관련 코드가 중복되고 반복되어 코드베이스가
              복잡해졌고, 유지보수와 확장성이 떨어지는 문제가 발생했습니다.
            </Styled.ListItem>
            <Styled.ListItem>
              비동기 요청마다 개별적으로 에러 처리를 작성하다 보니, 일관성이
              부족하고 에러 처리 로직이 분산되어 관리하기 어려웠습니다.
            </Styled.ListItem>
          </Styled.List>
        </Styled.SubSection>

        <Styled.SubSection>
          <Styled.SubTitle>
            [해결 방안: 중앙집중식 에러 처리와 커스텀 훅 도입]
          </Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>
              <Styled.Highlight>
                중앙집중식 에러 처리 메커니즘 도입
              </Styled.Highlight>
              : 중앙집중식 에러 처리 메커니즘을 도입하여 에러 처리 로직을
              일관되게 관리할 수 있도록 개선했습니다.
            </Styled.ListItem>
            <Styled.ListItem>
              <Styled.Highlight>React Query 활용</Styled.Highlight>: `React
              Query`와 같은 상태 관리 라이브러리의 `error` 상태를 활용하여 에러
              처리 로직을 중앙에서 관리하도록 했습니다.
            </Styled.ListItem>
            <Styled.ListItem>
              <Styled.Highlight>ErrorBoundary 적용</Styled.Highlight>:
              `ErrorBoundary`를 사용하여 공통된 에러처리가 가능한 로직은
              한곳에서 처리할 수 있도록 개선했습니다.
            </Styled.ListItem>
            <Styled.ListItem>
              이를 통해 비동기 요청에 대한 에러 처리가 단순화되고, 코드베이스가
              보다 깨끗하고 유지보수하기 쉬워졌습니다.
            </Styled.ListItem>
          </Styled.List>
        </Styled.SubSection>

        <Styled.SubSection>
          <Styled.SubTitle>
            [문제 상황: 배포 후 쿠키가 제대로 브라우저에 심어지지 않는 문제]
          </Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>
              배포 후 사용자 인증과 관련된 쿠키가 브라우저에 제대로 심어지지
              않는 문제가 발생했습니다. 이로 인해 사용자는 로그인이 유지되지
              않거나, 인증이 필요한 기능을 사용할 수 없었습니다.
            </Styled.ListItem>
            <Styled.ListItem>
              특히, Cross-Origin 환경에서 쿠키가 설정되지 않는 문제가
              두드러졌습니다. 이는 보안 설정이나 쿠키 설정의 문제로
              추정되었습니다.
            </Styled.ListItem>
            <Styled.ListItem>
              또, 백엔드 서버는 AWS EC2로 배포하였고, 비용 절감을 위해
              프론트엔드는 Vercel을 이용하여 배포 중이었습니다. 이때 가비아에서
              구매한 도메인을 사용하였는데, AWS와 Vercel은 각자의 도메인 네임
              서버를 사용 중이었습니다. 이러한 네임 서버의 불일치로 인해
              Cross-Origin 쿠키 설정 문제가 발생했습니다.
            </Styled.ListItem>
          </Styled.List>
        </Styled.SubSection>

        <Styled.SubSection>
          <Styled.SubTitle>
            [해결 방안: 쿠키 설정 및 보안 설정 개선]
          </Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>
              <Styled.Highlight>SameSite 속성 설정</Styled.Highlight>:
              `SameSite` 속성을 `None`으로 설정하고 `Secure` 속성을 추가하여
              쿠키가 모든 도메인에서 접근 가능하도록 했습니다. 이를 통해
              Cross-Origin 요청에서 쿠키가 제대로 설정되도록 했습니다.
            </Styled.ListItem>
            <Styled.ListItem>
              <Styled.Highlight>HTTP 헤더 설정</Styled.Highlight>: 서버에서
              쿠키를 설정할 때 적절한 `Set-Cookie` 헤더를 사용하여 보안과 관련된
              속성을 명확히 설정했습니다.
            </Styled.ListItem>
            <Styled.ListItem>
              <Styled.Highlight>환경 변수 설정</Styled.Highlight>: 배포 환경에서
              도메인과 관련된 환경 변수를 정확하게 설정하여, 프론트엔드와 백엔드
              간의 도메인 일치 문제를 해결했습니다.
            </Styled.ListItem>
            <Styled.ListItem>
              <Styled.Highlight>DNS 일치</Styled.Highlight>: 가비아 도메인의
              네임 서버 설정을 조정하고 AWS와 Vercel이 동일한 네임 서버를
              사용하도록 설정했습니다. AWS Router53 레코드에 Vercel의 도메인을
              등록하여 문제를 해결했습니다.
            </Styled.ListItem>
          </Styled.List>
        </Styled.SubSection>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>개발 경험 개선</Styled.SectionTitle>
        <Styled.List>
          <Styled.ListItem>
            <Styled.Highlight>컴포넌트 개발</Styled.Highlight>: Modal,
            CheckList, Calendar 등의 프로젝트의 요구사항에 맞는 UI 컴포넌트를
            직접 개발했습니다. 재활용성이 높은 컴포넌트일수록 내부적인 UI 상태만
            가지도록 구현하여 재사용성을 높이기 위해 노력했습니다. 작성된 공용
            컴포넌트는 프로젝트의 다양한 기능에서 재사용되어 생산성을
            향상시켰고, 일관된 디자인을 통해 UI또한 개선되었습니다.
          </Styled.ListItem>
        </Styled.List>
      </Styled.Section>
    </Styled.Article>
  );
};

export default MonggeulMonggeul;
