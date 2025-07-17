//제품 스와이퍼
$(function () {
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            
        },
    });
});