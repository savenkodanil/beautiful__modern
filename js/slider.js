const swiper = new Swiper('.swiper', {
    // Optional parameter
    loop: true,
    slidesPerView: 1,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay:4000,
      disableOnInteraction:false
    },

    breakpoints: {
      359: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      960: {
        slidesPerView: 2,
      },

      1380: {
        slidesPerView: 3,
      }
    }
  });