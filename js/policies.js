$(document).ready(function () {
    let count = 0;
    $(".payment-state-text").each(function () {
        if ($(this).text() == "Оплачено") {
            $(this).css("background", "#35A744");
        } else if ($(this).text() == "Ожидает оплату") {
            $(this).css("background", "#F0AF13");
        } else if ($(this).text() == "Не оплачено") {
            $(this).css("background", "red");
        }
    });

    $(".string-top").click(function () {
        if (!$(this).hasClass("open")) {
            $(this).parents(".card-policies").css("border", "1px solid #438ACA");
            $(this)
                .parents(".card-policies")
                .children(".mid-bottom-wrap")
                .css("display", "block");
            $(this)
                .parents(".card-policies")
                .children(".string-top")
                .css("box-shadow", "0px 4px 6px rgba(0, 0, 0, 0.06)");
            $(this).addClass("open")
        } else if ($(this).hasClass("open")) {
            $(this).parents(".card-policies").css("border", "none");
            $(this).parents(".card-policies").css("box-shadow", "");
            $(this)
                .parents(".card-policies")
                .children(".mid-bottom-wrap")
                .css("display", "none");
            $(this)
                .parents(".card-policies")
                .children(".string-top")
                .css("box-shadow", "");
            $(this).removeClass("open")
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 160) {
            $(".profile-menu-wrap").children('.menu-wrapper').css('height', "45px");
            $(".profile-menu-wrap").children('.menu-wrapper').css('box-shadow', "0 0 10px rgba(0,0,0,0.3)");
            $('.profile-menu-li').children("svg").css('margin-top', "9px");
            $('.profile-menu-li').children("a").css('line-height', "45px");
            $(".profile-menu-wrap").children('.menu-wrapper').children(".grey-separator").css('height', "25px");
        } else {
            $(".profile-menu-wrap").children('.menu-wrapper').css('height', "70px");
            $(".profile-menu-wrap").children('.menu-wrapper').css('box-shadow', "none");
            $('.profile-menu-li').children("svg").css('margin-top', "23px");
            $('.profile-menu-li').children("a").css('line-height', "70px");
            $(".profile-menu-wrap").children('.menu-wrapper').children(".grey-separator").css('height', "50px");
        }
    });
});
