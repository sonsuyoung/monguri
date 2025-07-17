
//스와이퍼 배너
$(function () {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".mySwiper .swiper-pagination",
            clickable: true,
        },
    });
});


//제품 스와이퍼
$(function () {
    const swiper = new Swiper('.Product', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        speed: 2000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});

//리뷰 스와이퍼
$(function () {
    const swiper = new Swiper('.review_slide', {
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        speed: 7000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });
});

// 어바웃 버티컬 스와이퍼
var swiper = new Swiper(".ending", {
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 2000,
    });

