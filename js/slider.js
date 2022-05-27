const swiper = new Swiper('.swiper', {
    // Optional parameter
    loop: true,
    slidesPerView: 3,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });