function parallax(){
    $(window).scroll(function(){
        var windowScroll = $(window).scrollTop()
        var aboutOffset1 = $('.about01').offset().top
        ball1 = windowScroll/10 + aboutOffset1 -150
        $('.about01 .decoration-circle').offset({top:ball1})
    
        var aboutOffset2 = $('.about02').offset().top
        ball2 = windowScroll/14 + aboutOffset2 
        $('.about02 .decoration-circle').offset({top:ball2})
    
        var aboutOffset3 = $('.about03').offset().top
        ball3 = windowScroll/6 + aboutOffset3 -300
        $('.about03 .decoration-circle').offset({top:ball3})
    
    })
}


$(document).ready(function(){
    setTimeout(function(){ 
        var windowWidth = $(window).width()
        if(windowWidth>992){
            parallax()
        }
    },100)
});
