"use strict";
$(document).ready(function(){

	//slide all the other content off screen
	var home = $('#home');
	var back = $('#back');
	function slideOff(){
		$(home).animate({
			opacity: 0,
			transform: "translateX(5px)"
		}, 300);
		setTimeout(function(){
			$(home).css('display','none');
		}, 300);
	};

	//slides on the new content
	function slideOn(page){
		setTimeout(function(){
			$(page).css('display', 'block');
			$(back).css('display', 'block');
		}, 300);
	};

	//trigger the relevant page when its button is clicked
	$('.button').on("click", function(){
		slideOff();
		var pageToSlide = $('.'+this.id);
		slideOn(pageToSlide);
	});

	//let the user go back to home
	$(back).click(function(){
		$(home).animate({
			opacity: 1,
			transform: "translateX(5px)"
		}, 300);
		$(home).css('display','block');
		$('.marketing, .viewing, .information, .examples').css('display','none');
		$(this).css('display', 'none');
	});
});