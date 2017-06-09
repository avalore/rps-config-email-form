"use strict";
$(document).ready(function(){

	//slide all the other content off screen
	var home = $('#home');
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
			$('#back').css('display', 'block');
		}, 300);
	};

	//let the user go back to home
	$('.homebutton, #back').click(function(){
		$(home).css('display','block').removeClass('slide');
		$('.marketing, .viewing, .information, #back').css('display','none');
	});

	//smooth scrolling function 
	function smoothScroll(button, div){
		button.click(function(){
			$('html, body').animate({
				scrollTop: div.offset().top - 10
			}, 200);
		});
	};

	smoothScroll($('#valueScroll'),$('#valueDiv'));
	smoothScroll($('#notifScroll'),$('#notifDiv'));
	smoothScroll($('#glosetScroll'),$('#glosetDiv'));
	smoothScroll($('#back, .homebutton'),$('html'));
	smoothScroll($('.menuButton'), $('html'));
	smoothScroll($('#viewValueScroll'),$('#viewValueDiv'));
	smoothScroll($('#viewNotifScroll'),$('#viewNotifDiv'));

	//trigger the relevant page when its button is clicked
	$('.menuButton').on("click", function(){
		slideOff();

		//get the id of the button that was clicked and add it as a class name
		//the button ids match the class names of the different forms they open
		var pageToSlide = $('.'+this.id);
		slideOn(pageToSlide);
	});

	function display(button, div){
		button.click(function(){
			if(div.css('display') == 'none'){
				div.css('display','flex');
				button.html('Hide <i style="transform: rotate(90deg);" class="fa fa-chevron-right" aria-hidden="true"></i>');
			} else{
				div.css('display', 'none');
				button.html('Show <i class="fa fa-chevron-right" aria-hidden="true"></i>');
			}
		});
	}

	display($('#viewingExamplesShow'),$('.viewingGrid'));
	display($('#rpsExamplesShow'),$('.rpsGrid'));

});