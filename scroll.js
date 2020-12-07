function scroll(){

}

// $('.teacher-circle').addClass('circle-small')
// $('.teacher-circle1').removeClass('circle-small')

var w = $(window).width()
var circleWidth = $('.teacher-circle').width()
var barWidth = $('.teacher-bar').width()
var barMax = barWidth - w*0.4 - circleWidth / 2
var space = circleWidth*0.4
var c1 = circleWidth / 2
var c2 = circleWidth *2

// $('.teacher-frame').scroll(function(){

//     var w = $(window).width()
//     space1 = w*0.3
//     space2 = space1*1.5
//     var displace = $('.teacher-frame').scrollLeft()

//     if( displace<space1 ){
//         $('.teacher-circle').addClass('circle-small')
//         $('.teacher-circle1').removeClass('circle-small')
//         console.log('111111')

//     }else if(displace>space1 && displace<space2){
//         $('.teacher-circle').addClass('circle-small')
//         $('.teacher-circle2').removeClass('circle-small')
//         console.log('2222222')
//     }
// })




var i = 1
var displace = 0


var barMax2 = barMax - circleWidth / 2
var barMin = circleWidth / 2

var teacherBox = $('.teacher-box').width()

console.log(w)
console.log(barMax)

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
        
        // $('.teacher-frame').scrollLeft(displace)
        $('.teacher-bar').animate({'margin-left':-displace},300)
        console.log(displace)
    })
    $('.arrow-pre').click(function(){
        $('.arrow-next').addClass('arrow-next-active')
        if(displace>0){
            displace = displace-teacherBox
            if(displace<barMin){
                $('.arrow-pre').removeClass('arrow-pre-active')
            }
        }
        
        // $('.teacher-frame').scrollLeft(displace)
        $('.teacher-bar').animate({'margin-left':-displace},300)
        console.log(displace)
    })
    
}
teacher()















// Ｘ位置改右上角
// 項目內容縫隙修改