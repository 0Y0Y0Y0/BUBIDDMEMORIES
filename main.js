$(document).ready(function () {
	$('.menu-toggler').on('click',function(){
		$(this).toggleClass('open');	
		$('.top-nav').toggleClass('open');	
	});
	$('.top-nav .nav-link').on('click',function(){
		$('.menu-toggler').removeClass('open');	
		$('.top-nav').removeClass('open');	
	});
	$('nav a[href*="#"]').on('click', function (){
       $('html, body').animate({
           scrollTop: $($(this).attr('href')).offset().top - 100
       }, 2000);
   	}); 
	
	$('#up').on('click', function (){
       $('html, body').animate({
           scrollTop: 0
       }, 2000);
   	}); 
	
	AOS.init({
		easing: 'ease',
		duration: 1800
	})
	let cursor = document.querySelector('cursor');
	document.addEventListener('mousemove',moveCursor);
	function moveCursor(e){
		let x= e.clientX;
		let y= e.clientY;
		console.log(x,y);
		
		cursor.style.left = '${x}px';
		cursor.style.top = '${y}px';
	}
});