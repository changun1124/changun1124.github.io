/* Developer Portfolio interaction — Vanilla JavaScript */
document.documentElement.classList.add('js-enabled');

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const sections = [...document.querySelectorAll('main section[id]')];

  // 모바일 메뉴의 상태와 스크롤 잠금을 함께 관리합니다.
  const closeMenu = () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', '메뉴 열기');
    document.body.classList.remove('menu-open');
  };

  menuToggle.addEventListener('click', () => {
    const willOpen = !navMenu.classList.contains('open');
    menuToggle.classList.toggle('active', willOpen);
    navMenu.classList.toggle('open', willOpen);
    menuToggle.setAttribute('aria-expanded', String(willOpen));
    menuToggle.setAttribute('aria-label', willOpen ? '메뉴 닫기' : '메뉴 열기');
    document.body.classList.toggle('menu-open', willOpen);
  });

  // 모든 내부 링크를 고정 헤더 높이에 맞춰 부드럽게 이동시킵니다.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      closeMenu();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', link.getAttribute('href'));
    });
  });

  // 현재 화면에 가장 가까운 섹션의 메뉴를 강조합니다.
  const updateNavigation = () => {
    const marker = window.scrollY + window.innerHeight * 0.32;
    let currentId = 'home';
    sections.forEach((section) => {
      if (marker >= section.offsetTop) currentId = section.id;
    });
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${currentId}`;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    header.classList.toggle('scrolled', window.scrollY > 12);
  };

  window.addEventListener('scroll', updateNavigation, { passive: true });
  updateNavigation();

  // 프로젝트별 상세 내용을 독립적으로 펼치고 접습니다.
  document.querySelectorAll('.details-button').forEach((button) => {
    button.addEventListener('click', () => {
      const details = document.getElementById(button.getAttribute('aria-controls'));
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isOpen));
      details.classList.toggle('open', !isOpen);
    });
  });

  // 화면에 들어온 섹션 요소를 한 번만 자연스럽게 표시합니다.
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
  }

  // 데스크톱 크기로 전환되면 모바일 메뉴 상태를 초기화합니다.
  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) closeMenu();
  });
});
