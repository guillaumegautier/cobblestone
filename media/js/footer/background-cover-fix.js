$(window).scroll(function() {
	var scrolledY = $(window).scrollTop();
	$('body').css('background-position', 'left ' + ((scrolledY)) + 'px');
});