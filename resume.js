function list(){
    $('.collaboration-btn').click(function(){
        $('.list').addClass('popup')
        $('body').addClass('back-fixed')
    })
    $('.cross').click(function(){
        $('.list').removeClass('popup')
        $('body').removeClass('back-fixed')
    })
}




$(document).ready(function(){
    console.log('123')
    list()







    });