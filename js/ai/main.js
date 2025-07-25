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
}

function countUpDigitsReverse(selector, options = {}) {
    const el = document.querySelector(selector);
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
}

function initIntroSectionAnimation() {
    const section = document.querySelector('.sub-banner-section');
    if (!section || !window.gsap) return;

    const title1 = section.querySelector('ul li h2 span:first-child');
    const title2 = section.querySelector('ul li h2 span:last-child');
    const desc1 = section.querySelector('ul li p:first-child');
    const desc2 = section.querySelector('ul li p:last-child');
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
                        opacity: 1,
                        yPercent: 0,
                        duration: 0.4,
                    },
                )
                .fromTo(
                    desc2,
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
                    desc2,
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
    const section = document.querySelector('.parallax-section');
    if (!section || !window.gsap || !window.ScrollTrigger) return;

    // 이미지 요소들 선택
    const images = section.querySelectorAll('.parallax-images img');
    const container = section.querySelector('.parallax-container');

    ScrollTrigger.matchMedia({
        '(max-width: 768px)': function () {
            gsap.set(images[3], { scaleX: -1 });
        },
    });

    // 컨테이너 고정 애니메이션
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false,
        },
    });

    // iOS 크롬에서만 부드러운 scrub 값 적용
    const isIOSChrome = /CriOS/.test(navigator.userAgent) && /iPhone|iPad|iPod/.test(navigator.userAgent);
    const scrubValue = isIOSChrome ? 0.3 : 1; // iOS 크롬에서만 부드럽게

    gsap.fromTo(
        '.parallax-titles, .parallax-description',
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

    // 각 이미지별 패럴렉스 애니메이션
    images.forEach((img, index) => {
        // 이미지별로 다른 속도 적용
        const speeds = [1, 1, 1, 1, 1];
        const speed = speeds[index] || 1;

        gsap.fromTo(
            img,
            {
                y: '0', // 시작 위치 (화면 하단)
            },
            {
                y: `-${200 * speed}vh`, // 속도에 따른 최종 위치 조정
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: scrubValue, // iOS 크롬에서 부드러운 scrub
                    toggleActions: 'play none none reverse',
                },
            },
        );
    });

    gsap.fromTo(
        images[1],
        {
            opacity: 1,
            xPercent: 0,
        },
        {
            opacity: 1,
            xPercent: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'top center',
                scrub: scrubValue,
            },
        },
    );

    gsap.fromTo(
        images[4],
        {
            opacity: 1,
            xPercent: 0,
        },
        {
            opacity: 1,
            xPercent: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: 'top top',
                scrub: scrubValue,
            },
        },
    );
}

// 큐브 이미지 경로
const imagePaths = [
    {
        src: '/resource/images/ai/k-cube/k-model.png',
        active: '/resource/images/ai/k-cube/k-model-act.png',
    },
    {
        src: '/resource/images/ai/k-cube/k-rag.png',
        active: '/resource/images/ai/k-cube/k-rag-act.png',
    },
    {
        src: '/resource/images/ai/k-cube/k-agent.png',
        active: '/resource/images/ai/k-cube/k-agent-act.png',
    },
    {
        src: '/resource/images/ai/k-cube/k-studio.png',
        active: '/resource/images/ai/k-cube/k-studio-act.png',
    },
    {
        src: '/resource/images/ai/k-cube/k-rai.png',
        active: '/resource/images/ai/k-cube/k-rai-act.png',
    },
    {
        src: '/resource/images/ai/k-cube/k-infra.png',
        active: '/resource/images/ai/k-cube/k-infra-act.png',
    },
];


function initParallaxDepthSectionAnimation() {
    const section = document.querySelector('.parallax-depth-section .component-content');
    if (!section || !window.gsap || !window.ScrollTrigger) return;

    const cubeItems = section.querySelectorAll('.cube-item');
    if (!cubeItems.length) return;

    let wheelNavInstance; // 휠 네비게이션 인스턴스

    ScrollTrigger.matchMedia({
        '(min-width: 769px)': function () {
            gsap.set('.cube-last-text', { zIndex: -1 });
            gsap.set('.cube-wrapper', { scale: 0.7 });
            let tlComplete = false;
            const tl = gsap.timeline({
                ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
                scrollTrigger: {
                    trigger: section,
                    start: 'top center',
                    end: 'bottom center',
                    id: 'start-tl',
                },
            });

            tl.to('.cube-wrapper', {left: '50%', xPercent: -50, yPercent: -50, duration: 0.3 })
                .fromTo(
                    '.cube-item',
                    { opacity: 0, yPercent: -10 },
                    {
                        opacity: 1,
                        yPercent: 0,
                        duration: 0.4,
                        stagger: 0.2,
                        onStart: () => {
                            gsap.set('.cube-wrapper', { left: '50%', xPercent: -50, yPercent: -50 });
                        },
                    },
                )
                .fromTo('.cube-wrapper', { left: '50%', xPercent: -50, yPercent: -50 }, { left: '42%', xPercent: 0, yPercent: -50, duration: 0.3 })
                .fromTo(
                    '.list-wrap ul',
                    { opacity: 0, xPercent: 52, yPercent: -12 },
                    {
                        opacity: 1,
                        xPercent: 0,
                        yPercent: 0,
                        duration: 0.3,
                        onComplete: () => {
                            tlComplete = true;
                        },
                    },
                    '<',
                )
                .fromTo(
                    '.list-wrap ul li:first-child',
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 0.3,
                        onStart: () => {
                            const img = document.querySelector('.cube-wrapper .cube-item.cube-item-6 img');
                            if (img) {
                                img.src = imagePaths[0].active;
                            }
                        },
                    },
                    '<',
                );

            ScrollTrigger.create({
                trigger: '.component-content',
                start: 'top top',
                end: '+=200%', // 충분한 스크롤 공간 확보
                pin: true,
                pinSpacing: true,
                id: 'depth-pin',
                onEnter: () => {
                    document.documentElement.style.overflow = 'hidden';
                    document.querySelector('.component-inner').style.backgroundColor = 'black';
                    const checkComplete = () => {
                        if (tlComplete) {
                            if (wheelNavInstance) {
                                wheelNavInstance.destroy();
                                wheelNavInstance = null;
                            }
                            wheelNavInstance = new WheelNavigation(0);
                        } else {
                            requestAnimationFrame(checkComplete);
                        }
                    };
                    requestAnimationFrame(checkComplete);
                },
                onLeave: () => {
                    document.documentElement.style.overflow = 'auto';
                    document.querySelector('.component-inner').style.backgroundColor = 'transparent';
                    setTimeout(() => {
                        if (wheelNavInstance) {
                            wheelNavInstance.destroy();
                            wheelNavInstance = null;
                        }
                    }, 400);
                    tl.progress(1);

                    const imgs = document.querySelectorAll('.cube-wrapper .cube-item img');
                    const listItems = document.querySelectorAll('.list-wrap ul li');
                    if (imgs && listItems) {
                        setTimeout(() => {
                            imgs.forEach((img) => {
                                if (img.src.includes('k-model')) {
                                    img.src = imagePaths[0].src;
                                } else if (img.src.includes('k-rag')) {
                                    img.src = imagePaths[1].src;
                                } else if (img.src.includes('k-agent')) {
                                    img.src = imagePaths[2].src;
                                } else if (img.src.includes('k-studio')) {
                                    img.src = imagePaths[3].src;
                                } else if (img.src.includes('k-rai')) {
                                    img.src = imagePaths[4].src;
                                } else if (img.src.includes('k-infra')) {
                                    img.src = imagePaths[5].src;
                                }
                            });

                            listItems.forEach((item) => {
                                if (item.classList.contains('active')) {
                                    item.classList.remove('active');
                                }

                                gsap.set(item, { opacity: 0 });
                            });
                        }, 400);
                    }
                },
                onEnterBack: () => {
                    document.documentElement.style.overflow = 'hidden';
                    document.querySelector('.component-inner').style.backgroundColor = 'black';
                    const lastIndex = document.querySelectorAll('.parallax-depth-section .list-wrap ul li').length - 1;
                    if (wheelNavInstance) {
                        wheelNavInstance.destroy();
                        wheelNavInstance = null;
                    }
                    wheelNavInstance = new WheelNavigation(lastIndex);
                },
                onLeaveBack: () => {
                    document.documentElement.style.overflow = 'auto';
                    document.querySelector('.component-inner').style.backgroundColor = 'transparent';
                    if (wheelNavInstance) {
                        wheelNavInstance.destroy();
                        wheelNavInstance = null;
                    }
                    const imgs = document.querySelectorAll('.cube-wrapper .cube-item img');
                    const listItems = document.querySelectorAll('.list-wrap ul li');
                    if (imgs && listItems) {
                        imgs.forEach((img) => {
                            if (img.src.includes('k-model')) {
                                img.src = imagePaths[0].active;
                            } else if (img.src.includes('k-rag')) {
                                img.src = imagePaths[1].src;
                            } else if (img.src.includes('k-agent')) {
                                img.src = imagePaths[2].src;
                            } else if (img.src.includes('k-studio')) {
                                img.src = imagePaths[3].src;
                            } else if (img.src.includes('k-rai')) {
                                img.src = imagePaths[4].src;
                            } else if (img.src.includes('k-infra')) {
                                img.src = imagePaths[5].src;
                            }
                        });

                        listItems.forEach((item) => {
                            if (item.classList.contains('active')) {
                                item.classList.remove('active');
                            }
                            listItems[0].classList.add('active');

                            gsap.set(item, { opacity: 0 });
                            gsap.set(listItems[0], {
                                opacity: 1,
                            });
                        });
                    }
                },
            });

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.component-content',
                    start: '+=1',
                    end: '+=1300',
                    id: 'depth-pin2',
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    onLeave: () => {
                        if (wheelNavInstance) {
                            wheelNavInstance.destroy();
                            wheelNavInstance = null;
                        }
                    },
                },
            });

            tl2.fromTo('.list-wrap ul', { opacity: 1 }, { opacity: 0 })
                .fromTo(
                    '.cube-wrapper',
                    { left: '42%', xPercent: 0, yPercent: -50 },
                    {
                        left: `50%`,
                        xPercent: -50,
                        yPercent: -50,
                        duration: 0.5,
                        ease: 'power2.inOut',
                    },
                    '<',
                )
                .fromTo('.component-content', { scale: 1 }, { scale: 0.8, ease: 'power2.inOut' })
                .fromTo(
                    '.cube-last-text',
                    { opacity: 0, zIndex: -1 },
                    {
                        opacity: 1,
                        zIndex: 1,
                        duration: 0.3,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            // 애니메이션 완료 후 AOS 재설정
                            if (window.AOS) {
                                setTimeout(() => {
                                    AOS.refreshHard();
                                }, 200);
                            }
                        },
                    },
                    '-=0.2',
                );
        },
        '(max-width: 768px)': function () {
            document.documentElement.style.overflow = 'auto';
            document.querySelector('.component-inner').style.backgroundColor = 'transparent';
            if (wheelNavInstance) {
                wheelNavInstance.destroy();
                wheelNavInstance = null;
            }

            // Swiper 인스턴스 생성 (모바일 메뉴용)
            var pdsSwiper = null;
            var section = document.querySelector('.parallax-depth-section .component-content');
            if (!section || !window.Swiper) return;

            var cubeItems = document.querySelectorAll('.cube-wrapper .cube-item');
            var cubeImgs = Array.from(cubeItems)
                .map(function (item) {
                    return item.querySelector('img');
                })
                .reverse();

            // Swiper 생성
            pdsSwiper = new Swiper('.mobile-pds-menu .swiper-container', {
                slidesPerView: 1.2,
                spaceBetween: 16,
                speed: 500,
                effect: 'slide',
                on: {
                    slideChange: function () {
                        updateCubeActiveImage(this.activeIndex);
                    },
                },
            });

            // cube-item 이미지 active 처리 함수
            function updateCubeActiveImage(activeIdx) {
                cubeImgs.forEach(function (img, idx) {
                    if (imagePaths[idx]) {
                        img.src = idx === activeIdx ? imagePaths[idx].active : imagePaths[idx].src;
                    }
                });
            }

            // parallax-depth-section 진입 시 첫번째 활성화
            var st = ScrollTrigger.create({
                trigger: section,
                start: 'top center',
                end: 'bottom center',
                onEnter: function () {
                    if (pdsSwiper) {
                        pdsSwiper.slideTo(0, 0);
                        updateCubeActiveImage(0);
                    }
                },
                onEnterBack: function () {
                    if (pdsSwiper) {
                        pdsSwiper.slideTo(0, 0);
                        updateCubeActiveImage(0);
                    }
                },
                onLeave: function () {
                    // 섹션 이탈 시 모든 cube-item 이미지를 기본으로
                    cubeImgs.forEach(function (img, idx) {
                        if (imagePaths[idx]) img.src = imagePaths[idx].src;
                    });
                },
                onLeaveBack: function () {
                    cubeImgs.forEach(function (img, idx) {
                        if (imagePaths[idx]) img.src = imagePaths[idx].src;
                    });
                },
            });
        },
    });

    let lastScrollY = 0;
    let isResizing = false;
    let resizeHandler;
    ScrollTrigger.refresh();

    // 모바일 환경에서는 리사이즈 이벤트 처리하지 않음
    if (window.innerWidth < 768) {
        return;
    }

    // 리사이즈 핸들러 함수 정의
    resizeHandler = () => {
        lastScrollY = window.scrollY;
        isResizing = true;

        ScrollTrigger.refresh();

        // 태블릿 환경에서만 스크롤 위치 복원
        if (window.innerWidth > 768 && window.innerWidth < 1366) {
            setTimeout(() => {
                if (isResizing) {
                    window.scrollTo(0, lastScrollY);
                    isResizing = false;
                }
            }, 10); // 딜레이 시간 증가

            const pinSpacer = document.querySelector('.pin-spacer.pin-spacer-depth-pin');
            if (pinSpacer) {
                const top = pinSpacer.getBoundingClientRect().top;
                const bottom = pinSpacer.getBoundingClientRect().bottom;
                if (top > 0 || bottom < 1000) {
                    document.documentElement.style.overflow = 'auto';
                    document.querySelector('.component-inner').style.backgroundColor = 'transparent';
                    if (wheelNavInstance) {
                        wheelNavInstance.destroy();
                        wheelNavInstance = null;
                    }
                }
            }
        } else {
            isResizing = false;
        }
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
        window.removeEventListener('resize', resizeHandler);
    };
}

class WheelNavigation {
    constructor(startIndex = 0) {
        this.listItems = document.querySelectorAll('.list-wrap ul li');
        this.cubeItems = document.querySelectorAll('.cube-wrapper .cube-item');
        this.cubeItems = Array.from(this.cubeItems).reverse();
        if (!this.listItems.length || !this.cubeItems.length || this.listItems.length !== this.cubeItems.length) {
            console.warn('WheelNavigation: Mismatch between list and cube items.');
            return;
        }

        this.currentIndex = startIndex;
        this.isAnimating = false;
        this.boundHandleWheel = this.handleWheel.bind(this);
        this.boundHandleTouchStart = this.handleTouchStart.bind(this);
        this.boundHandleTouchMove = this.handleTouchMove.bind(this);
        this.boundHandleTouchEnd = this.handleTouchEnd.bind(this);
        this.lastScrollTime = 0;
        this.scrollCooldown = 100; // 100ms 쿨다운

        // 터치 이벤트 관련 변수
        this.touchStartY = 0;
        this.touchCurrentY = 0;
        this.touchStartTime = 0;
        this.isTouching = false;
        this.touchThreshold = 50; // 최소 터치 이동 거리
        this.touchTimeThreshold = 300; // 최대 터치 시간 (ms)

        // 헤더 wheel 방향 클래스 관련
        this.header = document.getElementById('main-header');
        this.lastWheelDirection = null;

        this.init();
    }

    init() {
        // Deactivate all items first
        this.listItems.forEach((item) => {
            item.classList.remove('active');
            gsap.set(item, { opacity: 0, zIndex: -1 });
        });
        this.cubeItems.forEach((item, index) => {
            const img = item.querySelector('img');
            if (img && imagePaths[index]) {
                img.src = imagePaths[index].src;
            }
        });

        if (this.currentIndex === -1) {
            return;
        }
        // Activate the item at currentIndex
        const initialListItem = this.listItems[this.currentIndex];
        const initialCubeImg = this.cubeItems[this.currentIndex].querySelector('img');

        initialListItem.classList.add('active');
        gsap.set(initialListItem, { opacity: 1, zIndex: 1 });

        if (initialCubeImg && imagePaths[this.currentIndex]) {
            initialCubeImg.src = imagePaths[this.currentIndex].active;
        }

        // 마우스 휠 이벤트 (데스크톱)
        window.addEventListener('wheel', this.boundHandleWheel, { passive: false });

        // 터치 이벤트 (모바일/테블릿)
        window.addEventListener('touchstart', this.boundHandleTouchStart, { passive: false });
        window.addEventListener('touchmove', this.boundHandleTouchMove, { passive: false });
        window.addEventListener('touchend', this.boundHandleTouchEnd, { passive: false });
    }

    destroy() {
        window.removeEventListener('wheel', this.boundHandleWheel, { passive: false });
        window.removeEventListener('touchstart', this.boundHandleTouchStart, { passive: false });
        window.removeEventListener('touchmove', this.boundHandleTouchMove, { passive: false });
        window.removeEventListener('touchend', this.boundHandleTouchEnd, { passive: false });
    }

    handleTouchStart(e) {
        if (this.isAnimating) {
            e.preventDefault();
            return;
        }

        this.touchStartY = e.touches[0].clientY;
        this.touchCurrentY = this.touchStartY;
        this.touchStartTime = Date.now();
        this.isTouching = true;
    }

    handleTouchMove(e) {
        if (!this.isTouching || this.isAnimating) {
            return;
        }

        this.touchCurrentY = e.touches[0].clientY;

        // 터치 이동 중 기본 스크롤 방지
        const st = ScrollTrigger.getById('depth-pin');
        const scrollY = window.scrollY || window.pageYOffset;
        const isInPinRange = st && scrollY >= st.start && scrollY <= st.end;

        if (isInPinRange) {
            e.preventDefault();
        }
    }

    handleTouchEnd(e) {
        if (!this.isTouching || this.isAnimating) {
            return;
        }

        const currentTime = Date.now();
        const touchDuration = currentTime - this.touchStartTime;
        const touchDistance = this.touchStartY - this.touchCurrentY;

        this.isTouching = false;

        // 쿨다운 체크
        if (currentTime - this.lastScrollTime < this.scrollCooldown) {
            e.preventDefault();
            return;
        }

        // 터치 거리와 시간 체크
        if (Math.abs(touchDistance) < this.touchThreshold || touchDuration > this.touchTimeThreshold) {
            return;
        }

        this.lastScrollTime = currentTime;
        const direction = touchDistance > 0 ? 1 : -1; // 위로 스와이프시 1, 아래로 스와이프시 -1

        // ===== Header show/hide class toggle (touch) =====
        if (this.header) {
            if (direction > 0) {
                // Swipe up (show header)
                if (this.lastWheelDirection !== 'up') {
                    this.header.classList.add('hide');
                    this.header.classList.remove('show');
                    this.lastWheelDirection = 'up';
                }
            } else if (direction < 0) {
                // Swipe down (hide header)
                if (this.lastWheelDirection !== 'down') {
                    this.header.classList.add('show');
                    this.header.classList.remove('hide');
                    this.lastWheelDirection = 'down';
                }
            }
        }

        this.handleNavigation(direction, e);
    }

    handleWheel(e) {
        const currentTime = Date.now();
        // 쿨다운 체크
        if (currentTime - this.lastScrollTime < this.scrollCooldown) {
            e.preventDefault();
            return;
        }
        if (this.isAnimating) {
            e.preventDefault();
            return;
        }

        // ===== Header wheel direction class toggle (WheelNavigation 내부) =====
        if (this.header) {
            if (e.deltaY > 0) {
                // Scrolling down
                if (this.lastWheelDirection !== 'down') {
                    this.header.classList.add('hide');
                    this.header.classList.remove('show');
                    this.lastWheelDirection = 'down';
                }
            } else if (e.deltaY < 0) {
                // Scrolling up
                if (this.lastWheelDirection !== 'up') {
                    this.header.classList.add('show');
                    this.header.classList.remove('hide');
                    this.lastWheelDirection = 'up';
                }
            }
        }

        this.lastScrollTime = currentTime;
        const direction = e.deltaY > 0 ? 1 : -1;

        this.handleNavigation(direction, e);
    }

    handleNavigation(direction, e) {
        const st = ScrollTrigger.getById('depth-pin');
        const scrollY = window.scrollY || window.pageYOffset;
        const isInPinRange = st && scrollY >= st.start && scrollY <= st.end;

        const isExitingTop = direction === -1 && this.currentIndex === 0;
        const isExitingBottom = direction === 1 && this.currentIndex === this.listItems.length - 1;

        if ((isExitingTop || isExitingBottom) && isInPinRange) {
            // pin 구간 내부일 때만 강제 이동
            e.preventDefault();
            this.isAnimating = true;
            if (window.gsap && window.ScrollToPlugin) {
                let targetY = isExitingTop ? st.start - 1 : st.end + 1;
                const scrollDistance = Math.abs(targetY - scrollY);

                gsap.to(window, {
                    scrollTo: targetY,
                    duration: 0.1,
                    onComplete: () => {
                        setTimeout(() => {
                            this.isAnimating = false;
                        }, 200);
                    },
                });
            } else {
                setTimeout(() => {
                    this.isAnimating = false;
                }, 200);
            }
            return;
        }

        // 이하 원본 유지
        e.preventDefault();
        const nextIndex = this.currentIndex + direction;
        if (nextIndex >= 0 && nextIndex < this.listItems.length) {
            setTimeout(() => {
                this.animateTo(nextIndex);
            }, 50);
        }
    }

    animateTo(newIndex) {
        if (this.isAnimating || newIndex === this.currentIndex) return;
        this.isAnimating = true;

        const oldIndex = this.currentIndex;
        this.currentIndex = newIndex;

        const oldCubeImg = this.cubeItems[oldIndex].querySelector('img');
        const newCubeImg = this.cubeItems[newIndex].querySelector('img');

        if (oldCubeImg && imagePaths[oldIndex]) {
            oldCubeImg.src = imagePaths[oldIndex].src;
        }
        if (newCubeImg && imagePaths[newIndex]) {
            newCubeImg.src = imagePaths[newIndex].active;
        }

        // --- List Items: Animate opacity ---
        const tl = gsap.timeline({
            onComplete: () => {
                this.isAnimating = false;
            },
        });

        this.listItems[oldIndex].classList.remove('active');
        tl.to(this.listItems[oldIndex], {
            opacity: 0,
            duration: 0.3, // 애니메이션 시간 단축
            ease: 'power2.inOut',
            zIndex: -1,
        });

        this.listItems[newIndex].classList.add('active');
        tl.to(
            this.listItems[newIndex],
            {
                opacity: 1,
                duration: 0.3, // 애니메이션 시간 단축
                ease: 'power2.inOut',
                zIndex: 1,
            },
            '>-0.1',
        );
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
        spaceBetween: 16,
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
    // (전역 wheel 이벤트는 WheelNavigation 내부로 이동)
});

// Ensure GSAP ScrollToPlugin is registered
if (window.gsap && window.ScrollToPlugin) {
    gsap.registerPlugin(ScrollToPlugin);
}
