// 스크롤 위치 복원 방지
// if ('scrollRestoration' in history) {
//     history.scrollRestoration = 'manual';
// }

// // // 새로고침/이동 직전 스크롤 위치 초기화
// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// };

// ===== 애니메이션 함수 정의 =====
function initHeroSectionAnimation() {
    const button = document.querySelector('.hero-btn-wrap');
    if (!button || !window.gsap) return;
    gsap.set(button, { opacity: 0 });
    gsap.to(button, { opacity: 1, duration: 1, delay: 1.5, ease: 'power2.out' });

    const text1 = document.getElementById('text-1');
    const text2 = document.getElementById('text-2');
    const text3 = document.getElementById('text-3');
    let baseFontSizePx = parseFloat(getComputedStyle(text3).fontSize);
    let baseFontSizeVW = (baseFontSizePx / window.innerWidth) * 100;

    gsap.to(text1, {
        opacity: 1,
        y: 0,
        duration: 1,
        onComplete: () => {
            // Timeline 구성
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    onUpdate: (self) => {
                        AOS.refresh();
                    },
                },
            });

            // 텍스트 1 등장
            tl.to(text1, { opacity: 0, y: -100, duration: 1 });

            // 텍스트 2 등장
            tl.fromTo(text2, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }).to(text2, { opacity: 0, y: -100, duration: 1 });

            if (window.innerWidth > 1467) {
                tl.fromTo(text3, { opacity: 0, y: 100, scale: 1 }, { opacity: 1, y: 0, fontSize: '100px', duration: 1 });
                tl.to(text3, { opacity: 1, fontSize: `${100 * 5}px`, duration: 1 });
            } else {
                tl.fromTo(text3, { opacity: 0, y: 100, scale: 1 }, { opacity: 1, y: 0, fontSize: `${baseFontSizeVW}vw`, duration: 1 });
                tl.to(text3, { opacity: 1, fontSize: `${baseFontSizeVW * 5}vw`, duration: 1 });
            }
        },
    });
    window.addEventListener('resize', () => {
        baseFontSizePx = parseFloat(getComputedStyle(text3).fontSize);
        baseFontSizeVW = (baseFontSizePx / window.innerWidth) * 100;
    });
}

function countUpDigitsReverse(selector, options = {}) {
    const el = document.querySelector(selector);
    if (!el) return;
    const span = el.querySelector('span');
    const max = Number(el.dataset.target) || '';
    // 숫자 목록 생성 (00~63)
    let html = '';
    for (let i = 0; i <= max; i++) {
        html += `${i.toString().padStart(2, '0')}<br>`;
    }
    span.innerHTML = html;

    // 전체 높이 계산
    const lineHeight = 1;
    const totalHeight = lineHeight * max;

    // 트랜스폼 적용
    requestAnimationFrame(() => {
        span.style.transform = `translateY(-${totalHeight}em)`;
    });
    /*
    if (!el) return;
    const targetStr = el.dataset.target || '';
    const duration = options.duration || 1100;
    el.innerHTML = '';

    for (let i = 0; i < targetStr.length; i++) {
        const digitTarget = parseInt(targetStr[i], 10);
        const container = document.createElement('div');
        container.className = 'countup-digit-container';

        const digitCol = document.createElement('div');
        digitCol.className = 'countup-digit';

        // 목표값부터 0까지 역순으로 span 생성
        for (let n = digitTarget; n >= 0; n--) {
            const span = document.createElement('span');
            span.textContent = n;
            digitCol.appendChild(span);
        }

        container.appendChild(digitCol);
        el.appendChild(container);

        // 초기 위치는 translateY(0) (목표값 노출)
        digitCol.style.transform = `translateY(-${digitTarget * 12.5}rem)`;
        digitCol.style.transition = `transform ${duration}ms cubic-bezier(0.33,1,0.68,1)`;

        setTimeout(() => {
            digitCol.style.transform = `translateY(0)`; // 아래에서 위로 이동
        }, 80 * i);
    }
    */
}

function initIntroSectionAnimation() {
    const section = document.querySelector('.sub-banner-section');
    if (!section || !window.gsap) return;
    const title1 = section.querySelector('ul li h2 span:first-child');
    const title2 = section.querySelector('ul li h2 span:last-child');
    const desc1 = section.querySelector('ul li p:first-child');
    const countUp = section.querySelectorAll('.count-up');

    ScrollTrigger.matchMedia({
        '(min-width: 769px)': function () {
            const tl = gsap.timeline({
                ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom-=30%',
                    end: 'bottom bottom',
                },
            });

            tl.fromTo(
                title1,
                {
                    opacity: 0,
                    yPercent: 100,
                },
                {
                    opacity: 1,
                    yPercent: 0,
                    duration: 0.4,
                },
            )
                .fromTo(
                    title2,
                    {
                        opacity: 0,
                        yPercent: 100,
                    },
                    {
                        opacity: 1,
                        yPercent: 0,
                        duration: 0.4,
                    },
                    '-=0.2',
                )
                .fromTo(
                    desc1,
                    {
                        opacity: 0,
                        yPercent: 100,
                    },
                    {
                        opacity: 0.6,
                        yPercent: 0,
                        duration: 0.4,
                    },
                )
                .fromTo(
                    countUp[0],
                    {
                        opacity: 0,
                        yPercent: 50,
                    },
                    {
                        opacity: 1,
                        yPercent: 0,
                        duration: 0.4,
                        onStart: () => {
                            countUpDigitsReverse('.count-item-1', { duration: 1500 });
                        },
                    },
                )
                .fromTo(
                    countUp[1],
                    {
                        opacity: 0,
                        yPercent: 50,
                    },
                    {
                        opacity: 1,
                        yPercent: 0,
                        duration: 0.4,
                        onStart: () => {
                            countUpDigitsReverse('.count-item-2', { duration: 1500 });
                        },
                    },
                    '-=0.4',
                );
        },
        '(max-width: 768px)': function () {
            const tl = gsap.timeline({
                ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom-=30%',
                    end: 'bottom bottom',
                },
            });

            tl.fromTo(
                title1,
                {
                    opacity: 0,
                    yPercent: 100,
                },
                {
                    opacity: 1,
                    yPercent: 0,
                    duration: 0.4,
                },
            )
                .fromTo(
                    title2,
                    {
                        opacity: 0,
                        yPercent: 100,
                    },
                    {
                        opacity: 1,
                        yPercent: 0,
                        duration: 0.4,
                    },
                    '-=0.2',
                )
                .fromTo(
                    desc1,
                    {
                        opacity: 0,
                        yPercent: 100,
                    },
                    {
                        opacity: 1,
                        yPercent: 0,
                        duration: 0.4,
                    },
                )
                .fromTo(
                    countUp[0],
                    {
                        opacity: 0,
                        yPercent: 50,
                    },
                    {
                        opacity: 1,
                        yPercent: 0,
                        duration: 0.4,
                        onStart: () => {
                            countUpDigitsReverse('.count-item-1', { duration: 1500 });
                        },
                    },
                )
                .fromTo(
                    countUp[1],
                    {
                        opacity: 0,
                        yPercent: 50,
                    },
                    {
                        opacity: 1,
                        yPercent: 0,
                        duration: 0.4,
                        onStart: () => {
                            countUpDigitsReverse('.count-item-2', { duration: 1500 });
                        },
                    },
                );
        },
    });
}

function initParallaxSectionAnimation() {
    // iOS 크롬에서만 부드러운 scrub 값 적용
    const isIOSChrome = /CriOS/.test(navigator.userAgent) && /iPhone|iPad|iPod/.test(navigator.userAgent);
    const scrubValue = isIOSChrome ? 0.3 : 1; // iOS 크롬에서만 부드럽게
    const section = document.querySelector('.parallax-section');
    const cont = document.querySelector('.parallax-container');
    if (!section || !window.gsap || !window.ScrollTrigger) return;

    // 이미지 요소들 선택
    const images = section.querySelectorAll('.parallax-images img');

    ScrollTrigger.matchMedia({
        '(max-width: 768px)': function () {
            gsap.set(images[3], { scaleX: -1 });
        },
    });

    // 컨테이너 고정 애니메이션
    const spans = gsap.utils.toArray('.parallax-description span');
    const space = 100;

    // 1. pin 고정
    ScrollTrigger.create({
        trigger: cont,
        start: 'top top',
        end: `+=${spans.length * space}`, // 100px씩 할당 (조절 가능)
        pin: '.parallax-titles',
        pinSpacing: true,
        onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.floor(progress * spans.length);

            spans.forEach((span, i) => {
                span.style.color = i <= index ? '#0B0B0B' : '#d5d5d5';
            });
            AOS.refresh();
        },
    });

    gsap.fromTo(
        '.parallax-titles ul',
        {
            opacity: 0,
        },
        {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: 'center center',
                scrub: scrubValue,
            },
        },
    );

    // 3️⃣ .image-obj-0
    gsap.fromTo(
        '.image-obj-0',
        { y: 0 },
        {
            y: 100,
            scrollTrigger: {
                trigger: section, // 고정 시작 지점 기준
                start: 'top top', // 고정 시작 시점
                end: `bottom center`, // 적당한 범위 조절
                scrub: true,
            },
        },
    );
    // 2️⃣ .image-obj-1
    gsap.fromTo(
        '.image-obj-1',
        { y: 100 },
        {
            y: 0,
            scrollTrigger: {
                trigger: '.parallax-titles', // 고정 시작 지점 기준
                start: 'top top', // 고정 시작 시점
                end: `bottom bottom`, // 적당한 범위 조절
                scrub: true,
            },
        },
    );

    // 3️⃣ .image-obj-2: 마지막 span 이후 등장
    gsap.fromTo(
        '.image-obj-2',
        { y: 0 },
        {
            y: -80,
            scrollTrigger: {
                trigger: '.parallax-titles',
                start: 'bottom center',
                end: 'bottom bottom',
                scrub: true,
                //marker: true,
            },
        },
    );
}

function initParallaxDepthSectionAnimation() {
    const contaier = document.querySelector('.component-section');
    const cont = document.querySelector('.component-content');
    const scrollbar = document.querySelector('.component-scrollbar');
    const indicator = document.querySelector('.component-scrollbar span');
    const cube = document.querySelector('.cube-wrapper');
    const items = document.querySelectorAll('.component-item');
    ScrollTrigger.matchMedia({
        '(min-width: 769px)': function () {
            ScrollTrigger.create({
                trigger: contaier,
                start: 'top top',
                onEnter: () => {
                    if (!contaier?.classList.contains('init')) {
                        cube.classList.add('start');
                        const y = contaier.getBoundingClientRect().top + window.scrollY;
                        document.body.style.position = 'fixed';
                        document.body.style.top = `-${y}px`;
                        document.body.style.left = '0';
                        document.body.style.right = '0';
                        document.body.style.width = '100%';
                        document.body.dataset.scrollY = y;
                        //document.documentElement.style.overflow = 'hidden';
                        //window.scrollTo(0, y);
                        gsap.fromTo(
                            '.cube-item',
                            { opacity: 0, yPercent: -10 },
                            {
                                opacity: 1,
                                yPercent: 0,
                                duration: 0.4,
                                stagger: 0.2,
                                onComplete: () => {
                                    contaier.classList.add('init');
                                    const scrollY = document.body.dataset.scrollY;
                                    document.body.style.position = '';
                                    document.body.style.top = '';
                                    document.body.style.left = '';
                                    document.body.style.right = '';
                                    document.body.style.width = '';
                                    window.scrollTo(0, parseInt(scrollY || '0'));
                                    delete document.body.dataset.scrollY;
                                    //document.documentElement.style.overflow = 'auto';
                                    //void document.documentElement.offsetHeight; // 강제 리플로우
                                    //ScrollTrigger.refresh(); // GSAP 있을 때
                                    setTimeout(() => {
                                        items.forEach((item, index) => {
                                            ScrollTrigger.create({
                                                trigger: item,
                                                start: 'top center',
                                                end: 'bottom center',
                                                onEnter: () => updateIndicator(index),
                                                onEnterBack: () => updateIndicator(index),
                                            });
                                        });
                                    }, 200);
                                },
                            },
                        );
                    } else {
                        items.forEach((item, index) => {
                            ScrollTrigger.create({
                                trigger: item,
                                start: 'top center',
                                end: 'bottom center',
                                onEnter: () => updateIndicator(index),
                                onEnterBack: () => updateIndicator(index),
                            });
                        });
                    }
                },
            });
        },
        '(max-width: 768px)': function () {
            ScrollTrigger.create({
                trigger: contaier,
                start: 'top top',
                onEnter: () => {
                    if (!contaier?.classList.contains('init')) {
                        cube.classList.add('start');
                        gsap.fromTo(
                            '.cube-item',
                            { opacity: 0, yPercent: -10 },
                            {
                                opacity: 1,
                                yPercent: 0,
                                duration: 0.4,
                                stagger: 0.2,
                                onComplete: () => {
                                    contaier.classList.add('init');
                                },
                            },
                        );
                    }
                },
            });
            var pdsSwiper = null;
            var section = document.querySelector('.parallax-depth-section .component-content');
            if (!section || !window.Swiper) return;
            // Swiper 생성
            pdsSwiper = new Swiper('.component-swiper', {
                slidesPerView: 1,
                spaceBetween: 12,
                speed: 500,
                effect: 'slide',
                on: {
                    slideChangeTransitionEnd: function () {
                        updateCubeActiveImage(this.activeIndex);
                    },
                },
            });
            // cube-item 이미지 active 처리 함수
            function updateCubeActiveImage(activeIdx) {
                document.querySelectorAll('.cube-item').forEach((el, i) => {
                    let tar = document.querySelector('.component-swiper .swiper-slide-active');
                    let item = Number(tar.dataset.item);
                    if (item === 0) {
                        el.classList.add('active');
                    } else {
                        el.classList.toggle('active', i === item - 1);
                    }
                });
                const indicatorMo = document.querySelector('.progressbar span');
                const prevClass = [...indicatorMo.classList].find((cls) => cls.startsWith('slide-'));
                if (prevClass) indicatorMo.classList.remove(prevClass);
                indicatorMo.classList.add(`slide-${activeIdx}`);
            }
        },
    });

    function updateIndicator(activeIndex) {
        // slide-0, slide-1 ... 클래스 중 이전 걸 제거
        const prevClass = [...indicator.classList].find((cls) => cls.startsWith('slide-'));
        if (prevClass) indicator.classList.remove(prevClass);
        indicator.classList.add(`slide-${activeIndex}`);
        // .component-item에 active 클래스 부여
        document.querySelectorAll('.component-item').forEach((el, i) => {
            el.classList.toggle('active', i === activeIndex);
        });
        document.querySelectorAll('.cube-item').forEach((el, i) => {
            let tar = document.querySelector('.component-item.active');
            let item = Number(tar.dataset.item);
            if (item === 0) {
                el.classList.add('active');
            } else {
                el.classList.toggle('active', i === item - 1);
            }
        });
    }
}

function initUsecaseSectionAnimation() {
    const section = document.querySelector('.usecase-section');
    if (!section) return;

    const track = document.querySelector('.custom-slider-track');
    const slides = Array.from(track.children);

    // 복제하여 자연스럽게 무한 루프 효과 (복제 시점이 화면 바깥에서 일어나도록 개선)
    const windowWidth = window.innerWidth || 1920; // 기본값 1920
    let trackWidth = track.scrollWidth;
    const slideWidth = slides[0].offsetWidth;
    const minTrackWidth = windowWidth * 2.5;
    let cloneCount = 0;
    while (trackWidth < minTrackWidth) {
        slides.forEach((slide) => {
            const clone = slide.cloneNode(true);
            track.appendChild(clone);
        });
        cloneCount++;
        trackWidth += slideWidth * slides.length;
        if (cloneCount > 10) break; // 무한루프 방지
    }

    // 마우스 호버 시 애니메이션 정지
    const wrapper = document.querySelector('.custom-slider');
    wrapper.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });
    wrapper.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });
}

function initMobileMenu() {
    const usecaseSection = document.querySelector('.usecase-section .usecase-swiper');

    if (!usecaseSection || !window.Swiper) return;

    const usecaseSwiper = new Swiper(usecaseSection, {
        slidesPerView: 'auto',
        spaceBetween: 12,
        // centeredSlides: true,
        speed: 500,
        effect: 'slide',
    });
}

// ===== 페이지 로드 후 애니메이션 실행 =====
window.addEventListener('load', function () {
    if (window.gsap && window.ScrollToPlugin) {
        gsap.registerPlugin(ScrollToPlugin);
    }
    if (window.gsap && window.ScrollTrigger) {
        setTimeout(() => {
            window.ScrollTrigger.refresh();
        }, 100);
    }
    initHeroSectionAnimation();
    initIntroSectionAnimation();
    initParallaxSectionAnimation();
    initParallaxDepthSectionAnimation();
    initMobileMenu();
    initUsecaseSectionAnimation();
});
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});
