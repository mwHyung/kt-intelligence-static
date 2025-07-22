# KT Intelligence 프로젝트 인수인계 가이드

## 📋 프로젝트 개요

-   **프로젝트명**: KT Intelligence Static Website
-   **GitHub Repository**: https://github.com/mwHyung/kt-intelligence-static
-   **프로젝트 유형**: 정적 웹사이트 (퍼블리싱)
-   **주요 기술**: HTML5, CSS3, JavaScript, Thymeleaf
-   **브라우저 지원**: Chrome, Firefox, Safari, Edge (최신 2개 버전)

---

## 📁 프로젝트 디렉토리 구조

```
kt-intelligence-static/
├── ai/                          # 메인 페이지 디렉토리
│   ├── common/                  # 공통 컴포넌트
│   │   ├── footer/             # 푸터 컴포넌트
│   │   ├── header/             # 헤더 컴포넌트
│   │   ├── model/              # KT Model 체험 컴포넌트
│   │   └── resourcesBanner/    # 리소스 배너 컴포넌트
│   ├── conditions/             # 이용약관 페이지
│   ├── main/                   # 메인 페이지
│   ├── privacy/                # 개인정보처리방침 페이지
│   ├── resources/              # 리소스 페이지
│   │   ├── detail01/          # 리소스 상세 페이지 1
│   │   ├── detail03/          # 리소스 상세 페이지 3
│   │   ├── detail04/          # 리소스 상세 페이지 4
│   │   ├── detail05/          # 리소스 상세 페이지 5
│   │   ├── detail06/          # 리소스 상세 페이지 6
│   │   └── index.html         # 리소스 메인 페이지
│   ├── solution/               # 솔루션 페이지
│   │   ├── agent/             # AI Agent 솔루션
│   │   ├── cloud/             # Cloud 솔루션
│   │   ├── model/             # AI Model 솔루션
│   │   ├── RAG/               # RAG 솔루션
│   │   ├── RAI/               # Responsible AI 솔루션
│   │   └── studio/            # Studio 솔루션
│   └── usecase/               # 사용 사례 페이지
├── css/                        # 스타일시트 디렉토리
│   └── ai/
│       ├── common/            # 공통 스타일
│       │   ├── aos.css       # AOS 애니메이션 스타일
│       │   ├── common.css    # 공통 스타일 (디자인 시스템)
│       │   ├── reset.css     # CSS 리셋
│       │   ├── swiper-bundle.min.css  # Swiper 슬라이더 스타일
│       │   └── swiper.css    # Swiper 커스텀 스타일
│       ├── main.css          # 메인 페이지 스타일
│       ├── solution.css      # 솔루션 페이지 스타일
│       └── solution_cy.css   # 솔루션 페이지 추가 스타일
├── js/                         # JavaScript 디렉토리
│   └── ai/
│       ├── common/            # 공통 스크립트
│       │   ├── aos.js        # AOS 애니메이션 라이브러리
│       │   ├── common.js     # 공통 기능 (헤더/푸터 로드)
│       │   ├── gsap.min.js   # GSAP 애니메이션 라이브러리
│       │   ├── header.js     # 헤더 관련 스크립트
│       │   ├── ScrollToPlugin.min.js  # GSAP 스크롤 플러그인
│       │   ├── ScrollTrigger.min.js   # GSAP 스크롤 트리거
│       │   └── swiper-bundle.min.js   # Swiper 슬라이더 라이브러리
│       ├── ga.js             # Google Analytics 스크립트
│       ├── main.js           # 메인 페이지 스크립트
│       ├── solution.js       # 솔루션 페이지 스크립트
│       └── sub_cy.js         # 서브 페이지 추가 스크립트
├── resource/                   # 리소스 디렉토리
│   ├── fonts/                # 폰트 파일
│   │   └── ai/
│   │       ├── Pretendard-Black.woff2
│   │       ├── Pretendard-Bold.woff2
│   │       ├── Pretendard-ExtraBold.woff2
│   │       ├── Pretendard-ExtraLight.woff2
│   │       ├── Pretendard-Light.woff2
│   │       ├── Pretendard-Medium.woff2
│   │       ├── Pretendard-Regular.woff2
│   │       ├── Pretendard-SemiBold.woff2
│   │       ├── Pretendard-Thin.woff2
│   │       └── PretendardVariable.woff2
│   ├── images/               # 이미지 리소스
│   │   └── ai/
│   │       ├── icons/        # 아이콘 이미지
│   │       ├── k-cube/       # 메인 구성요소 관련 이미지
│   │       ├── k-data/       # 메인 회사 로고 관련 이미지
│   │       ├── k-eco/        # 메인 eco 관련 이미지
│   │       ├── mobile/       # 모바일 전용 이미지
│   │       ├── privacy/      # 개인정보처리방침 이미지
│   │       ├── resources/    # 리소스 페이지 이미지
│   │       ├── solution/     # 솔루션 페이지 이미지
│   │       └── usecase/      # 사용 사례 이미지
│   ├── pdfs/                 # PDF 문서
│   │   └── ai/
│   │       └── solution/
│   └── videos/               # 비디오 파일
│       └── ai/
│           ├── main-hero-video.mp4      # 메인 히어로 비디오
│           ├── mo-main-hero-video.mp4   # 모바일 메인 히어로 비디오
│           └── solution/                # 솔루션 페이지 비디오
├── .prettierrc               # Prettier 설정 파일
├── cursorrules.md            # 프로젝트 코딩 가이드라인
└── find_unused_images.py    # 사용하지 않는 이미지 찾기 스크립트
```

---

## 🎨 각 파일의 기능 설명

### 📄 HTML 파일들

#### **메인 페이지**

-   `ai/main/index.html`: KT Intelligence 메인 페이지
    -   히어로 섹션 (비디오 배경)
    -   K Intelligence Suite 구성요소
    -   Quality Framework
    -   ECO 섹션
    -   Use Cases
    -   새로운 소식

#### **공통 컴포넌트**

-   `ai/common/header/index.html`: 헤더 컴포넌트
-   `ai/common/footer/index.html`: 푸터 컴포넌트
-   `ai/common/model/index.html`: KT Model 체험 컴포넌트
-   `ai/common/resourcesBanner/index.html`: 리소스 배너 컴포넌트

#### **솔루션 페이지들**

-   `ai/solution/agent/index.html`: AI Agent 솔루션
-   `ai/solution/cloud/index.html`: Cloud 솔루션
-   `ai/solution/model/index.html`: AI Model 솔루션
-   `ai/solution/RAG/index.html`: RAG 솔루션
-   `ai/solution/RAI/index.html`: Responsible AI 솔루션
-   `ai/solution/studio/index.html`: Studio 솔루션

#### **기타 페이지들**

-   `ai/resources/index.html`: 리소스 메인 페이지
-   `ai/resources/detail01-06/index.html`: 리소스 상세 페이지들
-   `ai/usecase/index.html`: 사용 사례 페이지
-   `ai/conditions/index.html`: 이용약관 페이지
-   `ai/privacy/index.html`: 개인정보처리방침 페이지

### 🎨 CSS 파일들

#### **공통 스타일**

-   `css/ai/common/common.css`: **핵심 디자인 시스템**

    -   CSS 변수 정의 (컬러, 폰트, 여백 등)
    -   공통 컴포넌트 스타일 (헤더, 푸터, 버튼 등)
    -   유틸리티 클래스
    -   반응형 미디어 쿼리(공통사용만)

-   `css/ai/common/reset.css`: 브라우저 기본 스타일 초기화
-   `css/ai/common/swiper-bundle.min.css`: Swiper 슬라이더 기본 스타일
-   `css/ai/common/swiper.css`: Swiper 커스텀 스타일
-   `css/ai/common/aos.css`: AOS 애니메이션 스타일

#### **페이지별 스타일**

-   `css/ai/main.css`: 메인 페이지 전용 스타일
-   `css/ai/solution.css`: 서브 페이지 공통 스타일
-   `css/ai/solution_cy.css`: 서브 페이지 추가 스타일

### 🔧 JavaScript 파일들

#### **공통 스크립트**

-   `js/ai/common/common.js`: **핵심 공통 기능**

    -   헤더/푸터 동적 로드
    -   KT Model 컴포넌트 로드
    -   반응형 링크 처리

-   `js/ai/common/header.js`: 헤더 관련 기능
-   `js/ai/common/aos.js`: AOS 애니메이션 라이브러리
-   `js/ai/common/gsap.min.js`: GSAP 애니메이션 라이브러리
-   `js/ai/common/swiper-bundle.min.js`: Swiper 슬라이더 라이브러리

#### **페이지별 스크립트**

-   `js/ai/main.js`: 메인 페이지 전용 스크립트
-   `js/ai/solution.js`: 서브 페이지 공통 스크립트
-   `js/ai/sub_cy.js`: 서브 페이지 추가 스크립트
-   `js/ai/ga.js`: Google Analytics 스크립트

### 📁 리소스 파일들

#### **폰트**

-   Pretendard 폰트 패밀리 (Light ~ Black)
-   Variable 폰트 포함

#### **이미지**

-   아이콘: SVG, PNG 포맷
-   로고: SVG 포맷
-   배경 이미지: PNG, WebP 포맷
-   모바일 전용 이미지: 별도 디렉토리 구성

#### **비디오**

-   메인 히어로 비디오 (PC/모바일 버전)
-   솔루션별 데모 비디오

---

## 🛠️ 개발 환경 설정

### **필수 도구**

-   Visual Studio Code (권장)
-   Prettier (코드 포맷팅)
-   Live Server (로컬 개발 서버)

### **Prettier 설정**

```json
{
    "tabWidth": 4,
    "useTabs": false,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all",
    "printWidth": 100,
    "bracketSpacing": true,
    "arrowParens": "always",
    "endOfLine": "lf",
    "jsxSingleQuote": true
}
```

---

### **CSS 작성 규칙**

1. **디자인 시스템 우선 사용**

    - `common.css`의 CSS 변수와 유틸리티 클래스 우선 사용
    - `solution.css`, `solution_cy.css` 서브 페이지 작업

2. **반응형 디자인**
    - PC 퍼스트 접근
    - 브레이크포인트: 768px (모바일), 769 - 1366px (태블릿) 필요시 1024 추가

### **JavaScript 작성 규칙**

1. **이벤트 핸들링**

    - 이벤트 위임 사용
    - DOMContentLoaded 이후 등록

2. **애니메이션**
    - AOS(Animate On Scroll) 라이브러리 활용
    - CSS 트랜지션 우선 사용
    - 복잡한 애니메이션은 GSAP 사용

---

## 🎯 주요 기능 및 컴포넌트

### **1. 공통 컴포넌트 시스템**

-   **헤더**: 동적 로드, 스티키 헤더, 다크/라이트 모드
-   **푸터**: 동적 로드, 반응형 레이아웃
-   **KT Model 체험**: 페이지 마지막 체험 컨텐츠 컴포넌트

### **2. 애니메이션 시스템**

-   **AOS**: 스크롤 기반 애니메이션
-   **GSAP**: 복잡한 애니메이션
-   **Swiper**: 슬라이더 기능

### **3. 반응형 시스템**

-   **PC/테블릿/모바일**: 모바일 768px, 태블릿 769 - 1366px 브레이크포인트
-   **이미지**: PC/모바일 버전 분리
-   **비디오**: PC/모바일 버전 분리

---

## 🔧 유지보수 도구

### **사용하지 않는 이미지 찾기**

```bash
python find_unused_images.py
```

-   사용되지 않는 이미지 파일을 찾아 삭제
-   안전한 삭제를 위해 확인 후 실행

### **코드 포맷팅**

-   Prettier 자동 포맷팅 사용
-   `.prettierrc` 설정 파일 참조

---

## ⚠️ 개발사 산출물 전달시 주의사항 체크리스트

### **📁 파일 구조 체크**

-   [ ] 모든 HTML 파일이 올바른 디렉토리에 위치
-   [ ] CSS 파일이 `css/ai/` 디렉토리에 정리
-   [ ] JavaScript 파일이 `js/ai/` 디렉토리에 정리
-   [ ] 이미지 파일이 `resource/images/ai/` 디렉토리에 정리
-   [ ] 폰트 파일이 `resource/fonts/ai/` 디렉토리에 정리
-   [ ] 비디오 파일이 `resource/videos/ai/` 디렉토리에 정리

### **🎨 디자인 시스템 체크**

-   [ ] `css/ai/common/common.css`의 CSS 변수 사용 확인

### **📱 반응형 디자인 체크**

-   [ ] PC/모바일 버전 이미지 분리 확인
-   [ ] PC/모바일 버전 비디오 분리 확인
-   [ ] 768px, 769 - 1366px 브레이크포인트에서 레이아웃 정상 동작

### **🚀 성능 최적화 체크**

-   [ ] CSS/JS 파일 최적화 (불필요한 주석 제거)

### **🔗 링크 및 경로 체크**

-   [ ] 모든 상대 경로가 올바르게 설정
-   [ ] 이미지 경로가 `resource/images/ai/` 기준으로 설정
-   [ ] CSS 경로가 `css/ai/` 기준으로 설정
-   [ ] JavaScript 경로가 `js/ai/` 기준으로 설정
-   [ ] 모든 페이지 경로는 `/ai/main`에서 `/main`처럼 /ai 삭제
-   [ ] 페이지 경로는 `href="/main?v=20250721"`과 같이 수정한 일자를 버전명으로 추가한다.
-   [ ] 이미지 경로는 `src="/resource/images/ai/test.png?v=20250721"`과 같이 수정한 일자를 버전명으로 추가한다.

### **🎬 애니메이션 체크**

-   [ ] AOS 애니메이션 정상 동작
-   [ ] GSAP 애니메이션 정상 동작
-   [ ] Swiper 슬라이더 정상 동작
-   [ ] 모바일에서 애니메이션 성능 최적화

### **🌐 브라우저 호환성 체크**

-   [ ] Chrome 테스트
-   [ ] Firefox 테스트
-   [ ] Safari 테스트
-   [ ] Edge 테스트

### **📱 모바일 최적화 체크**

-   [ ] 모바일에서 터치 인터랙션 정상 동작
-   [ ] 모바일에서 이미지 크기 최적화
-   [ ] 모바일에서 비디오 재생 정상

### **사내/사외 소스 분리 체크**

-   [ ] 사내/사외 소스 구분
-   [ ] 사내용 노출 컨텐츠 확인
-   [ ] 사외용 비노출 컨텐츠 확인
-   [ ] 개발사 산출물 제출시 사내/사외 분리 제출 사내용 사외용 명칭 추가

---

## 🚨 주의사항

### **1. 디자인 시스템 관리**

-   **절대 개별 파일에서 CSS 변수나 유틸리티 클래스를 추가하지 마세요**
-   모든 디자인 공통 `css/ai/common/common.css`에서만 관리(서브 작업시 서브용 css 확인필요)
-   변경 시 전체 프로젝트에 즉시 반영
-   서브 작업시 css 파일에서 작업 `solution.css`,`solution_cy.css`

### **2. 이미지 최적화**

-   SVG: 아이콘, 로고에 사용
-   PNG: 투명도가 필요한 이미지에 사용
-   모든 이미지에 `width`, `height`, `alt` 속성 필수

### **4. 반응형 디자인**

-   줌 기능 제한하지 않음
-   가로 스크롤 방지
-   터치 제스처에 키보드 대체 수단 제공

---

## 📞 문의사항

프로젝트 관련 문의사항이 있으시면 다음 연락처로 문의해 주세요:

-   **퍼블**: 형민우: [mw.hyung@eluocnc.com]
-   **기획**: 한관운: [gu.han@eluocnc.com]

---

**마지막 업데이트**: 2025년 07월 21일일
**문서 버전**: v1.0
