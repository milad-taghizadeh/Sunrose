document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper('.swiper-container', {
    // Swiper options here
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
