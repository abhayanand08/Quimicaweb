const swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  loop: true,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: {
    invert: false,
  }
});
