$(document).ready(function () {
  let j = 0;
  let amountCompaniesBlock = $(".companies-block").length;
  let i = 0;
  let amountSlidersBlock = $(".img-slider-block").length;

  $(".companies-btn").click(function () {
    if (j <= -(amountCompaniesBlock - 3) * 274) {
      $(".companies-string").css("left", "0");
      j = 0;
    } else {
      $(".companies-string").css("left", `${j - 274}px`);
      j -= 274;
    }
  });
});
