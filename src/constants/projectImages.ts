import Portfolio from "../components/section/projects/modal/포트폴리오";

const projectImages = {
  같이면접: [
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2Fe664498d-5427-4871-85ec-2b52f5a0532c%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-29_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_9.03.23.png?table=block&id=9239cc05-1636-4b47-94f9-7ab383d8cbd6&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "AI 예상 질문지 생성 모달",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2Faab2cbb8-f2e5-4209-95b3-5362ead02edf%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-29_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_9.03.55.png?table=block&id=b697a7bf-57fc-4abd-b1e4-0434b3a931b4&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "AI 예상 질문지 생성 결과",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2Fbf02a404-317b-4951-a34d-bec0fdd03954%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-06-08_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_11.25.15.png?table=block&id=af24597e-a726-4941-b52d-57e2f31d1877&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "면접 완료 후 메타데이터 설정 모달",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2Fef6481c4-c38b-4513-9ec5-c02d383d4742%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-06-08_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_11.31.09.png?table=block&id=4ce4e0f1-cc3a-450f-87bb-dcf666c8e8c3&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1420&userId=&cache=v2",
      alt: "영상에 대한 AI 분석 결과",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F2c2f0fe8-37e2-479a-a43e-a2349d6bc7b4%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-29_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_9.05.59.png?table=block&id=9e564489-c418-495c-9cbf-eb579e2f051d&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "면접 녹화 화면",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F6369aa24-9966-4827-8434-95f15b036cb3%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-29_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_9.25.25.png?table=block&id=a346da9d-498e-44e2-806e-d44bdcbe8d0a&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "공유된 면접 목록 화면",
    },
  ],
  SAFETY_WATCH: [
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2Fdde28314-9d61-4314-861d-147b59c7f571%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-25_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_10.57.28.png?table=block&id=89c16ce8-b80e-4a30-a1b5-2ebe1aa2908c&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "안전뉴스 목록 화면",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F69c76d9a-ead5-48d5-8443-ba2e92f955db%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-30_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_2.23.06.png?table=block&id=8a94f74b-3a96-4555-a679-b538e51e7057&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "안전뉴스 상세 화면, 및 Skeleton UI",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F7ca3a6a4-6d26-4e51-a2ff-3f1157de3479%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-30_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_2.22.36.png?table=block&id=7381de11-efcb-4095-8cc0-a6ce14eab809&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "법령, 규제 정보 화면",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F46edb8c1-cbad-4516-a293-8d980e74e974%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-30_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_2.22.46.png?table=block&id=d537ce50-01df-414d-ab59-4b0c33c398b2&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "법령, 규제 정보 화면2",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F01602b8c-e51f-434f-b3ef-d03dc0c3997f%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-30_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_2.23.15.png?table=block&id=bec7ef69-74aa-4d09-aef1-45f91e9d39da&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1410&userId=&cache=v2",
      alt: "error 화면",
    },
  ],
  MONGGEUL_MONGGEUL: [
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F250af7ff-4927-4363-ba3f-4c85a720458d%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-25_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_10.03.59.png?table=block&id=308c6bb8-6b9a-4490-9323-e1eacb13c9ce&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "몽글몽글 랜딩 페이지",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2Fdfe528ad-30d3-4cec-af5a-19da01dab28d%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-25_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_10.04.41.png?table=block&id=558ffc3d-47e0-4427-aea0-0ef2eec106b8&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1410&userId=&cache=v2",
      alt: "몽글몽글 마이페이지",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F9952d98e-b505-4cc0-ba22-666d5a675b74%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-25_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_10.05.09.png?table=block&id=ba226a02-9e25-436b-9053-eb76401ec3aa&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "모임 투표 생성",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2Fcdeff9aa-4af7-483a-acd1-87ceeeed026e%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-25_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_10.08.23.png?table=block&id=35fcfcd3-dbb0-40f0-a87c-b457e86abb97&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "모임 투표 진행",
    },
    // {
    //   src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F4cb31165-a3ef-4fe1-8767-36c9d6a3024a%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-25_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_10.08.33.png?table=block&id=d7b71524-d4d0-45ad-8517-6c0604043358&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1410&userId=&cache=v2",
    //   alt: "모임 투표 결과",
    // },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F464d6dd5-54ce-450c-8660-69a3d4d3b59a%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-25_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_10.11.53.png?table=block&id=a9cc2bd9-c831-4ea7-9ad5-65b483d7a11d&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1410&userId=&cache=v2",
      alt: "모임 약속 잡기",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2Fe1e7bde8-6465-4272-bb63-ed92751b5279%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-25_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_10.12.17.png?table=block&id=9f3db577-249b-45fb-a50a-623a3a2f8b12&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "모임 약속 잡기 목록",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2Fa9716265-f7ca-46cf-b3a1-1483beae1a4a%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-25_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_10.13.05.png?table=block&id=427a194e-ba46-467f-ab7c-205aa117d48f&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1410&userId=&cache=v2",
      alt: "모임 약속 잡기 결과",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F4de9f8f7-f8b3-4950-aaa9-e0666f71c24b%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-25_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_10.14.12.png?table=block&id=a9ab7abf-d867-40c8-aa5f-d63084e516d6&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "모임 채팅",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2Fd237727b-df12-4697-980d-f944592d9173%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-25_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_10.14.42.png?table=block&id=bd6a1e3b-1ac3-4e63-800f-87079019908e&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "모임 초대코드 생성",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2Ff6cca077-ae1e-4506-be9d-d676302342c6%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-08-25_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_10.15.35.png?table=block&id=3fb8a56f-c360-42b3-a531-14c28a3e69bf&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1410&userId=&cache=v2",
      alt: "모임 초대코드 입력",
    },
  ],
  DARF: [
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F71c923a3-4f92-47b2-96c5-a5a096aa96e2%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-09-01_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_3.15.51.png?table=block&id=daa8a218-d5b4-42b6-b68c-d18841ddcb97&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "DARF 그룹 페이지",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2Fbf63f161-fa90-434e-8b99-ac68de45d0ae%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-09-01_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_3.16.14.png?table=block&id=55934eb7-898b-4522-a207-2bbd4000eeb8&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "그룹 기록 페이지",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F56e0ac02-000d-4120-a5f4-4ca31d95b1e5%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-09-01_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_3.17.18.png?table=block&id=b979c66d-d5cd-4287-a922-1b6681df1e49&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "식단 기록 입력",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F67811dc8-c6d7-451f-a8de-aee0156fb29a%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-09-01_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_3.17.43.png?table=block&id=a73b73a6-e67d-4c1a-a3ec-b28ec9837cf7&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "식단 기록 삭제",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F90379b84-eb55-4762-82d2-3dc065b7c043%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-09-01_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_3.18.36.png?table=block&id=1f175440-c8b9-4cc4-8f4f-59bb73de9c63&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "마이페이지",
    },
  ],
  TAKE_CARE_OF_MY_REFRIGERATOR: [
    {
      // src: "https://user-images.githubusercontent.com/78532129/208683596-eac9561c-9fce-4717-9f45-6fda68a7c0ff.gif",
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F1bc3802e-12ea-4c1f-bf10-71def58b8c40%2F%25E1%2584%2582%25E1%2585%25A2_%25E1%2584%2582%25E1%2585%25A2%25E1%2586%25BC%25E1%2584%258C%25E1%2585%25A1%25E1%2586%25BC%25E1%2584%2580%25E1%2585%25A9_%25E1%2584%2580%25E1%2585%25AA%25E1%2586%25AB%25E1%2584%2585%25E1%2585%25B51.webp?table=block&id=10281b43-34ec-80a3-81de-dca715f69521&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1200&userId=&cache=v2",
      alt: "내 냉장고 관리",
    },
    {
      // src: "https://user-images.githubusercontent.com/78532129/208683642-11974775-3906-4847-887b-4113edf29627.gif",
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F8f7e545e-0e6f-4b29-a888-4d2f687cd780%2F%25E1%2584%2582%25E1%2585%25A2_%25E1%2584%2582%25E1%2585%25A2%25E1%2586%25BC%25E1%2584%258C%25E1%2585%25A1%25E1%2586%25BC%25E1%2584%2580%25E1%2585%25A9_%25E1%2584%2580%25E1%2585%25AA%25E1%2586%25AB%25E1%2584%2585%25E1%2585%25B52.webp?table=block&id=10281b43-34ec-80e2-bf43-c454815509fc&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1200&userId=&cache=v2",
      alt: "내 냉장고 관리2",
    },
    {
      // src: "https://user-images.githubusercontent.com/78532129/208683677-6577570f-fcf5-495b-a39a-a237103f1057.gif",
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F0e7b6588-8845-424f-b63a-e73a220ab0fd%2F%25E1%2584%2582%25E1%2585%25A2_%25E1%2584%2582%25E1%2585%25A2%25E1%2586%25BC%25E1%2584%258C%25E1%2585%25A1%25E1%2586%25BC%25E1%2584%2580%25E1%2585%25A9_%25E1%2584%2580%25E1%2585%25AA%25E1%2586%25AB%25E1%2584%2585%25E1%2585%25B53.webp?table=block&id=ab86c878-a981-4d7d-ba59-afec21b2fee6&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1200&userId=&cache=v2",
      alt: "내 냉장고 관리3",
    },
    {
      // src: "https://user-images.githubusercontent.com/78532129/208682823-102cf58d-6bf9-4e66-b4a2-3430f9084a23.gif",
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F02188c97-6361-46c7-80e5-21446a40d5f5%2F%25E1%2584%258C%25E1%2585%25A1%25E1%2586%25BC%25E1%2584%2587%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25AE%25E1%2584%2582%25E1%2585%25B5.webp?table=block&id=10281b43-34ec-80e4-b8e2-d38006e9a55e&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1200&userId=&cache=v2",
      alt: "장바구니",
    },
    {
      // src: "https://user-images.githubusercontent.com/78532129/208682521-5e1edf27-2449-4a2d-a356-7f5f9f8ee63d.gif",
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2Fedb051e3-4afa-4b1c-ab3e-e7cf990e5904%2F%25E1%2584%2585%25E1%2585%25A2%25E1%2586%25AB%25E1%2584%2583%25E1%2585%25B5%25E1%2586%25BC%25E1%2584%2591%25E1%2585%25A6%25E1%2584%258B%25E1%2585%25B5%25E1%2584%258C%25E1%2585%25B5_%25E1%2584%2592%25E1%2585%25AC%25E1%2584%258B%25E1%2585%25AF%25E1%2586%25AB%25E1%2584%2580%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25B8.webp.webp?table=block&id=10281b43-34ec-800f-98bc-c462601248a4&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1200&userId=&cache=v2",
      alt: "랜딩페이지, 회원가입",
    },
  ],
  Portfolio: [
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2Ff3b3b3b4-3b3b-4b3b-8b3b-3b3b3b3b3b3b%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-09-01_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_3.19.00.png?table=block&id=3b3b3b3b-3b3b-4b3b-8b3b-3b3b3b3b3b3b&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "포트폴리오",
    },
    {
      src: "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F3b3b3b3b-3b3b-4b3b-8b3b-3b3b3b3b3b3b%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-09-01_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_3.19.00.png?table=block&id=3b3b3b3b-3b3b-4b3b-8b3b-3b3b3b3b3b3b&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=2000&userId=&cache=v2",
      alt: "포트폴리오2",
    },
  ],
} as const;

export { projectImages };
