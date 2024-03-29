# Team-SolDamWha 프로젝트

## 🚀 프로젝트 소개

**Team-SolDamWha**은 프론트엔드반 술담화 리액트 프로젝트 팀입니다. 술담화라는 전통주 구독 플랫폼을 재해석해서 사이트로 표현하는 웹 프로젝트입니다.

## 🌐 배포용 링크
### nodeJS + DB 버전
http://sooldamwhareact.cafe24app.com/

### 리액트버전
https://sooldamwha.netlify.app/

### 웹버전
https://yohaiyo.github.io/Team-SoolDamWha/

## 📖 한장으로 보는 술담화 개발여정
![술담화개발여정-edit](https://github.com/YoHaiYo/React-SoolDamWha.github.io/assets/124754510/8feeee73-8103-4b9d-8159-f52d5c0f1e70)

- [노션 기획서 바로 가기](https://www.notion.so/9299e0485c414f87bd02d8b202c4364d)
- [PDF 기획서 바로 가기](https://drive.google.com/file/d/1366eIzDtRNTGAVXXUHlCVr7gvMVtRuwX/view?usp=drive_link)
- [노션 이슈처리 바로 가기](https://www.notion.so/f8bc636e180443bf8b1b7c9c67038ff5)
- [피그마 바로 가기](https://www.figma.com/file/KUL9il7XOPOrt2ce4OYvXT/%EC%88%A0%EB%8B%B4%ED%99%94-%ED%94%BC%EA%B7%B8%EB%A7%88-%EB%B0%B0%ED%8F%AC%EC%9A%A9?type=design&node-id=1-1068&mode=design&t=OPx03nzqhn2vOAdr-0)

## 📖 술담화 Architecture Diagram
  ![Architecture Diagram](https://github.com/YoHaiYo/React-SoolDamWha.github.io/assets/124754510/ce260bc0-3b57-4ad0-925d-abcc0562dd83)

## 🌟 팀원 소개

![JR](https://github.com/YoHaiYo/React-SoolDamWha.github.io/assets/124754510/310410e2-7210-49ca-a8aa-b8f8d8c55beb) [kimjaer](https://github.com/kimjaer)
 : 리뷰섹션, 입점문의섹션, Q & A 페이지 작업.

 ![JY](https://github.com/YoHaiYo/React-SoolDamWha.github.io/assets/124754510/c7a2e01a-9974-4c3f-9101-422323fc1291) [jiyy25](https://github.com/jiyy25) 
 : 상품섹션, 푸터섹션, 구독페이지 작업.
 
 ![SE](https://github.com/YoHaiYo/React-SoolDamWha.github.io/assets/124754510/b4ee5657-ad51-47f9-94c1-13e2a8ed012b) [SeungEunChun](https://github.com/SeungEunChun)
 : 헤더섹션, 메인배너섹션, 이벤트페이지 작업.
  
![SH](https://github.com/YoHaiYo/React-SoolDamWha.github.io/assets/124754510/4bf043ac-9ad9-4bce-b8ef-76d6b928f45d) [YoHaiYo](https://github.com/YoHaiYo)
 : 구독섹션, 베스트아이템(술고래픽)섹션, 전체상품페이지 작업.

## 🛠️ 사용 플러그인
### Front End Side
- aos: 2.3.4
- axios: 1.6.2
- bootstrap: 5.3.2
- gh-pages: 6.1.0
- react-bootstrap: 2.9.1
- react-router-dom: 6.21.2
- sass: 1.69.5
- styled-components: 6.1.8
- swiper: 11.0.5
### Back End Side
- express: 4.18.2
- mysql: 2.18.1
- path : 0.12.7

## 🌐 리액트프로젝트 이전 웹 프로젝트 깃허브

[작업 깃허브 바로 가기](https://github.com/YoHaiYo/Team-SoolDamWha)

## 🤔 작업 고려사항

- 컴포넌트 계층구조: `component` 폴더 → `section` 폴더 → `King.js` → `index.js`
- 팀원 작업폴더: `workroom` 폴더에서 팀원 이름으로 각각 작업 폴더 생성
- 데이터 관리: `data` 폴더에서 하나의 JSON 파일로 데이터 관리 및 `props`로 전달
- CSS 관리: `module.css`로 연결하여 CSS 충돌 방지
- 데이터 필드명 통일: SQL 테이블 필드명과 JSON 데이터 객체명 통일
- 이미지 경로 표준화: 데이터 파일 이미지 경로에 `./` 붙여서 사용 (`/`로만 쓰면 deploy 인식 안됨)
