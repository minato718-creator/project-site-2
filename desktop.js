if (window.innerWidth >= 769) {
  window.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slide-track');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
   
    // 最後の2枚を最初にクローンして末尾に追加
    for (let i = 0; i < 2; i++) {
      const clone = slides[i].cloneNode(true);
      track.appendChild(clone);
    }

    let currentIndex = 0;
    let isTransitioning = false;

    const moveSlide = () => {
      if (isTransitioning) return;
      isTransitioning = true;

      currentIndex += 2;
      track.style.transition = "transform 0.5s ease-in-out";
      track.style.transform = `translateX(-${50 * currentIndex}%)`;

      // ループ処理：最後のクローンに移動したらリセット
      setTimeout(() => {
        if (currentIndex >= totalSlides) {
          track.style.transition = "none";
          currentIndex = 0;
          track.style.transform = `translateX(0%)`;
        }
        isTransitioning = false;
      }, 600);
    };

    setInterval(moveSlide, 3000);
  });
}