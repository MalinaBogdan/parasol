$(document).ready(function () {
  let i = 0;
  let a = $(".img-slider-block").length;

  $(".slider-btn").click(function () {
    if (i <= -(a - 4) * 260) {
      $(".img-string").css("left", "0");
      i = 0;
    } else {
      $(".img-string").css("left", `${i - 260}px`);
      i -= 260;
    }
  });
});
