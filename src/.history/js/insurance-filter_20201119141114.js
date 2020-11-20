$(document).ready(function () {
  let heightGridTableRows = 1021;
  let heightGridTableColumns = 1201;
  let heightNewsWrapRows = 625;
  let heightNewsWrapColumns = 805;
  let amountCards = $(".wrapper-grid").length;
  let amountNews = $(".news-card").length;

  if (jQuery(window).width() < 1200) {
    $("#grid-table")
      .removeClass("table-cards-columns")
      .addClass("table-cards-rows");
    $(".table-cards-rows").css("height", "1021px");
  }
  if (jQuery(window).width() < 651) {
    $("#grid-table")
      .removeClass("table-cards-columns")
      .addClass("table-cards-rows");
    $(".table-cards-rows").css("height", "571px");
  }

  // filter categories
  $(".insurance-button").click(function () {
    if ($("#grid-table").hasClass("table-cards-columns")) {
      heightGridTableColumns = 1201;
      heightNewsWrapColumns = 805;
      $(".table-cards-columns").css("height", `${heightGridTableColumns}px`);
      $(".news-container").css("height", `${heightNewsWrapColumns}px`);
    }
    if ($("#grid-table").hasClass("table-cards-rows")) {
      if (jQuery(window).width() < 651) {
        heightGridTableRows = 571;
      } else {
        heightGridTableRows = 1021;
      }
      heightNewsWrapRows = 625;
      $(".table-cards-rows").css("height", `${heightGridTableRows}px`);
      $(".news-container").css("height", `${heightNewsWrapRows}px`);
    }
    const a = $(this).attr("data-f");

    $(".insurance-button.active").removeClass("active");
    $(this).addClass("active");

    $(".wrapper-grid").each(function () {
      const card = $(this);
      card.addClass("hidden");
      setTimeout(function () {
        card.css("display", "none");
      }, 500);

      if (a == "all") {
        card.removeClass("hidden");
        setTimeout(function () {
          card.css("display", "grid");
        }, 500);
      } else if ( a == card.attr("data-card")) {
        card.removeClass("hidden");
        setTimeout(function () {
          card.css("display", "grid");
        }, 500);
      }
    });
  });
  // /filter categories

  // more cards button
  $(".more-cards-wrap").click(function () {
    let selectCategories = document.querySelector(".insurance-button.active").getAttribute("data-f")

    let amountCardsCategories = document.querySelectorAll(`a[data-card="${selectCategories}"]`).length

    if ($("#grid-table").hasClass("table-cards-columns")) {
      if (selectCategories == "all") {
        if ((amountCards / 3) * 400 > heightGridTableColumns) {
          heightGridTableColumns += 400;
          heightNewsWrapColumns += 400;
          $(".table-cards-columns").css("height", `${heightGridTableColumns}px`);
          $(".news-container").css("height", `${heightNewsWrapColumns}px`);
        }
      } else {
        if (amountCardsCategories * 170 > heightGridTableRows) {
          heightGridTableColumns += 400;
          heightNewsWrapColumns += 400;
          $(".table-cards-columns").css("height", `${heightGridTableColumns}px`);
          $(".news-container").css("height", `${heightNewsWrapColumns}px`);
        }
      }
    }
    if ($("#grid-table").hasClass("table-cards-rows")) {
        if (selectCategories == "all") {
          if (amountCards * 170 > heightGridTableRows) {
            heightGridTableRows += 1020;
            heightNewsWrapRows += 1020;
            $(".table-cards-rows").css("height", `${heightGridTableRows}px`);
            $(".news-container").css("height", `${heightNewsWrapRows}px`);
          }
        } else {
          if (amountCardsCategories * 170 > heightGridTableRows) {
            heightGridTableRows += 510;
            heightNewsWrapRows += 510;
            $(".table-cards-rows").css("height", `${heightGridTableRows}px`);
            $(".news-container").css("height", `${heightNewsWrapRows}px`);
          }
        }
      }
  });
  // /more cards button

  // more cards button mobile
  let heightCardsModible = 571;
  let heightNewsModible = 570;
  

  $(".button-more").click(function () {
    let selectCategories = document.querySelector(".insurance-button.active").getAttribute("data-f")
    let amountCardsCategories = document.querySelectorAll(`a[data-card="${selectCategories}"]`).length

    console.log(selectCategories)
    if (selectCategories == "all") {
      console.log(amountCards * 95)
      console.log(heightGridTableRows)
      if (amountCards * 95 > heightCardsModible) {
        console.log(1337)
          heightCardsModible += 570;
          $(".table-cards-rows").css("height", `${heightCardsModible}px`);
      }
    } else {
      if (amountCardsCategories * 95 > heightGridTableRows) {
        heightGridTableRows += 570;
        heightNewsWrapRows += 570;
        $(".table-cards-rows").css("height", `${heightGridTableRows}px`);
      }
    }
  });
  // /more cards button mobile

  // filter displays
  $(".icon-rows").css("fill", "#2B5FAE");

  $(".filter-display-columns").click(function () {
    $("#grid-table")
      .removeClass("table-cards-rows")
      .addClass("table-cards-columns");

    $(".icon-columns").css("fill", "#2B5FAE");
    $(".icon-rows").css("fill", "#2A2A2A");
    heightGridTableColumns = 1020;
    heightNewsWrapColumns = 805;
    $(".table-cards-columns").css("height", `${heightGridTableColumns}px`);
    $(".news-container").css("height", `${heightNewsWrapColumns}px`);
  });

  $(".filter-display-rows").click(function () {
    $("#grid-table")
      .removeClass("table-cards-columns")
      .addClass("table-cards-rows");

    $(".icon-rows").css("fill", "#2B5FAE");
    $(".icon-columns").css("fill", "#2A2A2A");
    heightGridTableRows = 1020;
    heightNewsWrapRows = 625;
    $(".table-cards-rows").css("height", `${heightGridTableRows}px`);
    $(".news-container").css("height", `${heightNewsWrapRows}px`);
  });
  //  /filter displays
});
