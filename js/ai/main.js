// 스크롤 위치 복원 방지
// if ('scrollRestoration' in history) {
//     history.scrollRestoration = 'manual';
// }

// 새로고침/이동 직전 스크롤 위치 초기화
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

function initSubBannerSectionAnimation() {
    const subBannerSection = document.querySelector('.sub-banner-section');
    if (!subBannerSection) return;

    const video = document.querySelector('.sub-banner-video');
    const mobileVideo = document.querySelector('.mobile-sub-banner-video');
    const subBannerList1 = document.querySelector('.sub-banner-item.sub-banner-item1');
    const subBannerList2 = document.querySelector('.sub-banner-item.sub-banner-item2');
    const subBannerList3 = document.querySelector('.sub-banner-item.sub-banner-item3');
    const subBannerList4 = document.querySelector('.sub-banner-item.sub-banner-item4');
    const subBannerList5 = document.querySelector('.sub-banner-item.sub-banner-item5');
    const subBannerList6First = document.querySelector('.sub-banner-item6-first');
    const subBannerList6Second = document.querySelector('.sub-banner-item6-second');

    // 첫 번째 텍스트 처리
    const text1 = subBannerList6First.textContent.trim();
    // 두 번째 텍스트 처리
    const text2 = subBannerList6Second.textContent.trim();
    subBannerList6First.textContent = '';
    subBannerList6Second.textContent = '';

    // "KT는 당신이 가장 자연스럽게" 와 "AI를 경험할 수 있도록" 분리
    const firstPart = text1.substring(0, 16);
    const secondPart = text1.substring(16);
    // "AI 기술의 여정을" 와 "설계하고 있습니다." 분리
    const thirdPart = text2.substring(0, 11);
    const fourthPart = text2.substring(11);

    // 첫 번째 부분 span 생성
    [...firstPart].forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        subBannerList6First.appendChild(span);
    });

    // 모바일 줄바꿈 추가
    const brElement1 = document.createElement('br');
    brElement1.className = 'mo-br';
    subBannerList6First.appendChild(brElement1);

    // 두 번째 부분 span 생성
    [...secondPart].forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        subBannerList6First.appendChild(span);
    });

    // 두 번째 부분 span 생성
    [...thirdPart].forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        subBannerList6Second.appendChild(span);
    });

    // 모바일 줄바꿈 추가
    const brElement2 = document.createElement('br');
    brElement2.className = 'mo-br';
    subBannerList6Second.appendChild(brElement2);

    // 두 번째 부분 span 생성
    [...fourthPart].forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        subBannerList6Second.appendChild(span);
    });

    const spansFirst = subBannerList6First.querySelectorAll('span');
    const spansSecond = subBannerList6Second.querySelectorAll('span');

    // 필수 요소가 없으면 실행하지 않음

    if (
        !video ||
        !mobileVideo ||
        !subBannerList1 ||
        !subBannerList2 ||
        !subBannerList3 ||
        !subBannerList4 ||
        !subBannerList5 ||
        !subBannerList6First ||
        !subBannerList6Second
    ) {
        return;
    }

    // 카운터 애니메이션 함수
    const numberWrap = document.querySelector('.number-wrap');
    const number = document.querySelector('.number-wrap li');
    if (!numberWrap || !number) return;

    // sub-banner-item4
    const nb1_4 = subBannerList4.querySelector('.nb1 .number-wrap');
    const nb2_4 = subBannerList4.querySelector('.nb2 .number-wrap');
    if (!nb1_4 || !nb2_4) return;

    let numberHeight4 = nb1_4.querySelector('li')?.offsetHeight;
    if (!numberHeight4) return;

    let r4 = 0;
    const counterTimeline4 = gsap.timeline();
    const count4 = (i) => -(numberHeight4 * (i + 10 * r4));
    let lastCount4 = [0, 0]; // 마지막 카운트 값 저장
    function countAnimation4(n, m) {
        lastCount4 = [n, m];
        counterTimeline4.clear();
        counterTimeline4
            .add('start')
            .to(nb1_4, { y: count4(n), duration: 1, ease: 'Power2.easeOut' }, 'start')
            .to(nb2_4, { y: count4(m), duration: 1, ease: 'Power2.easeOut' }, 'start+=0.3');
        r4 = r4 === 0 ? 1 : 0;
    }

    // sub-banner-item5
    const nb1_5 = subBannerList5.querySelector('.nb1 .number-wrap');
    const nb2_5 = subBannerList5.querySelector('.nb2 .number-wrap');
    if (!nb1_5 || !nb2_5) return;

    let numberHeight5 = nb1_5.querySelector('li')?.offsetHeight;
    if (!numberHeight5) return;

    let r5 = 0;
    const counterTimeline5 = gsap.timeline();
    const count5 = (i) => -(numberHeight5 * (i + 10 * r5));
    let lastCount5 = [0, 0]; // 마지막 카운트 값 저장
    function countAnimation5(n, m) {
        lastCount5 = [n, m];
        counterTimeline5.clear();
        counterTimeline5
            .add('start')
            .to(nb1_5, { y: count5(n), duration: 1, ease: 'Power2.easeOut' }, 'start')
            .to(nb2_5, { y: count5(m), duration: 1, ease: 'Power2.easeOut' }, 'start+=0.3');
        r5 = r5 === 0 ? 1 : 0;
    }

    // 비디오 재생 관련
    let videoDuration = 0;
    let targetTime = 0;
    let currentTime = 0;

    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    // 부드러운 업데이트 루프
    const smoothUpdate = () => {
        if (!video || !mobileVideo) return;

        // 부드러운 보간 계산 (0.1은 보간 속도, 필요시 0.05~0.2 사이로 조절 가능)
        currentTime = lerp(currentTime, targetTime, 0.05);

        // 너무 자주 설정 시 프레임 드랍 유발 → 조건부 갱신
        if (Math.abs(video.currentTime - currentTime) > 0.01) {
            video.currentTime = currentTime;
            mobileVideo.currentTime = currentTime;
        }

        requestAnimationFrame(smoothUpdate);
    };

    requestAnimationFrame(smoothUpdate);

    // ScrollTrigger 생성 전 GSAP 존재 확인
    if (!window.gsap || !window.ScrollTrigger) return;

    const onVideoReady = (video, callback) => {
        if (video.readyState >= 1) {
            video.play();
            callback();
        } else {
            video.addEventListener('loadedmetadata', () => {
                video.play();
                callback();
            });
        }
    };

    // Animation timeline for desktop
    const createDesktopTimeline = () => {
        onVideoReady(video, () => {
            videoDuration = video.duration;

            const tl = gsap.timeline({
                ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                scrollTrigger: {
                    trigger: subBannerSection,
                    start: 'top top',
                    end: 'bottom bottom',
                    id: 'sub-banner-section',
                    scrub: 1.5,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        targetTime = progress * videoDuration;
                    },
                },
            });

            tl.to(subBannerList1, {
                opacity: 1,
                x: 0,
                duration: 1,
            })
                .to(
                    subBannerList1,
                    {
                        opacity: 0,
                        duration: 1,
                    },
                    '+=0.5',
                )
                .to(subBannerList2, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                })
                .to(subBannerList3, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                })
                .to(
                    [subBannerList2, subBannerList3],
                    {
                        opacity: 0,
                        duration: 0.5,
                        onComplete: () => {
                            countAnimation4(2, 4);
                            countAnimation5(5, 8);
                        },
                    },
                    '+=0.5',
                )
                .to([subBannerList4, subBannerList5], {
                    opacity: 1,
                    duration: 1,
                })
                .to(
                    [subBannerList4, subBannerList5],
                    {
                        opacity: 0,
                        duration: 1,
                    },
                    '+=0.5',
                )
                .to(spansFirst, {
                    opacity: 1,
                    autoAlpha: 1,
                    stagger: 0.1,
                })
                .to(spansSecond, {
                    opacity: 1,
                    autoAlpha: 1,
                    stagger: 0.1,
                });

            return tl;
        });
    };

    // Animation timeline for mobile
    const createMobileTimeline = () => {
        onVideoReady(mobileVideo, () => {
            videoDuration = mobileVideo.duration;

            const tl = gsap.timeline({
                ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                scrollTrigger: {
                    trigger: subBannerSection,
                    start: 'top top',
                    end: 'bottom bottom',
                    id: 'sub-banner-section',
                    scrub: 1.5,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        targetTime = progress * videoDuration;
                    },
                },
            });

            tl.to(subBannerList1, {
                opacity: 1,
                x: 0,
                duration: 1,
            })
                .to(
                    subBannerList1,
                    {
                        opacity: 0,
                        duration: 1,
                    },
                    '+=0.5',
                )
                .to(subBannerList2, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                })
                .to(subBannerList3, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    onComplete: () => {
                        countAnimation4(0, 0);
                        countAnimation5(0, 0);
                    },
                })
                .to(
                    [subBannerList2, subBannerList3],
                    {
                        opacity: 0,
                        duration: 0.5,
                        onComplete: () => {
                            countAnimation4(2, 4);
                            countAnimation5(5, 8);
                        },
                    },
                    '+=0.5',
                )
                .to([subBannerList4, subBannerList5], {
                    opacity: 1,
                    duration: 1,
                })
                .to(
                    [subBannerList4, subBannerList5],
                    {
                        opacity: 0,
                        duration: 1,
                    },
                    '+=0.5',
                )
                .to(spansFirst, {
                    opacity: 1,
                    autoAlpha: 1,
                    stagger: 0.1,
                })
                .to(spansSecond, {
                    opacity: 1,
                    autoAlpha: 1,
                    stagger: 0.1,
                });

            return tl;
        });
    };

    // Initialize animations based on screen size
    let currentTimeline = gsap.matchMedia();

    // Initial settings
    const initialSettings = () => {
        if (window.innerWidth <= 768) {
            gsap.set(subBannerList1, { opacity: 0, x: -20 });
            gsap.set(subBannerList2, { opacity: 0, y: 20 });
            gsap.set(subBannerList3, { opacity: 0, y: 20 });
            gsap.set(subBannerList4, { opacity: 0 });
            gsap.set(subBannerList5, { opacity: 0 });
            gsap.set(spansFirst, { opacity: 0 });
            gsap.set(spansSecond, { opacity: 0 });
        } else {
            gsap.set(subBannerList1, { opacity: 0, x: -100 });
            gsap.set(subBannerList2, { opacity: 0, y: 100 });
            gsap.set(subBannerList3, { opacity: 0, y: 100 });
            gsap.set(subBannerList4, { opacity: 0 });
            gsap.set(subBannerList5, { opacity: 0 });
            gsap.set(spansFirst, { opacity: 0 });
            gsap.set(spansSecond, { opacity: 0 });
        }
    };

    currentTimeline.add('(min-width: 769px)', () => {
        initialSettings();
        createDesktopTimeline();
    });
    currentTimeline.add('(max-width: 768px)', () => {
        initialSettings();
        createMobileTimeline();
    });

    // 리사이즈 시 숫자 위치 갱신
    window.addEventListener('resize', () => {
        // 높이 재계산
        numberHeight4 = nb1_4.querySelector('li')?.offsetHeight;
        numberHeight5 = nb1_5.querySelector('li')?.offsetHeight;
        // 현재 카운트 위치로 다시 이동
        if (typeof lastCount4[0] === 'number' && typeof lastCount4[1] === 'number') {
            counterTimeline4.clear();
            gsap.set(nb1_4, { y: count4(lastCount4[0]) });
            gsap.set(nb2_4, { y: count4(lastCount4[1]) });
        }
        if (typeof lastCount5[0] === 'number' && typeof lastCount5[1] === 'number') {
            counterTimeline5.clear();
            gsap.set(nb1_5, { y: count5(lastCount5[0]) });
            gsap.set(nb2_5, { y: count5(lastCount5[1]) });
        }
    });
}

function initParallaxSectionAnimation() {
    // Element selectors
    const section = document.getElementById('parallax-section');
    const subtitle1 = document.getElementById('subtitle1');
    const subtitle2 = document.getElementById('subtitle2');
    const subtitle3 = document.getElementById('subtitle3');
    const description = document.getElementById('parallax-description');
    const imageObj0 = document.querySelector('.image-obj-0');
    const imageObj1 = document.querySelector('.image-obj-1');
    const imageObj2 = document.querySelector('.image-obj-2');
    const imageObj3 = document.querySelector('.image-obj-3');
    const imageObj4 = document.querySelector('.image-obj-4');
    const imageObj5 = document.querySelector('.image-obj-5');
    const imageObj6 = document.querySelector('.image-obj-6');

    // Guard: Required elements and GSAP/ScrollTrigger
    if (!section || !window.gsap || !window.ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    // Animation config
    const fadeInY = (target, y = 100, delay = '-=0.4', fromTop = true) => [
        target,
        { opacity: 0, y: fromTop ? y : -y },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        },
        delay,
    ];

    gsap.set(
        [
            subtitle3,
            subtitle2,
            subtitle1,
            description,
            imageObj0,
            imageObj1,
            imageObj2,
            imageObj3,
            imageObj4,
            imageObj5,
            imageObj6,
        ],
        { opacity: 0 },
    );

    // Create desktop timeline
    const createDesktopTimeline = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: '+=50%',
            },
        });

        // Sequence: subtitles, images, description
        tl.fromTo(...fadeInY(subtitle3))
            .fromTo(...fadeInY('.image-obj-2'), 100, '<')
            .fromTo(...fadeInY('.image-obj-5', 100, '<', false))
            .fromTo(...fadeInY(subtitle2))
            .fromTo(...fadeInY('.image-obj-1', 100, '<'))
            .fromTo(...fadeInY('.image-obj-4', 100, '<', false))
            .fromTo(...fadeInY(subtitle1))
            .fromTo(...fadeInY('.image-obj-0', 100, '<'))
            .fromTo(...fadeInY('.image-obj-3', 100, '<', false))
            .fromTo(...fadeInY('.image-obj-6', 100, '<'))
            .fromTo(...fadeInY(description, 100));

        return tl;
    };

    // Create mobile timeline
    const createMobileTimeline = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: '-10% top',
                end: '+=30%',
            },
        });

        // Mobile sequence with adjusted timing and positions
        tl.fromTo(...fadeInY(subtitle3))
            .fromTo(...fadeInY('.image-obj-2'), 100, '<')
            .fromTo(...fadeInY('.image-obj-5', 100, '<', false))
            .fromTo(...fadeInY(subtitle2))
            .fromTo(...fadeInY('.image-obj-1', 100, '<'))
            .fromTo(...fadeInY('.image-obj-4', 100, '<', false))
            .fromTo(...fadeInY(subtitle1))
            .fromTo(...fadeInY('.image-obj-0', 100, '<'))
            .fromTo(...fadeInY('.image-obj-3', 100, '<', false))
            .fromTo(...fadeInY('.image-obj-6', 100, '<'))
            .fromTo(...fadeInY(description, 100));

        return tl;
    };

    // Initialize animations based on screen size
    let currentTimeline = gsap.matchMedia();

    const initAnimation = () => {
        currentTimeline.add('(min-width: 769px)', () => {
            createDesktopTimeline();
        });
        currentTimeline.add('(max-width: 768px)', () => {
            createMobileTimeline();
        });
    };

    // Initial setup
    initAnimation();

    // Handle resize
    let resizeTimeout;
    window.addEventListener('resize', ScrollTrigger.refresh);
}

// 큐브 이미지 경로
const imagePaths = [
    {
        src: '/resource/images/ai/k-cube/k-rai.svg',
        active: '/resource/images/ai/k-cube/k-rai-act.svg',
    },
    {
        src: '/resource/images/ai/k-cube/k-spc.svg',
        active: '/resource/images/ai/k-cube/k-spc-act.svg',
    },
    {
        src: '/resource/images/ai/k-cube/k-studio.svg',
        active: '/resource/images/ai/k-cube/k-studio-act.svg',
    },
    {
        src: '/resource/images/ai/k-cube/k-model.svg',
        active: '/resource/images/ai/k-cube/k-model-act.svg',
    },
    {
        src: '/resource/images/ai/k-cube/k-rag.svg',
        active: '/resource/images/ai/k-cube/k-rag-act.svg',
    },
    {
        src: '/resource/images/ai/k-cube/k-agent.svg',
        active: '/resource/images/ai/k-cube/k-agent-act.svg',
    },
];

const menuItems = document.querySelectorAll('.pds-menu-item');
const menuTabItems = document.querySelectorAll('.pds-menu-tab ul li');
const cubeItems = document.querySelectorAll('.pds-cube-item');

let activeIndex = 0;
let savedActiveIndex = 0;
let isScrollLocked = false;

// 메뉴/큐브 활성화 및 이미지 교체
function setActiveMenu(index) {
    menuItems.forEach((li, i) => {
        li.classList.toggle('active', index === i);
    });
    menuTabItems.forEach((li, i) => {
        li.classList.toggle('active', index === i);
    });
    cubeItems.forEach((li, i) => {
        const img = li.querySelector('img');
        if (!img) return;
        if (i === index && imagePaths[i]) img.src = imagePaths[i].active;
        else if (imagePaths[i]) img.src = imagePaths[i].src;
    });
}

function resetAllCubeImages() {
    cubeItems.forEach((li, i) => {
        const img = li.querySelector('img');
        if (img && imagePaths[i]) img.src = imagePaths[i].src;
    });
}

// 탭 메뉴 클릭 이벤트
menuTabItems.forEach((li, i) => {
    li.addEventListener('mouseenter', () => {
        activeIndex = i;
        setActiveMenu(activeIndex);
    });
});

function initParallaxDepthSectionAnimation() {
    const section = document.querySelector('.parallax-depth-section');
    if (!section || !window.gsap || !window.ScrollTrigger) return;

    // 주요 엘리먼트
    const container = section.querySelector('.pds-container');
    const titleGroup = section.querySelector('.pds-title-group');
    const konGroup = section.querySelector('.pds-kon-group');
    const textGroup = section.querySelector('.pds-menu');
    const cubeTitle = section.querySelector('.pds-cube-title');
    const cubeList = section.querySelector('.pds-cube-list');
    const cubeDesc = section.querySelector('.pds-cube-desc');
    const cubeItems = section.querySelectorAll('.pds-cube-item');
    const mobileMenu = section.querySelectorAll('.mobile-pds-menu');

    function lockScroll() {
        if (isScrollLocked) return;
        isScrollLocked = true;
        document.addEventListener('wheel', preventDefault, { passive: false });
        document.addEventListener('touchmove', preventDefault, { passive: false });
        document.addEventListener('keydown', preventScrollKeys, { passive: false });
        document.addEventListener('DOMMouseScroll', preventDefault, { passive: false });
        window.addEventListener('mousewheel', preventDefault, { passive: false });
        window.addEventListener('touchstart', preventDefault, { passive: false });
        window.addEventListener('touchend', preventDefault, { passive: false });
    }

    function unlockScroll() {
        if (!isScrollLocked) return;
        isScrollLocked = false;
        document.removeEventListener('wheel', preventDefault, { passive: false });
        document.removeEventListener('touchmove', preventDefault, { passive: false });
        document.removeEventListener('keydown', preventScrollKeys, { passive: false });
        document.removeEventListener('DOMMouseScroll', preventDefault, { passive: false });
        window.removeEventListener('mousewheel', preventDefault, { passive: false });
        window.removeEventListener('touchstart', preventDefault, { passive: false });
        window.removeEventListener('touchend', preventDefault, { passive: false });
    }

    function preventDefault(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function preventScrollKeys(e) {
        const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
        if (keys.includes(e.keyCode)) {
            e.preventDefault();
            return false;
        }
    }

    // GSAP 애니메이션 초기 세팅
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        id: 'parallax-depth-section',
        onLeave: () => {
            gsap.set(textGroup, { opacity: 0, zIndex: 3 });
        },
    });

    gsap.set(titleGroup, { opacity: 0, y: 30 });
    gsap.set(konGroup, { opacity: 0, y: 30 });
    gsap.set(textGroup, { opacity: 0, zIndex: 3 });
    gsap.set(cubeItems[1], { opacity: 0 });
    // 큐브 초기 위치
    gsap.set(cubeItems[2], { yPercent: -400, xPercent: 50 });
    gsap.set(cubeItems[3], { yPercent: -400, xPercent: 22 });
    gsap.set(cubeItems[4], { yPercent: -400, xPercent: 50 });
    gsap.set(cubeItems[5], { yPercent: -400, xPercent: 78 });
    gsap.set(cubeItems[0], { yPercent: 400, xPercent: 50 });
    gsap.set(cubeItems[6], { opacity: 0 });
    gsap.set(cubeTitle, { opacity: 0 });
    gsap.set(cubeDesc, { opacity: 0 });
    gsap.set(mobileMenu, { opacity: 0 });

    const createDesktopTimeline = () => {
        // 타이틀/설명 등장
        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: '-10% top',
                end: '+=680',
                toggleActions: 'play reset play reset',
                onEnter: lockScroll,
                onLeaveBack: unlockScroll,
                onEnterBack: () => {
                    gsap.set(textGroup, { opacity: 0, zIndex: 3 });
                },
            },
            onComplete: unlockScroll,
        });

        titleTl.to(titleGroup, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        });

        // 큐브 이동 애니메이션
        const cubeTl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: '+=600',
                end: '+=600',
                toggleActions: 'play none none reset',
                id: 'parallax-depth-cube',
                onEnter: lockScroll,
                onLeaveBack: () => {
                    setActiveMenu(-1);
                    unlockScroll();
                },
            },
            onComplete: unlockScroll,
        });

        cubeTl
            .to(cubeItems[1], {
                opacity: 1,
                duration: 0.3,
                ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            })
            .to(
                cubeItems[2],
                {
                    yPercent: 30,
                    xPercent: 50,
                    duration: 0.8,
                    ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                },
                '-=0.3',
            )
            .to(
                cubeItems[3],
                {
                    yPercent: 70,
                    xPercent: 22,
                    duration: 0.8,
                    ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                },
                '-=0.6',
            )
            .to(
                cubeItems[4],
                {
                    yPercent: 83,
                    xPercent: 50,
                    duration: 0.8,
                    ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                },
                '-=0.6',
            )
            .to(
                cubeItems[5],
                {
                    yPercent: 96,
                    xPercent: 78,
                    duration: 0.8,
                    ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                },
                '-=0.6',
            )
            .to(
                cubeItems[0],
                {
                    yPercent: 75,
                    xPercent: 50,
                    duration: 0.8,
                    ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                    onComplete: () => {
                        setTimeout(() => {
                            setActiveMenu(savedActiveIndex);
                        }, 500);
                    },
                },
                '-=0.6',
            );

        const textTl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: '+=600',
                end: '+=600',
                id: 'parallax-depth-text',
                toggleActions: 'play reset play reset',
                onEnterBack: () => {
                    setActiveMenu(savedActiveIndex);
                },
            },
        });

        textTl.to(
            textGroup,
            {
                opacity: 1,
                duration: 0.8,
                ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                zIndex: 4,
            },
            '+=2',
        );

        // 마지막 큐브/타이틀/설명 등장
        const cubeTl2 = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: '+=1200',
                end: '+=600',
                id: 'parallax-depth-cube2',
                toggleActions: 'play none none reset',
                onEnter: () => {
                    savedActiveIndex = activeIndex;
                    resetAllCubeImages();
                    setActiveMenu(7);
                    lockScroll();
                },
                onLeaveBack: () => {
                    setActiveMenu(savedActiveIndex);
                    unlockScroll();
                },
            },
            onComplete: unlockScroll,
        });

        cubeTl2
            .to(textGroup, { opacity: 0, zIndex: 3 })
            .to(cubeItems[6], {
                opacity: 1,
                duration: 0.5,
                ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            })
            .to(cubeTitle, {
                opacity: 1,
                duration: 0.5,
                ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            })
            .to(cubeDesc, {
                opacity: 1,
                duration: 0.5,
                ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            });

        return [titleTl, cubeTl, textTl, cubeTl2];
    };

    const createMobileTimeline = () => {
        // 타이틀/설명 등장
        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: '-10% top',
                end: '+=680',
                toggleActions: 'play reset play reset',
                onEnter: lockScroll,
                onLeaveBack: unlockScroll,
                onEnterBack: () => {
                    gsap.set(textGroup, { opacity: 0, zIndex: 3 });
                },
            },
            onComplete: unlockScroll,
        });

        titleTl
            .to(titleGroup, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            })
            .to(
                konGroup,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                },
                '-=0.6',
            );

        // 큐브 이동 애니메이션
        const cubeTl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: '+=600',
                end: '+=600',
                toggleActions: 'play none none reset',
                id: 'parallax-depth-cube',
                onEnter: lockScroll,
                onLeaveBack: () => {
                    setActiveMenu(-1);
                    unlockScroll();
                },
            },
            onComplete: unlockScroll,
        });

        cubeTl
            .to(cubeItems[1], {
                opacity: 1,
                duration: 0.3,
                ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            })
            .to(
                cubeItems[2],
                {
                    yPercent: 10,
                    xPercent: 50,
                    duration: 0.8,
                    ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                },
                '-=0.3',
            )
            .to(
                cubeItems[3],
                {
                    yPercent: 36,
                    xPercent: 22,
                    duration: 0.8,
                    ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                },
                '-=0.6',
            )
            .to(
                cubeItems[4],
                {
                    yPercent: 49,
                    xPercent: 50,
                    duration: 0.8,
                    ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                },
                '-=0.6',
            )
            .to(
                cubeItems[5],
                {
                    yPercent: 62,
                    xPercent: 78,
                    duration: 0.8,
                    ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                },
                '-=0.6',
            )
            .to(
                cubeItems[0],
                {
                    yPercent: 50,
                    xPercent: 50,
                    duration: 0.8,
                    ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                },
                '-=0.6',
            );

        const textTl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: '+=600',
                end: '+=600',
                id: 'parallax-depth-text',
                toggleActions: 'play reset play reset',
            },
        });

        textTl.to(
            mobileMenu,
            {
                opacity: 1,
                duration: 0.8,
                ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                zIndex: 4,
                onStart: () => {
                    setActiveMenu(0);
                },
            },
            '+=2',
        );

        // 마지막 큐브/타이틀/설명 등장
        const cubeTl2 = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: '+=1200',
                end: '+=600',
                id: 'parallax-depth-cube2',
                toggleActions: 'play none none reset',
                onEnter: () => {
                    savedActiveIndex = activeIndex;
                    resetAllCubeImages();
                    setActiveMenu(7);
                    lockScroll();
                },
                onLeaveBack: () => {
                    setActiveMenu(savedActiveIndex);
                    unlockScroll();
                },
            },
            onComplete: unlockScroll,
        });

        cubeTl2
            .to(cubeList, {
                yPercent: 40,
                duration: 0.5,
                ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            })
            .to(cubeItems[6], {
                opacity: 1,
                duration: 0.5,
                ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            })
            .to(cubeTitle, {
                opacity: 1,
                duration: 0.5,
                ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            })
            .to(cubeDesc, {
                opacity: 1,
                duration: 0.5,
                ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            });

        return [titleTl, cubeTl, textTl, cubeTl2];
    };

    // Initialize animations based on screen size
    let currentTimeline = gsap.matchMedia();

    const initAnimation = () => {
        // currentTimeline.clear();

        currentTimeline.add('(min-width: 769px)', () => {
            createDesktopTimeline();
        });
        currentTimeline.add('(max-width: 768px)', () => {
            createMobileTimeline();
        });
    };

    // Initial setup
    initAnimation();

    window.addEventListener('resize', () => {
        ScrollTrigger.update();
    });

    // 초기화
    setActiveMenu(-1);
}

function initMobileMenu() {
    const pdsSection = document.querySelector('.mobile-pds-menu');
    const ecoSection = document.querySelector('.eco-partners-mobile');

    if (!pdsSection || !ecoSection || !window.Swiper) return;

    const pdsMenuSwiper = new Swiper('.mobile-pds-menu .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 14,
        centeredSlides: true,
        speed: 500,
        effect: 'slide',
        on: {
            slideChange: function () {
                const activeIndex = this.activeIndex;
                setActiveMenu(activeIndex);
            },
        },
    });

    const ecoSwiper = new Swiper('.eco-partners-mobile .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 14,
        // centeredSlides: true,
        speed: 500,
        effect: 'slide',
    });
}

// ===== 페이지 로드 후 애니메이션 실행 =====
window.addEventListener('load', function () {
    // setTimeout(function () {
    //     window.scrollTo(0, 0);
    // }, 10);
    if (window.gsap && window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
    }
    initHeroSectionAnimation();
    initSubBannerSectionAnimation();
    initParallaxSectionAnimation();
    initParallaxDepthSectionAnimation();
    initMobileMenu();
});
