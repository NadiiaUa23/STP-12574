import Swiper from 'swiper';
import 'swiper/css';

new Swiper('.how-swiper', {
  direction: 'vertical', // mobile 
  slidesPerView: 'auto',
  spaceBetween: 42,
  grabCursor: true,
  
  freeMode: true,
  mousewheel: true,

  breakpoints: {
    768: {
      direction: 'horizontal', // desktop
      spaceBetween: 48,
    },
  },
});

