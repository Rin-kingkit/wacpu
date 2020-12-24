function backToTop(){
    $('.back-to-top,.back-to-top-float').click(function(){ 
        $('html,body').animate({scrollTop:0}, 500);
    })
}

function backToTopScroll(){
    $('.back-to-top-float-box').fadeOut()
    
    $(window).scroll(function(){
        var scrollVal = $(this).scrollTop()
        var windowHeight = $(this).height() / 2
        if(scrollVal>windowHeight){
            $('.back-to-top-float-box').fadeIn(300)
        }else{
            $('.back-to-top-float-box').fadeOut(300)
        }
    })
}


$(document).ready(function(){
    backToTop()
    backToTopScroll()
})



