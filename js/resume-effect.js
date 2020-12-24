var windowW = $(window).width()

function resumeEffect(){

    $(window).scroll(function(){
        var scrollVal = $(this).scrollTop()
        var windowH = $(this).height()
        var resumeEffect1 = $('.resume-effect1').offset().top - windowH * 3 / 4
        var resumeEffect2 = $('.resume-effect2').offset().top - windowH * 3 / 4

       
        if(scrollVal>resumeEffect1){
            $('.resume-effect1').addClass('home-effect-on')
        }
        if(scrollVal>resumeEffect2){
            $('.resume-effect2').addClass('home-effect-on')
        }

    })
}


if(windowW>992){
    resumeEffect()
}