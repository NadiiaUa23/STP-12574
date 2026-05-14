import Swiper from 'swiper';
import 'swiper/css';

const swiperConfigs = {
  direction: 'vertical',
  slidesPerView: 'auto',
  spaceBetween: 42,
  grabCursor: true,
  
  freeMode: false,
  mousewheel: {
  releaseOnEdges: true
},
  breakpoints: {
    768: {
      direction: 'horizontal',
      spaceBetween: 48,
    },
  },
};

const selectors = ['.how-swiper', '.gallery-swiper'];

selectors.forEach(selector => {
  new Swiper(selector, swiperConfigs);
});
