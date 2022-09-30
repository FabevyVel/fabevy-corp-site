$(document).ready(function(){
	// Menu toggle for mobile menu 
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


// Port folio 
let _all = document.getElementsByClassName("all");
let portLink = document.getElementsByClassName("port-link");
let notIndx = 0;
for(let i = 0; i < _all.length; i++){
    _all[i].classList.add("show-port");
}
for(let i = 0; i < portLink.length; i++){
    portLink[i].addEventListener("click", function(e){
        e.preventDefault(); 
        if(notIndx != i){
            activePort(this.dataset.port, i);
            document.getElementsByClassName("active-port")[0].classList.remove("active-port");
            document.getElementsByClassName("port-link")[i].classList.add("active-port");
        }
    })
}
function activePort(obj, n){
    notIndx = n;
    var getPort,
    showPort = document.getElementsByClassName("show-port");
    if(obj != "all"){
        getPort = document.getElementsByClassName(obj);
        for(let i = 0; i < _all.length; i++){
            _all[i].classList.remove("show-port");
            _all[i].classList.add("hide-port");
        }
        setTimeout(function(){
            _removeHidePort();
            for(let i = 0; i < getPort.length; i++){
                getPort[i].classList.add("show-port");
            }
        }, 300);
        
    }else{
        for(let i = 0; i < showPort.length; i++){
            showPort[i].classList.add("hide-port");
            showPort[i].classList.remove();  
        }
        setTimeout(function(){ 
            _removeHidePort();
            for(let i = 0; i < _all.length; i++){
                _all[i].classList.add("show-port");
            }
        }, 300);
        
    }
    
    
}
function _removeHidePort(){
    for(let i = 0; i < _all.length; i++){
        _all[i].classList.remove("hide-port");
    }
}
