$(document).ready(function (){
    var hmbrgr = $(".hamburger-button");

    hmbrgr.click(function (){
        var navMobile = $(".site-nav-mobile");
        var body = $("body");
        navMobile.toggleClass("active");
        body.toggleClass("activebody");
    });
});