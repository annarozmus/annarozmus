$(function () {

    var smallBox = $(".small-box");

    var animate = function (that, background, margin) {
        $(that).animate().stop().animate({
            "background-size": background
        }, 400).find(".wrap").animate().stop().animate({
            "marginTop": margin
        }, 400)
    };


    smallBox.hover(function () {
        animate(this, "160%", "-=15px");
    }, function () {
        animate(this, "140%", "0");
    });
});