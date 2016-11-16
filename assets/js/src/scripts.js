// Disable direct scroll on Google Maps

function mapscroll() {
	$('#map').addClass('scrolloff');                
	$('#overlay').on("mouseup",function(){         
		$('#map').addClass('scrolloff'); 
	});
	$('#overlay').on("mousedown",function(){        
		$('#map').removeClass('scrolloff')
	});
	$("#map").mouseleave(function () {              
		$('#map').addClass('scrolloff');            
	});
}

// Change header behaviour on scroll

function menutop(){
	var s = $(window).scrollTop();
	if (s > 100){
		$('header').addClass('top');
	}else{
		$('header').removeClass('top');
	}
}

// Toggle mobile menu

function menutoggle(){
	$('button.menu-toggle').click(function(){
		$(this).toggleClass('open');
		$('header').toggleClass('opened');
	});
}

// Scroll to

function scrollTo(){
	var skillTop = $('.target').offset().top;
	var headerHeight = $('header').outerHeight();
	var skTop = skillTop - headerHeight;

	$(".trigger").click(function () {
		$('html,body').animate({
			scrollTop: skTop
		}, 'slow');
	});
}


