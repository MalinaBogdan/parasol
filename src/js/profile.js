$(document).ready(function () {
    let personalData = {
        name: $("#personalDataName").val(),
        surname: null,
        patronymic: null,
        dateOfBirth: null,
        email: null,
        identificationNumber: null
    }

    // radio
    $("#gender-man").click(function () {
        $("#gender-man").removeClass("no-active");
        $("#gender-woman").addClass("no-active");
    });
    $("#gender-woman").click(function () {
        $("#gender-woman").removeClass("no-active");
        $("#gender-man").addClass("no-active");
    });
    $("#language-ua").click(function () {
        $("#language-ua").removeClass("no-active");
        $("#language-ru").addClass("no-active");
    });
    $("#language-ru").click(function () {
        $("#language-ru").removeClass("no-active");
        $("#language-ua").addClass("no-active");
    });
    // /radio

    // checkbox disabled
    $("#inn-checkbox").click(function () {
        const innInput = $(this).parent(".radio").parent(".input-block").children("#inn-input");

        if (!innInput.attr('disabled')) {
            innInput.attr('disabled', 'disabled')
        } else if (innInput.attr('disabled')) {
            innInput.removeAttr('disabled')
        }
    });
    // /checkbox disabled

    // open doc input
    $(".top-block").click(function () {
        if (!$(this).hasClass("open")) {
            $(this).children(".documents-button").css("transform", "rotate(180deg)");
            $(this)
                .parents(".documents-input")
                .children(".inputs-wrap")
                .css("display", "grid");
            $(this).parents(".documents-input").css("border-color", "#438ACA");
            $(this).addClass("open");
        } else if ($(this).hasClass("open")) {
            $(this).parents(".documents-input").css("border-color", "#E6E6E6");
            $(this)
                .children(".documents-button")
                .css("transform", "rotate(360deg)");
            $(this).parents(".documents-input").children(".inputs-wrap").css("display", "none");
            $(this).removeClass("open");
        }
    });
    // /open doc input

    // disabled input
    $(".text-block").click(function () {
        let scrollTop = $(window).scrollTop()
        $(this)
            .parents("body")
            .addClass("overflow-hidden");
        $(".substrate").css("top", `${scrollTop}px`);
        $(".substrate").css("display", "block");
        $(".select-document-type").css("display", "block");
    });

    $(".substrate").click(function () {
        $(this)
            .parents("body")
            .removeClass("overflow-hidden");
        $(".substrate").css("display", "none");
        $(".select-document-type").css("display", "none");
    })
    // /disabled input

    // close
    $("#closeDocTypeBlock").click(function () {
        $(this).parents(".select-document-type").css("display", "none");
        $(this)
            .parents(".profile-documents-wrap")
            .children(".profile-documents")
            .removeClass("disabled");
    });
    $("#closeGoogleBlock").click(function () {
        $(this).parents(".google-block").css("display", "none");
        $(".profile-forms").css("margin-left", "310px")
    });
    // /close

    // mask
    $(".input-date").mask("99.99.9999");
    $(".input-number-id").mask("999999999");
    $(".input-recording").mask("99999999-99999");
    $("#inn-input").mask("9999999999");
    // /mask

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
});
