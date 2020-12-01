$('.hamburger-icon').click(function(){
    $('.hamburger-icon').fadeOut(300)
    $('.close-icon').fadeIn(800)
    $('.navi').animate({top:'0'},300)
    $('.navi .nav').fadeIn(800)
    $('.navi .fb-link').fadeIn(600)
    $('html,body').addClass('back-fixed')
})

$('.close-icon').click(function(){
    $('.close-icon').fadeOut(300)
    $('.hamburger-icon').fadeIn(800)
    $('.navi').animate({top:'-100vh'},300)
    $('.navi .nav').fadeOut(100)
    $('.navi .fb-link').fadeOut(300)
    $('html,body').removeClass('back-fixed')
})