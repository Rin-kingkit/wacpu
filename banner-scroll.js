
var bannerHeight = $('.banner').height()

$('.scroll').click(function(){
    $('html,body').animate({scrollTop:bannerHeight}, 1000);
})

