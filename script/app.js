$(function() {

    let header = $("#header");
    let intro = $("#intro");
    let introHeight;
    let scrollPosition = $(window).scrollTop();

    $(window).on("scroll load resize", function(){
        introHeight = intro.innerHeight();
        scrollPosition = $(this).scrollTop();

        if(scrollPosition > introHeight) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
        console.log(scrollPosition);

    });

});