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
			}, 300);
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

	//dropdown list function
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

	//modal image function
	function toggleModal(image){
		var modal = $('<div class="modal"></div>');
		image.click(function(){
			var img = $('<img src="img/' + this.id + '.png">');
			var caption = $('<p class="caption ' + this.id + '"></p>'); 
			$(modal).append(img, caption);
			$('body').append(modal);
			$('.appraisal01').html(
				'This is the screen that is presented after a user clicks the "Book a Valuation" button.<br/><br/>They must fill in their personal details before seeing the list of available appointments.');
			$('.appraisal02').html(
				'Once there is a valid post code match against your offices, the user is presented with a diary screen where unavailable times are not visible.<br/><br/>National holidays and company event days can be booked out by default to ensure appointments are not made on these days.');
			$('.appraisal03').html(
				'As soon as an appointment slot has been selected, the user will be requested for further details.');
			$('.appraisal04').html(
				'Here is an example of how a successful appointment booking looks.');
			$('.appraisal05').html(
				'The email the client receieves as confirmation.');
			$('.appraisal06').html(
				'The SMS message the client receieves as confirmation.');
			if($(modal).css('display') == 'none'){
				$(modal).css('display', 'block');
			}
		});
		$(modal).click(function(){
			$(this).css('display','none').empty();
		});
	}

	toggleModal($('.item'));

});