# Portfolio

개인 개발자 포트폴리오 웹사이트입니다. 시스템 프로그래밍, 운영체제, 네트워크, 데이터베이스, AI 개발 경험을 한 페이지에서 확인할 수 있도록 구성했습니다.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

별도의 프레임워크, 백엔드, 빌드 과정 없이 실행할 수 있습니다.

## Project Structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
└── README.md
```

## Local Preview

`index.html` 파일을 브라우저에서 열면 바로 확인할 수 있습니다. 로컬 서버를 사용하려면 프로젝트 루트에서 다음과 같이 실행할 수 있습니다.

```bash
python -m http.server 8000
```

이후 브라우저에서 `http://localhost:8000`에 접속합니다.

## Customization

`index.html`의 `수정 포인트` 주석을 검색해 아래 정보를 변경하세요.

- 지원자 이름과 소개 문구
- GitHub 사용자명과 프로필 주소
- 이메일 주소
- 각 프로젝트 Repository URL
- 필요 시 `images/` 폴더에 프로젝트 이미지를 추가하고 상대 경로(`./images/example.png`)로 연결

전체 색상은 `css/style.css` 상단의 `:root` CSS 변수에서 쉽게 변경할 수 있습니다.

## Deployment

1. 이 프로젝트를 GitHub Repository의 `main` 브랜치에 업로드합니다.
2. GitHub Repository에서 **Settings**로 이동합니다.
3. 왼쪽 메뉴에서 **Pages**를 선택합니다.
4. **Build and deployment**의 Source를 **Deploy from a branch**로 설정합니다.
5. Branch를 **main**, 폴더를 **/ (root)**로 선택한 뒤 **Save**를 누릅니다.
6. 잠시 후 GitHub Pages에 표시된 배포 URL로 접속합니다.

모든 내부 파일 경로가 상대 경로로 작성되어 있어 Repository 이름이 바뀌어도 정상적으로 동작합니다.
