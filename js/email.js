"use strict";
$(document).ready(function(){

	//slide all the other content off screen
	var home = $('#home');
	var back = $('#back');
	function slideOff(){
		$(home).addClass('slide')
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
		
		//get the id of the button that was clicked and add it as a class name
		//the button ids match the class names of the different forms they open
		var pageToSlide = $('.'+this.id);
		slideOn(pageToSlide);
	});

	//let the user go back to home
	$(back).click(function(){
		$(home).css('display','block').removeClass('slide');
		$('.marketing, .viewing, .information, .examples').css('display','none');
		$(this).css('display', 'none');
	});
});