import Styled from "./Style";
import Carousel from "../../../common/Carousel";
import { projectImages } from "../../../../constants";

const Darf = () => {
  return (
    <Styled.Article>
      <Styled.Header>
        <Styled.Title>Darf</Styled.Title>
        <Styled.Date>2022년 06월 ~ 2022년 10월</Styled.Date>
        <Carousel images={Object.values(projectImages.DARF)} />
        <Styled.LinkContainer>
          GitHub:
          <Styled.Link
            href="https://github.com/Lee-Young-Jae/Darf"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/Lee-Young-Jae/Darf
          </Styled.Link>
        </Styled.LinkContainer>
      </Styled.Header>

      <Styled.Section>
        <Styled.SectionTitle>사용한 기술</Styled.SectionTitle>
        <Styled.SkillList>
          {["React", "JavaScript", "Redux", "Redux-Saga", "Express"].map(
            (skill) => (
              <Styled.SkillItem key={skill}>{skill}</Styled.SkillItem>
            )
          )}
        </Styled.SkillList>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>프로젝트 개요</Styled.SectionTitle>
        <Styled.Paragraph>
          다이어트를 도와주는 서비스로 다이어트 현황을 기록하고 눈으로 확인하기
          쉽도록 시각화를 통해 체중 변화를 확인할 수 있습니다. 또 확실한 동기
          부여 제공을 위해 전문가에게 식단을 검사 받듯 식단을 같은 목적을 가진
          유저와
          <Styled.Highlight>공유</Styled.Highlight>하는 그룹 공유 기능을
          제공하고 있습니다.
        </Styled.Paragraph>
        <Styled.Paragraph>
          - darf는 dürfen(필요로 하다.∙∙∙하기만 하면 된다 ∙∙∙할 만하다)의 1인칭
          표현입니다.
        </Styled.Paragraph>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>개발 및 기여 내용</Styled.SectionTitle>

        <Styled.SubSection>
          <Styled.SubTitle>[기획]</Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>공동참여 (50%)</Styled.ListItem>
          </Styled.List>
        </Styled.SubSection>

        <Styled.SubSection>
          <Styled.SubTitle>[프론트엔드 개발]</Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>
              랜딩페이지를 제외한 모든 기능 구현 (80%)
            </Styled.ListItem>
          </Styled.List>
        </Styled.SubSection>

        <Styled.SubSection>
          <Styled.SubTitle>[백엔드 개발]</Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>모든 기능 구현 (100%)</Styled.ListItem>
          </Styled.List>
        </Styled.SubSection>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>사용자 경험 개선</Styled.SectionTitle>

        <Styled.SubSection>
          <Styled.SubTitle>인피니티 스크롤링 적용</Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>
              그룹 페이지에서 공유된 이미지와 음식 정보가 쌓여감에 따라 그룹
              페이지 초기 로딩 속도가 느려지는 문제가 생겼습니다. 이를
              해결하고자 인피니티 스크롤링을 적용했습니다. 이를 통해 사용자가
              스크롤을 내릴 때마다 새로운 데이터를 요청하는 대신, 필요한 만큼의
              데이터만 로드하여 렌더링할 수 있도록 했습니다. 이로써 초기 로딩
              시간이 단축되고 사용자 경험이 향상되었습니다.
            </Styled.ListItem>
          </Styled.List>
          <Styled.Link
            href="https://www.youtube.com/watch?v=UqWRbTnlo9Q"
            target="_blank"
            rel="noreferrer"
          >
            YouTube 영상 보기
          </Styled.Link>
        </Styled.SubSection>

        <Styled.SubSection>
          <Styled.SubTitle>오픈데이터 활용</Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>
              칼로리 정보를 효과적으로 활용할 수 있도록 설계하였습니다.
              농수산식품 DB 및 만개의 레시피 DB를 가공하여 데이터베이스에
              저장하고 실시간으로 칼로리와 영양 정보를 조회하고 기록에 사용할 수
              있도록 서비스를 디자인했습니다.
            </Styled.ListItem>
          </Styled.List>
          <Styled.Link
            href="https://www.youtube.com/watch?v=JDlEVSsXjX4"
            target="_blank"
            rel="noreferrer"
          >
            YouTube 영상 보기
          </Styled.Link>
        </Styled.SubSection>

        <Styled.SubSection>
          <Styled.SubTitle>동기부여를 위한 시각화 제공</Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>
              섭취한 칼로리 별 체중 변화를 그래프를 통해 제공합니다. 다양한 기간
              동안의 데이터를 그래프로 확인할 수 있어 자신의 식습관과 체중
              변화를 한눈에 파악할 수 있으며, 목표 달성을 위한 동기부여를
              지속적으로 유지할 수 있습니다. 보다 효과적인 동기부여를 위해 목표
              달성에 따라 도전 과제를 해금하고 보상으로 가입한 그룹에서 사용할
              수 있는 아이콘을 제공하고 있습니다.
            </Styled.ListItem>
          </Styled.List>
          <Styled.Link
            href="https://www.youtube.com/watch?v=5JbPkEwoMRA"
            target="_blank"
            rel="noreferrer"
          >
            YouTube 영상 보기
          </Styled.Link>
        </Styled.SubSection>
      </Styled.Section>
    </Styled.Article>
  );
};

export default Darf;
