const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  createElements: true,
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
      spaceBetween: 31,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper__arrow--right',
    prevEl: '.swiper__arrow--left',
  },
});
