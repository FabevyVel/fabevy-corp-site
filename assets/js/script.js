$(document).ready(function(){
	// Menu toggle for mebile menu 
	var navLinkMob = document.getElementsByClassName("nav-link-mb");
	var dropdownMenuMob = document.getElementsByClassName("dropdown-menu-mb");
	var menuBtn = document.getElementById("menu-toggle-btn");
	var menuMob = document.getElementsByClassName("header-menu-mb")[0];

	menuBtn.addEventListener("click", ()=>{
		menuMob.classList.toggle("active-nav-mb");
		menuBtn.classList.toggle("active-close-btn");
		for(let i = 0; i < dropdownMenuMob.length; i++){
			$(dropdownMenuMob[i]).slideUp();
		}
	})

	
	for(var i = 0; i < navLinkMob.length; i++){
		
		$(navLinkMob[i]).click(function(e){
			e.preventDefault();
		    $(this).parent("li").children(".dropdown-menu-mb").slideToggle();
		});
		
	}


});

