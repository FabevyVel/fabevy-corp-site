$(document).ready(function(){
			$("#enquire").attr("disabled",true);
			$(".enagagement_item").click(function(){
				$("#enquire").attr("disabled",false);
				//$(".enagagement_item").pseudo(":after","background-color","yellow");
			});
			$(".first_item,.second_item").click(function(event){
				event.preventDefault();
				$(this).toggleClass('special');
				var firstselect=$(".first_item").hasClass('special');
				var secondselect=$(".second_item").hasClass('special');
				if ((!firstselect) && (!secondselect)) {
  					$("#enquire").attr("disabled",true);
  				}
			});
		});
