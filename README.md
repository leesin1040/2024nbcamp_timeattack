## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## License

Nest is [MIT licensed](LICENSE).

# 프로젝트 개요

본 프로젝트는 스파르타 코딩클럽 2024년 처음으로 진행된 해커톤 이벤트에 참여하며 만들게 되었습니다.

<details> <summary>프로젝트 요구 조건</summary> 
<div markdown="1"> 
<h3>타임어택 과제 목표</h3>
<ul>
	<li>1. Nest.Js를 사용하여 RESTFull API를 만들어 회원가입 및 로그인 기능을 구현</li>
	<li>2. ORM을 사용하여 데이터베이스와 상호 작용</li>
	<li>3. Passport 및 JWT를 사용하여 인증 구현</li>
	<li>4. 에러 핸들링 및 보안 고려</li>
</ul>
<h3>요구 조건</h3>
<ul>
	<li>1. 프로젝트 설정:</li>
			<ul>
			<ol>Nest.js 프로젝트 생성</ol>
			<ol>선호하는 ORM 설정 및 모델 작성</ol>
			<ol>JWT 모듈 설치 및 설정</ol>
			</ul>
			
	<li>2. 회원가입 API 구현:</li>
				<ul>
			<ol>사용자 모델 정의 및 데이터베이스에 저장</ol>
			<ol>유효성 검사를 통한 데이터 입력 확인(이메일, 비밀번호, 이름, 전화번호)</ol>
			<ol>비밀번호 암호화</ol>
			</ul>
	<li>3. 로그인 API구현(유효성 검사 및 JWT 토큰 발급)</li>
	<li>4. 인증 미들웨어(accessToken, refreshToken)</li>
	<li>5. 에러 핸들링 및 보안 강화</li>
	<li>참고사항</li>
		<ul>
		  <li>TypeScript를 사용하여 코드 작성</li>
		  <li>Nest.js CLI를 활용하여 모듈, 서비스, 컨트롤러를 생성</li>
		  <li>필요한 의존성은npm 또는 yarn을 통해 설치</li>
		  <li>데이터베이스 선택은 자유-MySQL</li>
		  <li>API 문서Swagger</li>
		</ul>
	<li></li>
</ul>
<h3>조건(필수)</h3>
<ul>
  <li>인터페이스, 비즈니스 로직, 영속성 관리에 따라 책임과 역할을 적절히 나누었다.</li>
  <li>에러 핸들링을 고려해야 한다. 사용자가 어떤 행동을 하든 404, 500 페이지를 보는 일은 없어야 한다.</li>
</ul>
</div> </details>

# 구현 핵심 내용

#### 내배캠에서 배운 것들이 내 것이 되었는가? 무엇을 할 수 있게 되었는가?

## 파일 관리

- 프로젝트를 구성하는데에 여러개의 파일이 존재하는 장점인가 단점인가?
- ##### 파일이 많은 경우 장점
  - 파일의 수가 많은 경우, 모듈화와 재사용성을 높일 수 있다.
  - 각 파일이 특정 기능이나 역할을 가짐으로써 필요한 경우 해당 파일만 임포트하여 사용할 수 있다.
  - 코드 가독성과 유지보수성을 높일 수 있다.
  - 여러 개발자의 동시 작업이 용이하다(충돌 발생이 줄어든다).
- ##### 파일이 많은 경우 단점
  - 파일간 관계 파악이 어려울 수 있다(네이밍 중요성).
  - 프로젝트 구조가 복잡해질 수 있다(디렉토리 구조 중요성).
  - 파일을 찾거나 관리하기 어려울 수 있다.

## 리프레시 토큰 사용해보기

- 리프레시 토큰을 사용한 장기 엑세스 허용
  - 프로젝트를 길게 하지는 않았기 때문에 로그인이 풀릴 일은 별로 없었지만 도전해보고 싶었다.
  - 서버가 리프레시토큰을 가지고 있게 되어 토큰 탈취 등에서 보안을 강화할 수 있다.

## 에러핸들링 미들웨어

- 시간내에 구현하지 못했다.

## ERD

![erd](https://github.com/leesin1040/2024nbcamp_timeattack/blob/main/forreadme/1.png?raw=true)

## API 명세

![api명세](https://github.com/leesin1040/2024nbcamp_timeattack/blob/main/forreadme/2.png?raw=true)
