$(document).ready(function(){
    setTimeout(function(){  //設定讀取後1毫秒才執行

        var w = $(window).width() //視窗寬度
        var circleWidth = $('.teacher-circle').width() //teacher-circle寬度
        var barWidth = $('.teacher-bar').width()
        var barMax = barWidth - w*0.4 - circleWidth / 2
        var barMax2 = barMax - circleWidth / 2
        var barMin = circleWidth / 2
        
        var teacherBox = $('.teacher-box').width()
        var displace = 0
    
    console.log(barWidth)
    
    $('.arrow-next').addClass('arrow-next-active')
    
    function teacher(){
    $('.arrow-next').click(function(){
            $('.arrow-pre').addClass('arrow-pre-active')
            if(displace<barMax2){   
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






    },100)
});


















