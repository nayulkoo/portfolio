# NAYUL KOO's Portfolio

이 포트폴리오 페이지는 **Codex** 와 함께 `brainstorming → writing plans → executing plans → verification` 흐름으로 요구사항을 정리하고, 콘텐츠 구조와 UI를 반복 개선하며 제작했습니다.

## Live Demo

Vercel 라이브 페이지: https://nayul-portfolio.vercel.app

## 제작 방식

이 포트폴리오는 단순히 템플릿을 채운 페이지가 아니라, Codex와 다음 작업 흐름을 반복하며 만들었습니다.

1. **Brainstorming**
   - 포트폴리오의 목적과 대상 직무를 기준으로 핵심 경력, 프로젝트, 강조할 메시지와 제약사항을 정리했습니다.
2. **Writing Plans**
   - 콘텐츠 구조와 섹션 순서, UI 개선 범위, 구현 단계와 검증 기준을 실행 가능한 계획으로 작성했습니다.
3. **Executing Plans**
   - 작성한 계획에 따라 정적 웹페이지를 구현하고, 콘텐츠와 레이아웃, 상호작용을 반복 개선했습니다.
4. **Verification**
   - HTML/CSS/JavaScript 동작, 로컬 정적 서빙, 반응형 레이아웃, 접근성 속성, SVG 아이콘 분리 등을 확인했습니다.

## 기술 스택

이 저장소의 실제 페이지 구현에 사용된 기술입니다.

| 영역 | 기술 |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3, CSS Custom Properties, Responsive Layout |
| Interaction | Vanilla JavaScript |
| Version Control | Git, GitHub |
| AI-assisted Workflow | Codex |

별도의 프론트엔드 프레임워크나 번들러는 사용하지 않았습니다.

- React/Vue/Svelte 미사용
- Vite/Webpack 미사용
- npm 의존성 없음
- 빌드 단계 없음

## 프로젝트 구조

```text
.
├── index.html
├── assets
│   ├── css
│   │   └── styles.css
│   ├── fonts
│   │   └── PretendardVariable.woff2
│   ├── icons
│   │   ├── icon-github.svg
│   │   ├── icon-mail.svg
│   │   ├── icon-theme-auto.svg
│   │   ├── icon-theme-dark.svg
│   │   └── icon-theme-light.svg
│   ├── images
│   │   ├── me.png
│   │   └── generated-me.png
│   └── js
│       └── script.js
└── README.md
```

## 로컬에서 실행하기

이 프로젝트는 정적 웹페이지이므로 별도 설치 과정이 필요하지 않습니다.

### 1. 저장소 클론

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. 로컬 정적 서버 실행

Python이 설치되어 있다면 다음 명령으로 바로 확인할 수 있습니다.

```bash
python3 -m http.server 8765
```

브라우저에서 아래 주소로 접속합니다.

```text
http://localhost:8765
```

### 대안: 파일 직접 열기

`index.html` 파일을 브라우저로 직접 열어도 기본 화면은 확인할 수 있습니다. 다만 SVG, 모듈, 외부 리소스 참조 방식은 브라우저 보안 정책의 영향을 받을 수 있으므로, 가능하면 로컬 서버 방식으로 확인하는 것을 권장합니다.

## 라이선스 및 사용 범위

이 저장소는 개인 포트폴리오 용도로 제작되었습니다. 레이아웃/내용 구성은 참고할 수 있으나, 프로필 이미지와 개인 경력/프로젝트 내용은 무단 복제하지 말아 주세요.
