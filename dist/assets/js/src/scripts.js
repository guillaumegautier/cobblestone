function mapscroll(){$("#map").addClass("scrolloff"),$("#overlay").on("mouseup",function(){$("#map").addClass("scrolloff")}),$("#overlay").on("mousedown",function(){$("#map").removeClass("scrolloff")}),$("#map").mouseleave(function(){$("#map").addClass("scrolloff")})}function menutop(){var o=$(window).scrollTop();o>100?$("header").addClass("top"):$("header").removeClass("top")}function menutoggle(){$("button.menu-toggle").click(function(){$(this).toggleClass("open"),$("header").toggleClass("opened")})}function scrollTo(){var o=$(".target").offset().top,e=$("header").outerHeight(),l=o-e;$(".trigger").click(function(){$("html,body").animate({scrollTop:l},"slow")})}