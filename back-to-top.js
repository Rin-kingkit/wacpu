function backToTop(){
    $('.back-to-top').click(function(){ 
        $('html,body').animate({scrollTop:0}, 500);
    })
}

$(document).ready(function(){
    backToTop()
})