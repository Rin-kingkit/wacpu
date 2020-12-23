$(document).ready(function(){

    //list

    $('.inside-list-open').click(function(){

        var listBarHeight = $('.list-bar').height()

        $('.co-list .list-frame').animate({height:listBarHeight},800)
        $('.inside-list-btn').fadeOut()

    })

    //photo

    $('.photo-btn').click(function(){

        var photoContainerHeight = $('.photo-container').height()
        var photoFrameHeight = photoContainerHeight + 45

        $('.photo-frame').animate({height:photoFrameHeight},800)
        $('.photo-btn').fadeOut()
    })

})

