var headerH = $('header').height()
var bannerH = $('.banner-block').height()
var gapH = $('.gap').height()
var subjectH = $('.subject').height()

var h1 = headerH+bannerH+gapH+subjectH+200

var scrollDisplace = $(window).scrollTop()

$(window).scroll(function(){
    if(scrollDisplace>h1){
        // $('.depiction').css('color','#fff')
    }
})