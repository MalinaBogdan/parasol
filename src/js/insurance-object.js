$(document).ready(function () {

    $(".top-block").click(function () {
        if (!$(this).hasClass("open")) {
            $(this).children(".transport-button").css("transform", "rotate(180deg)");
            $(this)
                .parents(".card-policies")
                .css("box-shadow", "0px 0px 15px rgba(64, 86, 105, 0.18)");
            $(".details-button-text", this).text("Скрыть");
            $(this)
                .parents(".transport-input")
                .children(".main-string")
                .css("display", "block");
            $(this)
                .children(".car-release")
                .css("display", "none");
            $(this)
                .children(".car-number")
                .css("display", "none");
            $(this)
                .children(".grey-separator")
                .css("display", "none");
            $(this)
                .children(".status")
                .css("display", "none");

            if (window.matchMedia("(max-width: 767px)").matches) {
                $(".save-block-mob")
                    .css("display", "flex");
            } else {
                $(this)
                    .children(".save-block")
                    .css("display", "flex");
            }
            $(this).addClass("open");
        } else if ($(this).hasClass("open")) {
            $(this)
                .children(".car-release")
                .css("display", "block");
            $(this)
                .children(".car-number")
                .css("display", "block");
            $(this)
                .children(".grey-separator")
                .css("display", "block");
            $(this).children(".transport-button").css("transform", "rotate(360deg)");
            $(this)
                .parents(".transport-input")
                .children(".main-string")
                .css("display", "none");
            $(this).removeClass("open");
            $(this)
                .children(".save-block")
                .css("display", "none");
            $(".save-block-mob").css("display", "none");

            if (window.matchMedia("(max-width: 767px)").matches) {
                $(this)
                    .children(".status")
                    .css("display", "none");
                $(this)
                    .children(".car-release")
                    .css("display", "none");
                $(this)
                    .children(".grey-separator")
                    .css("display", "none");
            } else {
                $(this)
                    .children(".status")
                    .css("display", "flex");
            }
        }
    });
    $(".code-checkbox").click(function () {
        const vinCodeInput = $(this).parent(".radio").parent(".input-block-transport").children(".car-vin");

        if (!vinCodeInput.attr('disabled')) {
            vinCodeInput.attr('disabled', 'disabled')
        } else if (vinCodeInput.attr('disabled')) {
            vinCodeInput.removeAttr('disabled')
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 160) {
            $('.menu-wrapper').css('height', "45px");
            $('.menu-wrapper').css('box-shadow', "0 0 10px rgba(0,0,0,0.3)");
            $('.profile-menu-li').children("svg").css('margin-top', "9px");
            $('.profile-menu-li').children("a").css('line-height', "45px");
            $('.menu-wrapper').children(".grey-separator").css('height', "25px");
        } else {
            $('.menu-wrapper').css('height', "70px");
            $('.menu-wrapper').css('box-shadow', "none");
            $('.profile-menu-li').children("svg").css('margin-top', "23px");
            $('.profile-menu-li').children("a").css('line-height', "70px");
            $('.menu-wrapper').children(".grey-separator").css('height', "50px");
        }
    });
    if (window.matchMedia("(max-width: 767px)").matches) {
        $(".top-block").children(".car-name").css("display", "none")
        $(".top-block").children(".car-release").css("display", "none")
        $(".top-block").children(".grey-separator").css("display", "none")
    }
});
