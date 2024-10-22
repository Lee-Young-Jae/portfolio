import { projectImages } from "../../../../constants";
import Carousel from "../../../common/Carousel";
import Styled from "./Style";

const SafetyWatch = () => {
  return (
    <Styled.Article>
      <Styled.Header>
        <Styled.Title>Safety-Watch</Styled.Title>
        <Styled.Date>2024년 05월</Styled.Date>

        <Carousel images={Object.values(projectImages.SAFETY_WATCH)} />

        <Styled.LinkContainer>
          서비스 링크:
          <Styled.Link
            href="https://safety-watch.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            https://safety-watch.vercel.app/
          </Styled.Link>
        </Styled.LinkContainer>
        <Styled.LinkContainer>
          GitHub:
          <Styled.Link
            href="https://github.com/Lee-Young-Jae/SafetyWatch"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/Lee-Young-Jae/SafetyWatch
          </Styled.Link>
        </Styled.LinkContainer>
      </Styled.Header>

      <Styled.Section>
        <Styled.SectionTitle>사용한 기술</Styled.SectionTitle>
        <Styled.SkillList>
          {[
            "TypeScript",
            "React",
            "Styled-Components",
            "Tanstack Query(React Query)",
          ].map((skill) => (
            <Styled.SkillItem key={skill}>{skill}</Styled.SkillItem>
          ))}
        </Styled.SkillList>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>프로젝트 개요</Styled.SectionTitle>
        <Styled.Paragraph>
          산업 안전관리 직무에 종사중인 지인의 요청으로 개발한 서비스입니다.
          현장에서 발생한 중대 재해 상황을 확인하고 관련된 KOSHA 예방 지침을
          제공합니다. 또한, 키워드를 통한 지침/법령 검색 기능을 제공합니다.
        </Styled.Paragraph>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>개발 및 기여 내용</Styled.SectionTitle>

        <Styled.SubSection>
          <Styled.SubTitle>[문제 상황: 자주 변경되는 API 스펙]</Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>
              산업 안전 관련 뉴스를 제공받는 공공데이터 포털 API가 신규 API였기
              때문에 자주 변경되는 특성을 가지고 있었습니다. 이로 인해 API의
              응답 형식이나 엔드포인트가 빈번하게 변경되어, 기존 구현된 코드가
              자주 깨지거나, 예상치 못한 에러가 발생했습니다.
            </Styled.ListItem>
            <Styled.ListItem>
              API 스펙 변경으로 인해 발생하는 유지보수 비용이 증가하였고, 변경
              사항을 반영하기 위한 작업이 반복적으로 발생하여 개발 효율이
              저하되었습니다.
            </Styled.ListItem>
          </Styled.List>
        </Styled.SubSection>

        <Styled.SubSection>
          <Styled.SubTitle>
            [해결 방안: API 변경 대응 및 안정화 전략]
          </Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>
              <Styled.Highlight>유연한 텍스트 파싱 로직 작성</Styled.Highlight>:
              사망자와 부상자 수를 포함한 다양한 뉴스 데이터를 파싱할 때, JSON
              구조의 변경에 유연하게 대응할 수 있는 파싱 로직을 작성했습니다.
              정규표현식을 통해 최대한 러프하게 데이터를 가공하도록
              처리했습니다. 이를 통해 새로운 필드가 추가되거나 기존 필드가
              변경되어도 코드를 최소한으로 수정할 수 있도록 했습니다.
            </Styled.ListItem>
            <Styled.ListItem>
              <Styled.Highlight>공통 에러 처리</Styled.Highlight>: API 호출에서
              발생할 수 있는 다양한 에러 상황을 중앙에서 처리할 수 있도록 공통
              에러 처리 로직을 작성했습니다. 이를 통해 에러 처리 코드를 일관되게
              유지하고, UI가 깨지지 않도록 개선하는 등 에러 상황에 대한 대응을
              효율적으로 관리할 수 있게 했습니다.
            </Styled.ListItem>
          </Styled.List>
        </Styled.SubSection>

        <Styled.SubSection>
          <Styled.SubTitle>
            [문제 상황: 크로스 브라우징 이슈 - 정규표현식]
          </Styled.SubTitle>
          <Styled.Paragraph>
            - 기존의 날짜 형식은 "[3/21, 경기도 고양시]"와 같은 형태로, 정규식
            <Styled.SemiCodeBlocks>
              match(/\[(\d+\/\d+),/);
            </Styled.SemiCodeBlocks>
            을 사용하여 추출했습니다. 그러나 이 방식은 연도를 무시하고 날짜만
            가져와서, 이전 해의 뉴스를 불러올 때 문제가 발생했습니다.
          </Styled.Paragraph>
          <Styled.Paragraph>
            - 그래서 연도를 포함한 날짜를 내용에서 추출하기로 했습니다.
            본문에서의 날짜 형식은 "2024. 3. 21. (목), 14:15경"와 같습니다. 이
            때 요일과 시간은 필요하지 않았기 때문에, 다음과 같은 정규식을
            사용하여 날짜를 추출했습니다:{" "}
            <Styled.SemiCodeBlocks>
              {`contents.match(/([0-9]{4}. [0-9]
              {(1, 2)}. [0-9]{(1, 2)}.)/);`}
            </Styled.SemiCodeBlocks>
            이후 추출된 날짜를 `Date` 생성자를 사용하여 날짜를 생성했습니다.
            <Styled.CodeBlocks>
              <span style={{ color: "#f92672" }}>const</span>{" "}
              accidentDateTimestamp ={" "}
              <span style={{ color: "#a6e22e" }}>new</span>{" "}
              <span
                style={{
                  color: "#66d9ef",
                }}
              >
                Date
              </span>
              (date).
              <span
                style={{
                  color: "#66d9ef",
                }}
              >
                getTime
              </span>
              ();
            </Styled.CodeBlocks>
            문제를 해결했다고 생각했지만, 크롬 브라우저에서는 잘 작동하지만
            iOS에서는 동작하지 않는 문제가 발생했습니다. 이 문제의 원인은
            간단한데, new Date 생성자 함수의 Safari에서의 동작 방식이 달랐기
            때문입니다. 일반 브라우저에서는 new Date("2021. 01. 01")이 자동으로
            처리되지만, Safari에서는 그렇지 않습니다.
          </Styled.Paragraph>
        </Styled.SubSection>

        <Styled.SubSection>
          <Styled.SubTitle>
            [해결 방안: 크로스 브라우징 호환성 개선]
          </Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>
              <Styled.Highlight>날짜 형식 통일</Styled.Highlight>: Safari에서도
              호환되는 표준 날짜 형식을 사용하기 위해, 추출한 날짜 문자열을
              "YYYY-MM-DD" 형식으로 변환했습니다.
            </Styled.ListItem>
            <Styled.ListItem>
              <Styled.Highlight>정규표현식 수정</Styled.Highlight>: 날짜를
              추출한 후, 적절한 포맷으로 변환하기 위해 정규표현식을 사용하여
              날짜 문자열을 변환하는 로직을 추가했습니다.
            </Styled.ListItem>
          </Styled.List>
        </Styled.SubSection>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>
          성능 최적화 및 사용자 경험 개선
        </Styled.SectionTitle>
        <Styled.List>
          <Styled.ListItem>
            <Styled.Highlight>
              메모이제이션 및 최적화된 상태 관리
            </Styled.Highlight>
            : React의 `useMemo`, `useCallback` 훅과 `react-query`를 활용하여
            불필요한 렌더링을 방지하고, 상태 관리를 최적화하여 성능을
            개선했습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.Highlight>디바운스 패턴 적용</Styled.Highlight>: 뉴스 키워드
            필터 기능을 추가하며 입력에 반응하여 데이터를 요청하는 경우,
            사용자가 입력을 마칠 때까지 여러 번의 뉴스 필터 함수가 작동해 여러번
            내용을 수정할 경우 1~2초 정도의 병목현상이 생겼습니다. 이를 방지하기
            위해 디바운스 패턴을 적용하여 일정 시간 동안 입력이 없을 때에만
            요청을 보내도록 했습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.Highlight>Skeleton UI 적용</Styled.Highlight>: API 호출 시
            평균 응답 시간이 3초 정도로 길었기 때문에 대신 표시할 대체 UI를
            커스텀 Skeleton UI를 적용하여 대체할 수 있도록 사용자 경험을
            개선했습니다.
          </Styled.ListItem>
        </Styled.List>
      </Styled.Section>
    </Styled.Article>
  );
};

export default SafetyWatch;
