$('.hamburger-icon').click(function(){
    $('.hamburger-icon').fadeOut(300)
    $('.close-icon').fadeIn(800)
    $('.navi').animate({top:'0'},500)
    $('.navi .nav').fadeIn(1200)
    $('html,body').addClass('back-fixed')
})

$('.close-icon').click(function(){
    $('.close-icon').fadeOut(300)
    $('.hamburger-icon').fadeIn(800)
    $('.navi').animate({top:'-100vh'},500)
    $('.navi .nav').fadeOut(100)
    $('html,body').removeClass('back-fixed')
})