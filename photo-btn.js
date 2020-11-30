//list

var listBarHeight = $('.list-bar').height()
var listFrameHeight = photoContainerHeight + 45

$('.inside-list-btn').click(function(){
    $('.co-list .list-frame').animate({height:listFrameHeight},800)
    $('.collaboration-btn').fadeOut()
    console.log(listBarHeight)
})



//photo

var photoContainerHeight = $('.photo-container').height()
var photoFrameHeight = photoContainerHeight + 45

$('.photo-btn').click(function(){
    $('.photo-frame').animate({height:photoFrameHeight},800)
    $('.photo-btn').fadeOut()
    console.log(photoContainerHeight)
})