$(document).ready(function () {
    var hamburger = $(".hamburger-button");

    hamburger.click(function () {
        var navMobile = $(".site-nav-mobile");
        var body = $("body");

        $(this).toggleClass("change");
        navMobile.toggleClass("active");
        body.toggleClass("activebody");
    });

    $('#home-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    })

    $('#shop-carousel').owlCarousel({
        loop:false,
        margin:10,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

});

