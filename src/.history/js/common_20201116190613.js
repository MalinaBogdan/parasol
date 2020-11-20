"use strict";
$(document).ready(function () {
    $(".news-section__articles").each(function (e, s) {
        $(this).slick({
            slidesToShow: 4, slidesToScroll: 2,
            variableWidth: !0, responsive: [{
                breakpoint: 1080,
                settings: { arrows: !1 }
            },
                { breakpoint: 768, settings: { slidesToShow: 3 } },
                { breakpoint: 480, settings: "unslick" }]
        })
    }),
    $(".carousel-a").slick({
            dots: !1, arrows: !1, slidesToShow: 3,
            slidesToScroll: 1, autoplay: !0, autoplaySpeed: 1500, speed: 500,
            draggable: !1, swipe: !1, vertical: !0, centerMode: !0, initialSlide: 1,
            pauseOnFocus: !1, pauseOnHover: !1
        }),
        $(".reviews-section__slider").slick({
            dots: !0, slidesToShow: 1, slidesToScroll: 1,
            speed: 500, centerMode: !1, adaptiveHeight: !0,
            prevArrow: '<button class="reviews-section__slider-arrow prev">previous slide</button>',
            nextArrow: '<button class="reviews-section__slider-arrow next">next slide</button>',
            dotsClass: "reviews-section__slider-dots"
        })
});