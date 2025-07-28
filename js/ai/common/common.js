function includeCommonLayout(options = {}) {
    // header
    fetch('/ai/common/header')
        .then((res) => res.text())
        .then((data) => {
            const headerTarget = document.querySelector('.header-inner');
            if (headerTarget) {
                headerTarget.innerHTML = data;

                //solution 페이지에서만 checkHeader 실행
                if (typeof checkHeader === 'function' && window.location.pathname.startsWith('/ai/solution/')) {
                    checkHeader();
                }

                // header.js 동적 로드
                const script = document.createElement('script');
                script.src = '/js/ai/common/header.js';
                document.body.appendChild(script);
            } else {
            }
        });

    // KT Model 체험하기
    if (!options.skipKtModel) {
        fetch('/ai/common/model')
            .then((res) => res.text())
            .then((data) => {
                const modelTarget = document.querySelector('.kt-model-section');
                if (modelTarget) {
                    modelTarget.innerHTML = data;

                    // AOS 다시 초기화
                    if (window.AOS && typeof window.AOS.init === 'function') {
                        window.AOS.init();
                    }
                } else {
                }
            });
    }

    // Modal 팝업
    if (options.showModal) {
        fetch('/ai/common/modal')
            .then((res) => res.text())
            .then((data) => {
                // 모달 컨테이너가 없으면 생성
                let modalContainer = document.querySelector('.modal-container');
                if (!modalContainer) {
                    modalContainer = document.createElement('div');
                    modalContainer.className = 'modal-container';
                    document.body.appendChild(modalContainer);
                }

                modalContainer.innerHTML = data;

                // 모달 관련 스크립트 동적 로드
                const modalScript = document.createElement('script');
                modalScript.src = '/js/ai/common/modal.js';
                modalScript.onload = function () {
                    console.log('Modal script loaded successfully');
                    // 스크립트 로드 후 모달 초기화
                    if (typeof initializeModal === 'function') {
                        initializeModal();
                    }
                };
                document.body.appendChild(modalScript);
            })
            .catch((error) => {
                console.error('Modal loading failed:', error);
            });
    }

    //resources Detail banner
    fetch('/ai/common/resourcesBanner')
        .then((res) => res.text())
        .then((data) => {
            const bannerTarget = document.querySelector('.tech-banner-sec');
            if (bannerTarget) {
                bannerTarget.innerHTML = data;
            } else {
            }
        });

    // footer
    fetch('/ai/common/footer')
        .then((res) => res.text())
        .then((data) => {
            const footerTarget = document.querySelector('.footer');
            if (footerTarget) {
                footerTarget.innerHTML = data;
            } else {
            }
        });
    const isMobile = window.innerWidth <= 768;

    function updateResponsiveLinks() {
        const isMobile = window.innerWidth <= 768;
        document.querySelectorAll('a[data-pc][data-mo]').forEach((el) => {
            el.setAttribute('href', isMobile ? el.dataset.mo : el.dataset.pc);
        });
    }

    // 페이지 로딩 시 실행
    document.addEventListener('DOMContentLoaded', updateResponsiveLinks);

    // 창 크기 변경 시 다시 실행
    window.addEventListener('resize', updateResponsiveLinks);
}
