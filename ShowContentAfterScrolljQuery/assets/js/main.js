
$(window).scroll(function(event){
    $('.box').each(function(index){
        var docPosition = $(document).scrollTop();
        if(docPosition > 20){
            if(index === 0){
                $(this).addClass('show');
            }
            else{
                $(this).removeClass('show');
            }
        }
        if(docPosition > 160){
            if(index === 1){
                $(this).addClass('show');
            }
            else{
                $(this).removeClass('show');
            }
        }
        if(docPosition > 360){
            if(index === 2){
                $(this).addClass('show');
            }
            else{
                $(this).removeClass('show');
            }
        }
        if(docPosition > 580){
            if(index === 3){
                $(this).addClass('show');
            }
            else{
                $(this).removeClass('show');
            }
        }
        if(docPosition > 800){
            if(index === 4){
                $(this).addClass('show');
            }
            else{
                $(this).removeClass('show');
            }
        }
        if(docPosition > 1000){
            if(index === 5){
                $(this).addClass('show');
            }
            else{
                $(this).removeClass('show');
            }
        }
        console.log(docPosition)
    })
});

