$('.hamburger-icon').click(function(){
    $('.hamburger-icon').fadeOut(200)
    $('.hamburger-icon').addClass('icon-rotate')
    
    $('.close-icon').delay(300).fadeIn(300)
    $('.close-icon').removeClass('icon-rotate')

    $('.navi').animate({top:'0'},300)
    $('.navi .nav').fadeIn(800)
    $('.navi .fb-link').fadeIn(600)
    $('.navi .navi-bg-white').fadeIn(700)
    $('html,body').addClass('back-fixed')
})

$('.close-icon').click(function(){
    $('.close-icon').fadeOut(200)
    $('.close-icon').addClass('icon-rotate')

    $('.hamburger-icon').delay(300).fadeIn(300)
    $('.hamburger-icon').removeClass('icon-rotate')

    $('.navi').animate({top:'-100vh'},300)
    $('.navi .nav').fadeOut(100)
    $('.navi .fb-link').fadeOut(300)
    $('.navi .navi-bg-white').fadeOut(200)
    $('html,body').removeClass('back-fixed')
})