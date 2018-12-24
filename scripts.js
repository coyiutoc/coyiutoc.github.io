$(document).ready(function () {

  	$(window).bind('scroll', function() {
	     if ($(window).scrollTop() > 3) {
	         //$('#scroll-button').fadeOut();
	          $('.scroll-down').animate({opacity: 0}, 2);
	     }
	     else {
	         //$('#scroll-button').fadeIn();
	          $('.scroll-down').animate({opacity: 1}, 8);
	     }
	});

	$(".scroll-button").click(function() {
      $('html,body').animate({
          scrollTop: $("#projects-top").offset().top},
          'slow');
  	});

  	$("#back-to-top").click(function() {
      $('html,body').animate({
          scrollTop: $("#nav-bottom").offset().top},
          'slow');
  	});

 //  	$('.back-to-top').click(function(){
	//     $('html, body').animate({
	//         scrollTop: $('#nav-bottom').offset().top
	//     }, 1000);
	// }); 

  	$(function() {
    	$('body').removeClass('fade-out');
	});

});
