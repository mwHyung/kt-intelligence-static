document.addEventListener('DOMContentLoaded', () => {
    const sections = Array.from(document.querySelectorAll('[data-track-section]'));
    const enterTimes = new Map();          // Element → 진입 시각
    const isTracking = new Map();          // Element → 현재 트래킹 중인지
    const MIN_DURATION_SEC = 1;          // 최소 체류 시간 (1초)

    // 요소가 실제로 보이는지 (스타일+뷰포트+가림) 확인
    function isTrulyVisible(el) {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        if (rect.bottom < 0 || rect.top > vh || rect.right < 0 || rect.left > vw) return false;
        const style = window.getComputedStyle(el);
        if (parseInt(style.zIndex) < 0) return false; // 추가
        if (['none', 'hidden'].includes(style.display) ||
            ['hidden', '0'].includes(style.visibility) ||
            parseFloat(style.opacity) === 0) return false;
        // 부모도 체크
        let p = el.parentElement;
        while (p) {
            const ps = window.getComputedStyle(p);
            if (['none', 'hidden'].includes(ps.display) ||
                ['hidden', '0'].includes(ps.visibility) ||
                parseFloat(ps.opacity) === 0) return false;
            p = p.parentElement;
        }
        return true;
    }

    // 섹션 또는 자식 중 하나라도 보이는지 확인
    function isSectionVisible(section) {
        const children = section.children;
        if (children.length) {
            return Array.from(children).some(child => isTrulyVisible(child));
        } else {
            return isTrulyVisible(section);
        }
    }

    // gtag 이벤트 전송
    function sendSectionEvent(id, durationMs) {
        const durationSec = Math.round(durationMs / 1000);
        console.log('sendSectionEvent', id, durationSec);
        gtag('event', 'page_section_view', {
            section_id: id,
            section_time_sec: durationSec
        });
    }

    // 페이지 로딩 시 이미 보이는 섹션 처리 추가
    function checkInitialVisibility() {
        sections.forEach(el => {
            const id = el.dataset.trackSection;
            if (isSectionVisible(el)) {
                enterTimes.set(el, performance.now());
                isTracking.set(el, true);
                console.log('INITIAL ENTER', id);
            }
        });
    }

    // IntersectionObserver + 실제 가시성 체크
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const el = entry.target;
            const id = el.dataset.trackSection;
            if (!id) return;

            if (entry.isIntersecting && isSectionVisible(el)) {
                if (!isTracking.get(el)) {
                    enterTimes.set(el, performance.now());
                    isTracking.set(el, true);
                    console.log('ENTER', id);
                }
            } else if (isTracking.get(el) && !isSectionVisible(el)) {
                // 화면에서 완전히 사라졌을 때
                const enter = enterTimes.get(el);
                const dur = performance.now() - enter;
                enterTimes.delete(el);
                isTracking.set(el, false);
                console.log('LEAVE', id, dur);
                if (dur >= MIN_DURATION_SEC * 1000) sendSectionEvent(id, dur);
            }
        });
    }, {
        threshold: [0.0], // 0.0 = 단 1픽셀만 보여도 감지
        rootMargin: '0px' // 안전하게 제거

    });

    sections.forEach(sec => {
        isTracking.set(sec, false);
        observer.observe(sec);
    });

    // 초기 가시성 체크 실행
    checkInitialVisibility();

    // 스크롤·리사이즈·DOM 변경 시 폴링 체크 (IO 놓친 경우 보완)
    const checkAll = () => {
        sections.forEach(el => {
            const id = el.dataset.trackSection;
            const visible = isSectionVisible(el);
            const tracking = isTracking.get(el);

            if (visible && !tracking) {
                enterTimes.set(el, performance.now());
                isTracking.set(el, true);
                console.log('POLL ENTER', id);
            } else if (!visible && tracking) {
                const enter = enterTimes.get(el);
                const dur = performance.now() - enter;
                enterTimes.delete(el);
                isTracking.set(el, false);
                console.log('POLL LEAVE', id, dur);
                if (dur >= MIN_DURATION_SEC * 1000) sendSectionEvent(id, dur);
            }
        });
    };

    let timer = null;
    ['scroll', 'resize'].forEach(evt => {
        window.addEventListener(evt, () => {
            clearTimeout(timer);
            timer = setTimeout(checkAll, 100);
        });
    });

    // DOM 변경 감지
    new MutationObserver(() => {
        clearTimeout(timer);
        timer = setTimeout(checkAll, 100);
    }).observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class', 'hidden']
    });

    // 주기적인 상태 확인 추가 (1초마다)
    setInterval(checkAll, 1000);

    // 언로드 시점 남은 섹션 처리
    window.addEventListener('beforeunload', () => {
        const now = performance.now();
        enterTimes.forEach((enter, el) => {
            const id = el.dataset.trackSection;
            const dur = now - enter;
            if (dur >= MIN_DURATION_SEC * 1000) {
                console.log('UNLOAD', id, dur);
                sendSectionEvent(id, dur);
            }
        });
    });
});
