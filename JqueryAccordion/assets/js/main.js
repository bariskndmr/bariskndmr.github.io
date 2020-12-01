$(".button").click(function () {
  
    $(this).parent("li").siblings("li").removeClass().children(".content").slideUp();
    
    $(this).parent("li").toggleClass("active").children(".content").slideToggle();
   
  });