import { projectImages } from "../../../../constants";
import Carousel from "../../../common/Carousel";
import Styled from "./Style";

const 같이면접 = () => {
  return (
    <Styled.Article>
      <Styled.Header>
        <Styled.Title>가상 면접 AI 피드백 서비스, 같이면접</Styled.Title>
        <Styled.Date>2024년 03월 ~ 2024년 06월</Styled.Date>
        {/* <Styled.SectionTitle>서비스 미리보기</Styled.SectionTitle> */}
        {/* <iframe
          width="931"
          height="713"
          src="https://www.youtube.com/embed/shGYiXcWYn0"
          title="[같이면접] 모의면접 연습 서비스"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // frameborder="0"
          // referrerpolicy="strict-origin-when-cross-origin"
          // allowfullscreen
        ></iframe> */}
        <Carousel images={Object.values(projectImages.같이면접)} />
        <Styled.LinkContainer>
          서비스 링크:
          <Styled.Link
            href="https://gachi-interview.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            https://gachi-interview.vercel.app
          </Styled.Link>
        </Styled.LinkContainer>

        <Styled.LinkContainer>
          GitHub:
          <Styled.Link
            href="https://github.com/Lee-Young-Jae/gachi-interview-FE"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/Lee-Young-Jae/gachi-interview-FE
          </Styled.Link>
        </Styled.LinkContainer>
        <Styled.LinkContainer>
          시연 영상:
          <Styled.Link
            href="https://www.youtube.com/embed/shGYiXcWYn0"
            target="_blank"
            rel="noreferrer"
          >
            https://www.youtube.com/embed/shGYiXcWYn0
          </Styled.Link>
        </Styled.LinkContainer>
      </Styled.Header>
      <Styled.Section>
        <Styled.SectionTitle>사용한 기술</Styled.SectionTitle>
        <Styled.SkillList>
          {[
            "Next.js",
            "TypeScript",
            "tailwind",
            "react-query",
            "ffmpeg",
            "AWS S3",
            "msw",
            "FCM",
          ].map((skill) => (
            <Styled.SkillItem key={skill}>{skill}</Styled.SkillItem>
          ))}
        </Styled.SkillList>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>프로젝트 개요</Styled.SectionTitle>
        <Styled.Paragraph>
          같이면접은 3명의 취업준비생 개발자가 모여 만든, 모의 면접을 보고 면접
          내용에 대한 AI 피드백을 제공받을 수 있는 서비스입니다. 질문지를 만들어
          AI로 생성한 질문 혹은 내가 원하는 질문으로 가상 면접을 연습하고 면접
          결과에 대해 피드백을 주고 받을 수 있습니다. 또, 면접 후기, 스터디
          모집등의 커뮤니티, FCM을 통한 푸시메세지 기능 등을 제공합니다.
        </Styled.Paragraph>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>개발 및 기여 내용</Styled.SectionTitle>
        <Styled.List>
          <Styled.ListItem>
            페이지 구성 및 레이아웃 설계, (랜딩페이지, 비디오목록 / 상세 페이지,
            비디오 설정 / 녹화 페이지)
          </Styled.ListItem>
          <Styled.ListItem>
            비디오 녹화 기능 구현 및 녹화된 비디오 S3 업로드
          </Styled.ListItem>
          <Styled.ListItem>
            비디오 인코딩 기능, 썸네일 이미지 추출 구현 및 최적화
          </Styled.ListItem>
          <Styled.ListItem>
            Web Speech API를 활용한 Speech To Text 기능 구현
          </Styled.ListItem>
          <Styled.ListItem>
            Modal, NoData, Dialog 등의 공용 컴포넌트 구현
          </Styled.ListItem>
        </Styled.List>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>
          성능 최적화 및 사용자 경험 개선
        </Styled.SectionTitle>
        <Styled.SubSection>
          <Styled.SubTitle>[문제 상황: 긴 영상 처리 시간]</Styled.SubTitle>
          <Styled.Paragraph>
            최대한 다양한 디바이스에 서비스를 제공하기 위한 조치로 영상 확장자를
            범용성이 높은 "mp4"로 인코딩하는 과정에서 인코딩 시간이 3분 영상
            기준 2분 30초, 5분 영상 기준 4분 정도로 발생해 서비스의 품질과
            사용성에 악영향을 끼쳤습니다.
          </Styled.Paragraph>
        </Styled.SubSection>
        <Styled.SubSection>
          <Styled.SubTitle>[해결 방안: 영상 처리 성능 최적화]</Styled.SubTitle>
          <Styled.Paragraph>
            네이티브 FFmpeg 인코딩 관련 옵션과 코덱 설정을 통해{" "}
            <Styled.Highlight>20%</Styled.Highlight> 시간을 단축시켰습니다. 이후
            추가적인 개선으로 멀티 쓰레딩 환경을 도입해 싱글코어 대비{" "}
            <Styled.Highlight>80% 이상</Styled.Highlight>의 인코딩 시간을
            개선했습니다. 이렇게 단축한 시간은 사용자 입력을 추가로 받는 UI를
            도입해 사용자가 인코딩 시간을 인지하기 힘들도록 개선하였고 이
            과정에서 발생하는 썸네일 추출 등의 비동기 함수를 promise.all을 통해
            동시 실행시켜 실행 시간 범위를{" "}
            <Styled.Highlight>약 177ms ~ 240ms</Styled.Highlight> 에서{" "}
            <Styled.Highlight>약 112 ms ~ 172 ms</Styled.Highlight> 정도로{" "}
            <Styled.Highlight>약 30% </Styled.Highlight> 이상의 실행 시간 단축을
            이끌어냈습니다. 이와 같은 성능 개선을 통해 프로덕트 환경에서
            서비스의 최대 녹화 시간인 5분 영상 기준 평균{" "}
            <Styled.Highlight>20초</Styled.Highlight> 안팎의 인코딩 시간 효율을
            보이고 있습니다.
          </Styled.Paragraph>
        </Styled.SubSection>

        <Styled.Section>
          <Styled.SectionTitle>
            배포 비용 절감을 위한 로직 개선
          </Styled.SectionTitle>
          <Styled.SubSection>
            <Styled.SubTitle>
              [문제 상황: AI 피드백 로직의 실행 시간 초과 및 비용 증가]
            </Styled.SubTitle>
            <Styled.Paragraph>
              기존 백엔드 개발자가 맡아 진행하던 AI 피드백 로직은 다음과 같이
              구현되어 있었습니다:
            </Styled.Paragraph>
            <Styled.List>
              <Styled.ListItem>
                영상의 S3 업로드 이벤트를 트리거로 하여 AWS Lambda에서 실행
              </Styled.ListItem>
              <Styled.ListItem>
                영상에서 텍스트를 추출하고 LLM Services를 이용해 AI 피드백을
                반환
              </Styled.ListItem>
            </Styled.List>
            <Styled.Paragraph>
              그러나 Lambda의 최대 실행 시간은 15분으로 제한되어 있었고,
              서비스의 실행 시간이 이 제한을 초과하는 경우가 간헐적으로
              발생하였습니다. 이로 인해 Lambda 함수가 실패하거나 중단되는 문제가
              발생했으며, 결과적으로 사용자 경험이 저하되고, Lambda 재시도 및
              반복 실행으로 인해 비용이 증가하는 문제를 초래했습니다.
            </Styled.Paragraph>
          </Styled.SubSection>
          <Styled.SubSection>
            <Styled.SubTitle>
              [해결 방안: 실행 비용이 비싼 텍스트 추출을 클라이언트에서 담당]
            </Styled.SubTitle>
            <Styled.Paragraph>
              시간이 오래 걸리는 주된 원인은 영상에서 텍스트를 추출하는 부분에서
              발생했고 이 처리를 클라이언트로 위임했습니다. 라이브러리를
              사용하지 않고 브라우저에 내장된 Web Speech API를 사용하여 영상
              녹화와 함께 사용자의 음성이 텍스트로 변환되도록 구현하였습니다.
              변환 과정은 라이브하게 진행되기 때문에 추가적인 지연시간없이
              변환이 가능했고 기존 기획 대비 S3에서 영상의 읽기 접근 횟수를{" "}
              <Styled.Highlight>절반</Styled.Highlight>으로 줄이고 사용자가
              피드백을 받아볼 수 있는 시간을 평균 9분에서 10초로{" "}
              <Styled.Highlight>98.15%</Styled.Highlight> 단축시켰습니다.
            </Styled.Paragraph>
          </Styled.SubSection>
        </Styled.Section>

        <Styled.Section>
          <Styled.SectionTitle>개발 경험 개선</Styled.SectionTitle>
          <Styled.SubSection>
            <Styled.SubTitle>컴포넌트 개발</Styled.SubTitle>
            <Styled.Paragraph>
              Modal, Dialog, NoData 등의 컴포넌트를 직접 개발했습니다.
              재활용성이 높은 컴포넌트일수록 내부적인 UI 상태만 가지도록
              구현하여 재사용성을 높이기 위해 노력했습니다.
            </Styled.Paragraph>
          </Styled.SubSection>
          <Styled.SubSection>
            <Styled.SectionTitle>기술 도입</Styled.SectionTitle>
            <Styled.TechItem>
              <Styled.SubTitle>MSW</Styled.SubTitle>
              <Styled.List>
                <Styled.ListItem>
                  Mock 서버를 구축하여 API 서버 배포 전 생산성을 증진시키고
                  의존성을 분리하였습니다.
                </Styled.ListItem>
                <Styled.ListItem>
                  실패 응답을 내보내는 로직을 구현하여 다양한 에러케이스에 미리
                  대응했습니다.
                </Styled.ListItem>
              </Styled.List>
            </Styled.TechItem>
            <Styled.TechItem>
              <Styled.SubTitle>AWS S3</Styled.SubTitle>
              <Styled.List>
                <Styled.ListItem>
                  동영상, 이미지 파일 저장 및 읽기를 위해 AWS S3를 사용하여
                  안정적이고 확장 가능한 스토리지 솔루션을 제공했습니다.
                </Styled.ListItem>
                <Styled.ListItem>
                  프론트엔드에서 직접 업로드하는 보안 문제를 해결하기 위해
                  presignedURL을 도입, 백엔드에서 권한을 관리하도록 팀 내 적극
                  권유하여 보안을 향상시켰습니다.
                </Styled.ListItem>
              </Styled.List>
            </Styled.TechItem>
          </Styled.SubSection>
        </Styled.Section>
      </Styled.Section>
    </Styled.Article>
  );
};

export default 같이면접;
