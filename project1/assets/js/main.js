$(document).ready(function(){
    var owl = $('.owl-carousel');
    var hmbrgr = $(".hamburger-button");

    hmbrgr.click(function () {
        var navMobile = $(".site-nav-mobile");
        var body = $("body");
        navMobile.toggleClass("active");
        body.toggleClass("activebody");
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                
            },
            550:{
                items:2,
                
            },
            1000:{
                items:3,
            },
    
            1300:{
                items:4,
                loop:true
            }
        }
    })
});