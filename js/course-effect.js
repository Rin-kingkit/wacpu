var windowW = $(window).width()

function courseEffect(){

    $(window).scroll(function(){
        var scrollVal = $(this).scrollTop()
        var windowH = $(this).height()
        var courseEffect1 = $('.course-effect1').offset().top - windowH * 3 / 4
        var courseEffect2 = $('.course-effect2').offset().top - windowH * 3 / 4

       
        if(scrollVal>courseEffect1){
            $('.course-effect1').addClass('home-effect-on')
        }
        if(scrollVal>courseEffect2){
            $('.course-effect2').addClass('home-effect-on')
        }

    })
}


if(windowW>992){
    courseEffect()
}