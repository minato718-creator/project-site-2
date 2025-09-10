window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth >= 768) return;

  // スライドショー処理（あるページだけ動かす）
  const track = document.querySelector('.slide-track');
  if (track) {
    let slides = document.querySelectorAll('.slide');
    const firstClone = slides[0].cloneNode(true);
    track.appendChild(firstClone);

    slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    let currentIndex = 0;
    let isTransitioning = false;

    const moveSlide = () => {
      if (isTransitioning) return;
      isTransitioning = true;

      currentIndex++;
      track.style.transition = "transform 0.5s ease-in-out";
      track.style.transform = `translateX(-${100 * currentIndex}%)`;

      setTimeout(() => {
        if (currentIndex === totalSlides - 1) {
          track.style.transition = "none";
          currentIndex = 0;
          track.style.transform = `translateX(0%)`;
        }
        isTransitioning = false;
      }, 600);
    };

    setInterval(moveSlide, 3000);
  }

  // ✅ ハンバーガーメニュー処理（全ページで実行OK）
  const hamburger = document.getElementById('hamburger');
  const gNav = document.getElementById('gNav');

  if (hamburger && gNav) {
    hamburger.addEventListener('click', () => {
      gNav.classList.toggle('open');
      document.body.classList.toggle('open');

      if (gNav.classList.contains('open')) {
        hamburger.setAttribute('aria-label', 'メニューを閉じる');
      } else {
        hamburger.setAttribute('aria-label', 'メニューを開く');
      }
    });
  }
});