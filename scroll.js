
var w = $(window).width()
var circleWidth = $('.teacher-circle').width()
var barWidth = $('.teacher-bar').width()
var barMax = barWidth - w*0.4 - circleWidth / 2
var barMax2 = barMax - circleWidth / 2
var barMin = circleWidth / 2

var teacherBox = $('.teacher-box').width()
var displace = 0

// barMax設定為bar的全長



$('.arrow-next').addClass('arrow-next-active')


function teacher(){
    $('.arrow-next').click(function(){
        $('.arrow-pre').addClass('arrow-pre-active')
        if(displace<barMax2){            // barMax設定為bar的全長
            displace = displace+teacherBox
            if(displace>barMax2){
                $('.arrow-next').removeClass('arrow-next-active')
            }
        }
        $('.teacher-bar').animate({'margin-left':-displace},300)
    })
    $('.arrow-pre').click(function(){
        $('.arrow-next').addClass('arrow-next-active')
        if(displace>0){
            displace = displace-teacherBox
            if(displace<barMin){
                $('.arrow-pre').removeClass('arrow-pre-active')
            }
        }
        $('.teacher-bar').animate({'margin-left':-displace},300)
    }) 
}

teacher()














