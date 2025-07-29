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

    // Timeline 구성
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            //pin: true,
            marker: true,
        },
    });

    // 텍스트 1 등장
    tl.fromTo(text1, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }).to(text1, { opacity: 0, y: -100, duration: 1 });

    // 텍스트 2 등장
    tl.fromTo(text2, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }).to(text2, { opacity: 0, y: -100, duration: 1 });

    // 텍스트 3 등장
    tl.fromTo(text3, { opacity: 0, y: 100, scale: 1 }, { opacity: 1, y: 0, scale: 1, duration: 1 });

    // 텍스트 3 사라짐 + 확대
    tl.to(text3, { opacity: 1, fontSize: '500px', duration: 1 });
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
    //const desc2 = section.querySelector('ul li p:last-child');
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
    // iOS 크롬에서만 부드러운 scrub 값 적용
    const isIOSChrome = /CriOS/.test(navigator.userAgent) && /iPhone|iPad|iPod/.test(navigator.userAgent);
    const scrubValue = isIOSChrome ? 0.3 : 1; // iOS 크롬에서만 부드럽게
    const section = document.querySelector('.parallax-section');
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
        trigger: section,
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
        '.parallax-titles',
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
    /*
    // 2. 각 span에 개별 색상 변화 애니메이션 설정
    spans.forEach((span, i) => {
        gsap.to(span, {
            color: '#0B0B0B',
            scrollTrigger: {
                trigger: section,
                start: `top+=${i * space} top`,
                end: `top+=${(i + 1) * space} top`,
                scrub: true,
                markers: false,
            },
        });
    });
    */

    // 첫 번째 객체 pin (.image-obj-0)
    /*
    gsap.fromTo(
        '.image-obj-0',
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: '.parallax-section',
                start: 'top center', // 섹션 진입 시
                end: `+=${spans.length * 100}`, // span 모션 길이만큼 pin
                pin: true,
                scrub: true,
                onLeave: () => {
                    // pin 해제 시 자연스럽게 아웃
                    gsap.to('.image-obj-0', { opacity: 0, y: -30, duration: 0.5 });
                },
            },
        },
    );
    */
    // 3️⃣ .image-obj-2: 마지막 span 이후 등장
    gsap.fromTo(
        '.image-obj-0',
        { y: 0 },
        {
            y: -100,
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'top+=100 center',
                scrub: true,
                //markers: true,
            },
        },
    );
    // 2️⃣ .image-obj-1: span[3] 진입 후부터 스크롤에 따라 등장 (스크롤 진행도 반응)
    gsap.to('.image-obj-1', {
        scrollTrigger: {
            trigger: section,
            start: 'top 70%', // 4번째 span이 70% 지점에 도달할 때 시작
            end: 'bottom bottom', // 상단 30% 지점까지 진행
            scrub: true,
        },
        opacity: 1,
        y: 0,
        ease: 'none',
    });

    // 3️⃣ .image-obj-2: 마지막 span 이후 등장
    gsap.fromTo(
        '.image-obj-2',
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                end: 'bottom bottom',
                scrub: true,
            },
        },
    );
}

function initParallaxDepthSectionAnimation() {
    const contaier = document.querySelector('.component-section');
    const cont = document.querySelector('.component-content');
    const scrollbar = document.querySelector('.component-scrollbar');
    const indicator = document.querySelector('.component-scrollbar span');
    const cube = document.querySelectorAll('.cube-wrapper');
    const items = document.querySelectorAll('.component-item');
    ScrollTrigger.create({
        trigger: contaier,
        start: 'top top',
        onEnter: () => {
            if (!contaier?.classList.contains('init')) {
                console.log('-------------------------');
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
            }
        },
    });
    /*
    ScrollTrigger.create({
        trigger: cont, // 고정 기준이 될 구간 (스크롤 범위)
        start: 'top top', // 스크롤 트리거 시작 위치
        end: 'bottom bottom', // 스크롤 트리거 종료 위치 (원하는 만큼 조절)
        pin: scrollbar, // 고정할 요소 지정
        pinSpacing: false, // 고정 시 빈 공간(padding) 생기는 것을 막음(필요에 따라 true로 설정)
    });
    ScrollTrigger.create({
        trigger: cont, // 고정 기준이 될 구간 (스크롤 범위)
        start: 'top top', // 스크롤 트리거 시작 위치
        end: 'bottom bottom', // 스크롤 트리거 종료 위치 (원하는 만큼 조절)
        pin: cube, // 고정할 요소 지정
        pinSpacing: false, // 고정 시 빈 공간(padding) 생기는 것을 막음(필요에 따라 true로 설정)
    });
*/
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
    /*
    //setTimeout(function () {
    const getVerticalCenter = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top + rect.height / 2;
    };

    const updateActiveItem = () => {
        const scrollbarCenter = getVerticalCenter(scrollbar);
        let activeIndex = -1;

        items.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            if (rect.top <= scrollbarCenter && rect.bottom >= scrollbarCenter) {
                activeIndex = index;
            }
        });

        // .component-item active 처리 (선택)
        items.forEach((item, idx) => {
            item.classList.toggle('active', idx === activeIndex);
        });

        // span 클래스 교체
        if (activeIndex !== -1) {
            const prevClass = [...indicator.classList].find((cls) => cls.startsWith('slide-'));
            if (prevClass) indicator.classList.remove(prevClass);
            indicator.classList.add(`slide-${activeIndex}`);
        }
    };

    window.addEventListener('scroll', updateActiveItem);
    window.addEventListener('resize', updateActiveItem);
    //}, 500);
    */
    /*
    const items = document.querySelectorAll('.component-item');
    const scrollbar = document.querySelector('.component-scrollbar');
    const indicator = scrollbar.querySelector('span');
    const getVerticalCenter = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top + rect.height / 2;
    };

    const checkActiveItem = () => {
        const scrollbarCenter = getVerticalCenter(scrollbar);

        let activeIndex = -1;

        items.forEach((item, index) => {
            const itemRect = item.getBoundingClientRect();
            const itemTop = itemRect.top;
            const itemBottom = itemRect.bottom;

            if (itemTop <= scrollbarCenter && itemBottom >= scrollbarCenter) {
                activeIndex = index;
            }
        });

        items.forEach((item, index) => {
            item.classList.toggle('active', index === activeIndex);
        });

        if (activeIndex !== -1) {
            const prevClass = [...indicator.classList].find((cls) => cls.startsWith('slide-'));
            if (prevClass) indicator.classList.remove(prevClass);
            indicator.classList.add(`slide-${activeIndex}`);
        }
    };

    window.addEventListener('scroll', checkActiveItem);
    window.addEventListener('resize', checkActiveItem);
    */

    /* //민우님 ver
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

            tl.to('.cube-wrapper', { left: '50%', xPercent: -50, yPercent: -50, duration: 0.3 })
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
                .fromTo(
                    '.cube-wrapper',
                    { left: '50%', xPercent: -50, yPercent: -50 },
                    { left: '42%', xPercent: 0, yPercent: -50, duration: 0.3 },
                )
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
                        console.log(this.activeIndex);
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
    */
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
});
