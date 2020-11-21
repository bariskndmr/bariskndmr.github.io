$(document).ready(function () {
    var owl = $('.owl-carousel');
    var hamburger = $(".hamburger-button");

    hamburger.click(function () {
        var navMobile = $(".site-nav-mobile");
        var body = $("body");
        var logo = $("#logo");

        $(this).toggleClass("change");
        navMobile.toggleClass("active");
        body.toggleClass("activebody");
        logo.toggleClass("change-color");

    });

    owl.owlCarousel({
        loop:true,
        margin:20,
        responsive:{
            0:{
                items:1
            },
            760:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

});