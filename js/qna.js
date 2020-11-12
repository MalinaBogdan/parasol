"use strict";
var e = document.querySelector(".qnaShowMore"),
    s = document.querySelector(".qna-section__about-wrapper");
e.addEventListener("click", function (t) {
    t.preventDefault(),
    s.classList.toggle("show"), e.classList.toggle("show")
}), $(".qna-section__mobile-more").on("click", function () {
    $(this).closest(".qna-section__tabs-content").toggleClass("show"),
    $(this).closest(".qna-section__tabs-content").hasClass("show") ? $(this).text("Скрыть") : $(this).text("Еще вопросы")
});