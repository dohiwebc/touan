/* =============================================================
   古民家茶房 灯庵 - TOUAN
   main.js : ヘッダー / ハンバーガーメニュー / ナビゲーション
   ============================================================= */

(function () {
  'use strict';

  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;

  // ---------- スクロールで固定ヘッダーに背景を付与 ----------
  if (header && !header.classList.contains('site-header--solid')) {
    const onScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---------- ハンバーガーメニューの開閉 ----------
  if (hamburger && mobileMenu) {
    const toggleMenu = (open) => {
      const isOpen =
        typeof open === 'boolean' ? open : !mobileMenu.classList.contains('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      mobileMenu.classList.toggle('is-open', isOpen);
      body.classList.toggle('no-scroll', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    };

    hamburger.addEventListener('click', () => toggleMenu());

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        toggleMenu(false);
      }
    });
  }

  // ---------- 現在ページのナビハイライト ----------
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach((link) => {
    if (link.dataset.nav === path) {
      link.classList.add('is-current');
    }
  });
})();
