

var windowW = $(window).width()

function homeEffect(){

    $(window).scroll(function(){
        var scrollVal = $(this).scrollTop()
        var windowH = $(this).height()
        var homeEffect1 = $('.home-effect1').offset().top - windowH * 3 / 4
        var homeEffect2 = $('.home-effect2').offset().top - windowH * 3 / 4
        var homeEffect3 = $('.home-effect3').offset().top - windowH * 3 / 4
        var homeEffectA = $('.home-effectA').offset().top - windowH * 3 / 4
        var homeEffectB = $('.home-effectB').offset().top - windowH * 3 / 4
       
        if(scrollVal>homeEffect1){
            $('.home-effect1').addClass('home-effect-on')
        }
        if(scrollVal>homeEffect2){
            $('.home-effect2').addClass('home-effect-on')
        }
        if(scrollVal>homeEffect3){
            $('.home-effect3').addClass('home-effect-on')
        }
        if(scrollVal>homeEffectA){
            $('.home-effectA').addClass('home-effect-on')
        }
        if(scrollVal>homeEffectB){
            $('.home-effectB').addClass('home-effect-on')
        }
    })
}


if(windowW>992){
    homeEffect()
}

