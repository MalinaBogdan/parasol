$(document).ready(function () {
    let selectOpen = false;
    let selectInput;
    let orderBlockOpen = false;
    $(".custom-select-wrapper").click(function () {
        selectInput = $(this);
        let amountCustomOption = $(this)
            .children(".custom-select")
            .children(".custom-options")
            .children(".custom-option").length;

        if (selectOpen == false) {
            $(this).children(".custom-select").addClass("open");
            $(this).css("height", ` ${amountCustomOption * 41 + 40}px`);
            selectOpen = true;
        } else if (selectOpen == true) {
            $(this).children(".custom-select").removeClass("open");
            $(this).css("height", "fit-content");
            selectOpen = false;
        }
    });
    for (const option of document.querySelectorAll(".custom-option")) {
        option.addEventListener("click", function () {
            if (!this.classList.contains("selected")) {
                $(".custom-option.selected").removeClass("selected");
                this.classList.add("selected");
                console.log($(this).parent().parent().parent().parent().children());
                if ($(this).attr("price") != "нет") {
                    $(this)
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .children(".price-block")
                        .css("display", "flex");
                    $(this)
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .children(".price-block")
                        .children(".price-text-2")
                        .text(`${$(this).attr("price")} грн`);
                    $(this)
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .children(".price-block")
                        .children(".price-text-1")
                        .text(`Цена:`);
                } else {
                    $(this)
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .children(".price-block")
                        .css("display", "none");
                }

                this.closest(".custom-select").querySelector(
                    ".custom-select__trigger span"
                ).textContent = this.textContent;
            }
        });
    }
    // window.addEventListener('click', function (e) {
    //     const select = document.querySelector('.custom-select')
    //     if (!select.contains(e.target)) {
    //         $(selectInput).children('.custom-select').removeClass('open');
    //         $(selectInput).css("height", "fit-content");
    //     }
    // });
    $(".order_block").click(function () {

        if(!$(this).hasClass("open")){
            if (jQuery(window).width() < 1279) {
                if (orderBlockOpen == false) {
                    $(".right-container").css("display", "block");
                    $(".right-container").css("top", `${this.getBoundingClientRect().bottom}px`);
                    $("body").css("overflow", "hidden");
                }
            }
            $(this).addClass("open")
        } else {
            if (jQuery(window).width() < 1279) {
                if (orderBlockOpen == false) {
                    $(".right-container").css("display", "none");
                    $("body").css("overflow", "auto");
                }
            }
            $(this).removeClass("open")
        }

    });
    $(".right-container").click(function () {
        if (jQuery(window).width() < 1279) {
            $(".right-container").css("display", "none");
            $("body").css("overflow", "auto");
        }
    });
    $("#privat-bank").click(function () {
        $("#privat-bank").removeClass("no-active");
        $("#portmone").addClass("no-active");
    });
    $("#portmone").click(function () {
        $("#portmone").removeClass("no-active");
        $("#privat-bank").addClass("no-active");
    });

    // radio
    // $("#privat-bank").click(function () {
    //   if ($(this).hasClass("no-active")) {
    //     $(this).removeClass("no-active");
    //     console.log($(this).attr("checked"));
    //   } else {
    //     console.log($(this).addClass("no-active"));
    //     $(this).addClass("no-active");
    //   }
    // $("#privat-bank").removeClass("no-active");
    // $("#portmone").addClass("no-active");
    // console.log($(this).attr("class"));
    // });
    // $("#portmone").click(function () {
    //   console.log($(this).attr("class"));

    //   $("#portmone").removeClass("no-active");
    //   $("#privat-bank").addClass("no-active");

    //   console.log($(this).attr("class"));
    // });

    $("#price-card-checkbox").click(function () {
        if (!$(this).hasClass("select")) {
            $(this).parent().parent().children(".price-block").css("display", "flex");
            $(this)
                .parent(".radio")
                .parent(".bottom-string")
                .children(".price-block")
                .children(".price-text-2")
                .text("150 грн");
            $(this)
                .parent(".radio")
                .parent(".bottom-string")
                .children(".price-block")
                .children(".price-text-1")
                .text("Цена:");
            $(this).addClass("select");
        } else if ($(this).hasClass("select")) {
            $(this).parent().parent().children(".price-block").css("display", "none");
            $(this)
                .parent(".radio")
                .parent(".bottom-string")
                .children(".price-block")
                .children(".price-text-2")
                .text(" ");

            $(this).removeClass("select");
        }
    });
    // /radio
});
