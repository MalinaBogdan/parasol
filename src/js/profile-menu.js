$(document).ready(function () {
    let coordinateActiveLi = $(".active-menu-li").offset().left - 30;
    $(".profile-menu-wrap").scrollLeft(coordinateActiveLi);
});
