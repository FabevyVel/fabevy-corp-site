$(document).ready(function(){

    $(".mobile_btn").click(function(){
        $(".menu").toggleClass("active_menu");
        $(".mobile_menu").toggleClass("active");
    })  

    $(window).scroll(function(){
    	if($(this).scrollTop() > 200){
    		$(".header_section").addClass("sticky");
    	}
    	else{
    		$(".header_section").removeClass("sticky");
    	}
    });      

});
 


 