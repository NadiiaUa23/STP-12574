import Swiper from 'swiper';
import 'swiper/css';

new Swiper('.how-swiper', {
  direction: 'vertical', // 📱 mobile default
  slidesPerView: 'auto',
  spaceBetween: 42,
  grabCursor: true,

  breakpoints: {
    768: {
      direction: 'horizontal', // 💻 desktop
      spaceBetween: 48,
    },
  },
});

// freeMode: true,
// mousewheel: true,