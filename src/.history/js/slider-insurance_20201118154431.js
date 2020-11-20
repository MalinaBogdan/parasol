$(document).ready(function () {
  let i = 0;
  let a = $(".img-slider-block").length;
  let widthImgSliderBlock

  $(".slider-btn").click(function () {
    if (i <= -(a - 4) * 228) {
      $(".img-string").css("left", "0");
      i = 0;
    } else {
      $(".img-string").css("left", `${i - 228}px`);
      i -= 228;
    }
  });
});
