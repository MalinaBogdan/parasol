$(document).ready(function () {
  let heightGridTableRows = 1020;
  let heightGridTableColumns = 1200;
  let heightNewsWrapRows = 625;
  let heightNewsWrapColumns = 805;
  let amountCards = $(".wrapper-grid").length;
  let amountNews = $(".news-card").length;

  if (jQuery(window).width() < 1200) {
    $("#grid-table")
      .removeClass("table-cards-columns")
      .addClass("table-cards-rows");
    $(".table-cards-rows").css("height", "1020px");
  }

  // filter categories
  $(".insurance-button").click(function () {
    if ($("#grid-table").hasClass("table-cards-columns")) {
      heightGridTableColumns = 1200;
      heightNewsWrapColumns = 805;
      $(".table-cards-columns").css("height", `${heightGridTableColumns}px`);
      $(".news-container").css("height", `${heightNewsWrapColumns}px`);
    }
    if ($("#grid-table").hasClass("table-cards-rows")) {
      heightGridTableRows = 1020;
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
      } else if (card.attr("data-card") == a) {
        card.removeClass("hidden");
        setTimeout(function () {
          card.css("display", "grid");
        }, 500);
      }
    });
  });
  // /filter categories
console.log(document.querySelectorAll( 'a[data-card="tour"]' ).length)

  // more cards button
  $(".more-cards-wrap").click(function () {
    let selectCategories = document.querySelector(".insurance-button.active").getAttribute("data-f")

    if (jQuery(window).width() < 1200) {
    }
    if (jQuery(window).width() < 767) {
    }


    if ($("#grid-table").hasClass("table-cards-columns")) {
      if (selectCategories == "all") {
        if ((amountCards / 3) * 400 > heightGridTableColumns) {
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
          console.log(2)
        }
     
    }
  });
  // /more cards button

  // more cards button mobile
  let heightCardsModible = 571;
  let heightNewsModible = 570;

  $(".button-more").click(function () {
    if (amountCards * 95 > heightCardsModible) {
      heightCardsModible += 570;
      $(".table-cards-rows").css("height", `${heightCardsModible}px`);
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
    heightGridTableColumns = 1200;
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
