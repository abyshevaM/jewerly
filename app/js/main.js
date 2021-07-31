$(function () {

    if ($('.assortment__inner').length > 0) {
        var mixer = mixitup('.assortment__inner', {
            load: {
                filter: '.wedding'
            }
        });
    }

    if ($('.product').length > 0) {
        var swiper = new Swiper(".product__slider-thumbs", {
            spaceBetween: 30,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".product__slider-gallery", {
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });
    }

    $('.information__btn').on('click', function(){
        $('.information__text').toggleClass('information__text--active')
        $('.information__btn').toggleClass('information__btn--active')
    });

    $('.header__burger').on('click', function(){
        $('.header').toggleClass('header--active')
        $('.header__burger').toggleClass('header__burger--active')
        $('body').toggleClass('lock')
    })

})