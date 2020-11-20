$(document).ready(function () {
  let i = 0;
  let imgSliderBlock = $(".img-slider-block").length;

  let widthImgSliderBlock = document.querySelector(".img-slider-block").offsetWidth

   $(".img-string").css("width", `${imgSliderBlock * widthImgSliderBlock}px`);

  $(".slider-btn").click(function () {
    if (i <= -(imgSliderBlock / 5 - 1) * 1100) {
      $(".img-string").css("left", "0");
      i = 0;
    } else {
      $(".img-string").css("left", `${i - 1100}px`);
      i -= 1100;
    }
  });
});
