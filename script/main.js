// 서브메뉴 슬라이드
$(function () {
    $('.nav > li').mouseenter(function () {
        $('.sub, .sub_bg').stop().slideDown();
    });
    $('.nav > li').mouseleave(function () {
        $('.sub, .sub_bg').stop().slideUp();
    });
});

$(function () {
    //숨긴 메뉴 보이기 
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('#header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta 
        if (Math.abs(lastScrollTop - st) <= delta) return;

        // If they scrolled down and are past the navbar, add class .nav-up. 
        // This is necessary so you never see what is "behind" the navbar. 
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down 
            $('#header').addClass('nav-up');
        } else {
            // Scroll Up 
            if (st + $(window).height() < $(document).height()) {
                $('#header').removeClass('nav-up');
            }
        }

        lastScrollTop = st;
    }
});

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
        delay: 7000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.Product .swiper-button-next',
        prevEl: '.Product .swiper-button-prev',
    },
    });
});

//아이콘 클릭
// $(function(){
//     $('.bottom a:nth-child(1)').click(function(){
//         $('.bottom a:nth-child(1) img').toggleClass('on');
//     });
//     $('.bottom a:nth-child(2)').click(function(){
//         $('.bottom a:nth-child(2) img').toggleClass('on');
//     });
// });