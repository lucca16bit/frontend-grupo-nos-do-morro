const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 30
        }
    }
});
