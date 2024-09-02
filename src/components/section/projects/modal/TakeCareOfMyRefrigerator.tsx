import { projectImages } from "../../../../constants";
import Carousel from "../../../common/Carousel";
import Styled from "./Style";

const TakeCareOfMyRefrigerator = () => {
  return (
    <Styled.Article>
      <Styled.Header>
        <Styled.Title>Take Care Of My Refrigerator</Styled.Title>
        <Styled.Date>2022년 10월 ~ 2022년 11월</Styled.Date>

        <Carousel
          images={Object.values(projectImages.TAKE_CARE_OF_MY_REFRIGERATOR)}
        />

        <Styled.LinkContainer>
          GitHub:
          <Styled.Link
            href="https://github.com/Lee-Young-Jae/TakeCareOfMyRefrigerator"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/Lee-Young-Jae/TakeCareOfMyRefrigerator
          </Styled.Link>
        </Styled.LinkContainer>
      </Styled.Header>

      <Styled.Section>
        <Styled.SectionTitle>사용한 기술</Styled.SectionTitle>
        <Styled.SkillList>
          {[
            "React",
            "JavaScript",
            "Redux",
            "redux-saga",
            "Styled-Component",
            "Express",
            "Sequelize (ORM)",
          ].map((skill) => (
            <Styled.SkillItem key={skill}>{skill}</Styled.SkillItem>
          ))}
        </Styled.SkillList>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>프로젝트 개요</Styled.SectionTitle>
        <Styled.Paragraph>
          “내 냉장고를 부탁해”는 1인 가구 자취생활을 하면서 겪는 식재료 관리의
          어려움을 해결하기 위해 기획, 개발한 냉장고 관리 서비스입니다. 1인
          가구는 식재료를 소량으로 구매하면 비용이 비싸고, 대량으로 구매하면
          유통기한을 관리하기 어려운 문제를 자주 겪습니다. 이 서비스를 통해
          사용자는 냉장고에 있는 식재료를 효율적으로 관리하고, 이를 기반으로
          다양한 레시피를 추천받아 건강한 식생활을 유지할 수 있습니다. 또한,
          부족한 식재료를 쉽게 쇼핑할 수 있도록 도와주며, 유통기한 알림 기능으로
          식재료의 신선도를 유지하는데 도움을 줍니다.
        </Styled.Paragraph>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>개발 및 기여 내용</Styled.SectionTitle>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>레시피 데이터 전처리</Styled.SectionTitle>
        <Styled.SubSection>
          <Styled.SubTitle>
            [ 문제 상황: 레시피 데이터의 불일치 및 비정형 데이터 ]
          </Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>
              다양한 출처에서 수집된 레시피 데이터는 포맷이 일관되지 않고,
              비정형 데이터가 많아 서버에서 식재료에 기반한 레시피를 추천하는
              과정에서 문제가 생겼습니다.
            </Styled.ListItem>
          </Styled.List>
        </Styled.SubSection>

        <Styled.SubSection>
          <Styled.SubTitle>[ 해결 방안: 레시피 데이터 전처리 ]</Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>
              50000개가 넘는 레시피 데이터를 정규화하고 표준화된 포맷으로
              변환하여 일관된 형식으로 저장했습니다. `python`과 `Excel`을 활용해
              레시피의 재료 목록을 파싱하고, 유사한 재료를 통합하여 중복을
              제거했습니다. 이를 통해 사용자 경험을 개선하고, 레시피 추천
              알고리즘의 정확성을 높였습니다.
            </Styled.ListItem>
          </Styled.List>
        </Styled.SubSection>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>사용자 인터페이스 개선</Styled.SectionTitle>
        <Styled.SubSection>
          <Styled.SubTitle>
            [ 문제 상황: 복잡한 사용자 인터페이스 ]
          </Styled.SubTitle>
          <Styled.Paragraph>
            <Styled.Highlight></Styled.Highlight>
          </Styled.Paragraph>
          <Styled.List>
            <Styled.ListItem>
              초기 인터페이스에 대한 설명이 부족하여 사용자가 원하는 기능을 찾기
              어려웠습니다.
            </Styled.ListItem>
          </Styled.List>
        </Styled.SubSection>

        <Styled.SubSection>
          <Styled.SubTitle>
            [ 해결 방안: 직관적인 UI/UX 디자인 ]
          </Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>
              사용자 인터페이스를 직관적으로 재설계하여 주요 기능에 쉽게 접근할
              수 있도록 했습니다. 사용자 피드백을 반영하여 네비게이션을
              개선하고, 장바구니와 냉장고로 기능을 분리해 한눈에 확인이 가능하게
              구성했습니다. 이로 인해 총 39명이 투표해주신 사용자 만족도
              조사에서 이전 대비 만족도가 약 25% 향상되었습니다.
            </Styled.ListItem>
          </Styled.List>
        </Styled.SubSection>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>
          전역 스타일 및 애니메이션 관리
        </Styled.SectionTitle>
        <Styled.SubSection>
          <Styled.SubTitle>
            [ 문제 상황: 일관되지 않은 스타일 및 애니메이션 ]
          </Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>
              이전에 진행했던 프로젝트에서는 스타일과 애니메이션이 개별
              컴포넌트에서 각각 관리되어 일관성이 부족하고 유지보수가
              어려웠습니다.
            </Styled.ListItem>
          </Styled.List>
        </Styled.SubSection>

        <Styled.SubSection>
          <Styled.SubTitle>
            [ 해결 방안: 전역 스타일 및 애니메이션 관리 도입 ]
          </Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>
              <Styled.Highlight>전역 스타일 관리:</Styled.Highlight> CSS-in-JS
              라이브러리를 도입하여 전역 스타일을 통합적으로 관리했습니다.
              ThemeProvider를 사용하여 일관된 테마와 색상 팔레트를 적용하고,
              Styled Components를 활용해 컴포넌트별 스타일을 모듈화했습니다.
              이를 통해 스타일의 일관성을 유지하고, 코드의 가독성과 유지보수성을
              높였습니다.
            </Styled.ListItem>
            <Styled.ListItem>
              <Styled.Highlight>애니메이션 관리:</Styled.Highlight> Styled
              Components의 keyframes 애니메이션을 통합적으로 관리했습니다. 주요
              UI 요소에 애니메이션을 추가하여 사용자 경험을 향상시키고,
              애니메이션의 재사용성을 높였습니다. 페이지 전환, 버튼 클릭, 모달
              창 등 다양한 인터랙션에 부드러운 애니메이션을 적용하여 사용자가
              더욱 직관적이고 즐겁게 사용할 수 있도록 했습니다.
            </Styled.ListItem>
          </Styled.List>
        </Styled.SubSection>
      </Styled.Section>
    </Styled.Article>
  );
};

export default TakeCareOfMyRefrigerator;
