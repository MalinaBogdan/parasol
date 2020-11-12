$(document).ready(function () {
    // checkbox disabled

    $(".top-block").click(function () {
        if (!$(this).hasClass("open")) {
            $(this).children(".transport-button").css("transform", "rotate(180deg)");
            $(this).css("justify-content", "space-between");
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
                .children(".grey-separator")
                .css("display", "none");
            $(this)
                .children(".save-block")
                .css("display", "flex");
            $(this).addClass("open");
        } else if ($(this).hasClass("open")) {
            $(this).css("justify-content", "start");

            $(this)
                .children(".car-release")
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
    $(".inn-checkbox").click(function () {
        const innInput = $(this).parent(".radio").parent(".input-block-transport").children("#inn-input");

        if (!innInput.attr('disabled')) {
            innInput.attr('disabled', 'disabled')
        } else if (innInput.attr('disabled')) {
            innInput.removeAttr('disabled')
        }
    });
    // /checkbox disabled
    if (window.matchMedia("(max-width: 767px)").matches) {
        $(".car-release")
            .css("display", "none");
        $(".top-block").children(".grey-separator")
            .css("display", "none");
    }
    $(".input-birthday").mask("99.99.9999");
    $("#inn-input").mask("9999999999");
});
