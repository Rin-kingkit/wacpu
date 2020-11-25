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
console.log(w)

// 600設定為bar的全長

function teacher(){
    $('.arrow-next').click(function(){
        if(displace<barMax){            // 600設定為bar的全長
            displace = displace+circleWidth+w*0.3
        }  
        $('.teacher-frame').scrollLeft(displace)
        console.log(displace)
    })
    $('.arrow-pre').click(function(){
        if(displace>0){
            displace = displace-circleWidth-w*0.3
        }
        $('.teacher-frame').scrollLeft(displace)
        console.log(displace)
    })
}

teacher()

// $('.arrow-next').click(function(){
//     replace = replace+circleWidth+w*0.3
//     $('.teacher-frame').scrollLeft(replace)

//     console.log(replace)
// })

// $('.arrow-pre').click(function(){
//     replace = replace-circleWidth-w*0.3
//     $('.teacher-frame').scrollLeft(replace)
// })





// $(window).scroll(function(){
//     if($(window).scrollTop()>200){
//         console.log('111111')
//     }
// })













// Ｘ位置改右上角
// 項目內容縫隙修改