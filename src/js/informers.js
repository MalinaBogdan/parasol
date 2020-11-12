$(document).ready(function () {
    $(".input-prompt").hover(
        function () {
            $(this).children(".informer-wrap").css("display", "block");
            let coordinateRight = $(this).children(".informer-wrap").offset().left + $(this).children(".informer-wrap").width();
            let coordinateTop = $(this).children(".informer-wrap").offset().top;
            let halfWidth = ($(this).children(".informer-wrap").width() - 10) / 2;


            if ((coordinateRight + halfWidth) > $(window).width()) {
                $(this).children(".informer-wrap").addClass("right-0");
            }
            if (coordinateTop < $(".profile-content-wrap").offset().top) {
                $(this).children(".informer-wrap").addClass("top-20");
            }
        }, function () {
            $(this).children(".informer-wrap").css("display", "none");
        }
    );
});
