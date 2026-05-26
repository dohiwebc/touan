/* =============================================================
   古民家茶房 灯庵 - TOUAN
   gallery.js : 画像クリックによる簡易ライトボックス
   ============================================================= */

(function () {
  'use strict';

  const triggers = document.querySelectorAll('[data-gallery]');
  if (!triggers.length) return;

  // ライトボックスを動的生成
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = `
    <div class="lightbox__content">
      <button type="button" class="lightbox__close" aria-label="閉じる"></button>
      <div class="lightbox__placeholder placeholder" data-img=""></div>
      <p class="lightbox__caption"></p>
    </div>
  `;
  document.body.appendChild(lightbox);

  const closeBtn = lightbox.querySelector('.lightbox__close');
  const placeholderEl = lightbox.querySelector('.lightbox__placeholder');
  const captionEl = lightbox.querySelector('.lightbox__caption');
  const body = document.body;

  const openLightbox = (img, caption) => {
    placeholderEl.innerHTML = '';
    if (img) {
      const imageEl = document.createElement('img');
      imageEl.src = img;
      imageEl.alt = caption || '';
      placeholderEl.appendChild(imageEl);
    } else {
      const label = document.createElement('span');
      label.className = 'placeholder__label';
      label.textContent = caption || 'IMAGE';
      placeholderEl.appendChild(label);
    }

    captionEl.textContent = caption || '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    body.classList.add('no-scroll');
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    body.classList.remove('no-scroll');
  };

  triggers.forEach((el) => {
    el.addEventListener('click', () => {
      const img = el.dataset.gallery || '';
      const caption = el.dataset.caption || '';
      openLightbox(img, caption);
    });
    el.style.cursor = 'zoom-in';
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });
})();
