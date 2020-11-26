function courseBtn(){
    $('.btn').click(function(){
        $('.btn').removeClass('btn-on').addClass('btn-off')
        $('.btn-text').removeClass('btn-text-on').addClass('btn-text-off')
        $(this).removeClass('btn-off').addClass('btn-on')
        $(this).find('.btn-text').removeClass('btn-text-off').addClass('btn-text-on')
        console.log('12')
    })
}
function courseLevel(){
    $('.btn1').click(function(){
        $('.course-frame').fadeOut(100)
        $('.level1').fadeIn(500)
    })
    $('.btn2').click(function(){
        $('.course-frame').fadeOut(100)
        $('.level2').fadeIn(500)
    })
    $('.btn3').click(function(){
        $('.course-frame').fadeOut(100)
        $('.level3').fadeIn(500)
    })
}


$('document').ready(function(){
    courseBtn()
    courseLevel()
    
})

