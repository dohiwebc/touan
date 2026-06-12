/* =============================================================
   古民家茶房 灯庵 - TOUAN
   effects.js : スクロール時のフェードイン演出
   ============================================================= */

(function () {
  'use strict';

  const fadeElements = document.querySelectorAll('.fade-up');
  if (!fadeElements.length) return;

  // IntersectionObserver で順次表示
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    fadeElements.forEach((el) => observer.observe(el));
  } else {
    fadeElements.forEach((el) => el.classList.add('is-visible'));
  }
})();
