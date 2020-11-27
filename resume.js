function list(){
    $('.collaboration-btn').click(function(){
        $('.list').fadeIn()
        $('html,body').addClass('back-fixed')
    })
    $('.cross').click(function(){
        $('.list').fadeOut()
        $('html,body').removeClass('back-fixed')
    })
}




$(document).ready(function(){
    console.log('123')
    list()







    });