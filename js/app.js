$(document).ready(function(){
    
    
    
    
    
    
    $('.header .arrow i').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('.features').offset().top
            
        }, 1000);
        
    });
    
    
    var leftArrow = $(".testim .fa-chevron-left"),
        rightArrow = $(".testim .fa-chevron-right");

    function checkPoint(){
if($(".client:first").hasClass("active")){
leftArrow.fadeOut();
}
        
else{

    leftArrow.fadeIn();

}

}
    checkPoint();

$(".testim i").click(function () {

    if ($(this).hasClass("fa-chevron-right")){

        $(".testim .active").fadeOut(100,function(){

            $(this).removeClass("active").next(".client").addClass("active").fadeIn();
   checkPoint();

});
}
    else
    
    {

$(".testim .active").fadeOut(100,function(){
$(this).removeClass("active").prev(".client").addClass("active").fadeIn();
    checkPoint();
});


} 
    
    
});


});

