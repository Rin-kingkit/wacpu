//list

var listBarHeight = $('.list-bar').height()
var listFrameHeight = photoContainerHeight + 45

$('.inside-list-open').click(function(){
    $('.co-list .list-frame').animate({height:listBarHeight},800)
    $('.collaboration-btn').fadeOut()
    // $('.collaboration-btn').addClass('collaboration-btn')
    console.log(listBarHeight)
})
// $('.collaboration-btn').click(function(){
//     $('.co-list .list-frame').animate({height:'390'},800)
//     $('.collaboration-btn').removeClass('collaboration-btn')
// })



//photo

var photoContainerHeight = $('.photo-container').height()
var photoFrameHeight = photoContainerHeight + 45

$('.photo-btn').click(function(){
    $('.photo-frame').animate({height:photoFrameHeight},800)
    $('.photo-btn').fadeOut()
    console.log(photoContainerHeight)
})