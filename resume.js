//list

var listBarHeight = $('.list-bar').height()
var listFrameHeight = photoContainerHeight + 45

$('.inside-list-open').click(function(){
    $('.co-list .list-frame').animate({height:listBarHeight},800)
    $('.collaboration-btn').fadeOut()
})



//photo

var photoContainerHeight = $('.photo-container').height()
var photoFrameHeight = photoContainerHeight + 45

$('.photo-btn').click(function(){
    $('.photo-frame').animate({height:photoFrameHeight},800)
    $('.photo-btn').fadeOut()
})