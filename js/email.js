"use strict";
$(document).ready(function(){
	//getting the buttons
	var marketing = $('#marketButton'),
		viewing = $('#viewingButton'),
		info = $('#infoButton'),
		examples = $('#examplesButton');

	//creating a function that will slide all the other content off screen
	function slideOff(){
		var home = $('#home');
		$(home).animate({
			opacity: 0,
			transform: "translateX(5px)"
		}, 500);
		$(home).css('display','none');
	};
	//creating a function that slides on the new content
	function slideOn(page){
		$(page).css('display', 'block');
		$(page).animate
	};
	//trigger the relevant page when its button is clicked
	$('.button').on("click", function(){
		slideOff();
		slideOn(market);
	});
});