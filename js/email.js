"use strict";
$(document).ready(function(){

	//let the user go back to home
	$('.homebutton, #back').click(function(){
		$('#home').css('display','block').removeClass('slide');
		$('.marketing, .viewing, .information, #back').css('display','none');
	});

	//smooth scrolling 
	function smoothScroll(button, div){
		button.click(function(){
			$('html, body').animate({
				scrollTop: div.offset().top - 10
			}, 300);
		});
	}

	smoothScroll($('#valueScroll'),$('#valueDiv'));
	smoothScroll($('#notifScroll'),$('#notifDiv'));
	smoothScroll($('#glosetScroll'),$('#glosetDiv'));
	smoothScroll($('#back, .homebutton'),$('html'));
	smoothScroll($('.menuButton'), $('html'));
	smoothScroll($('#viewValueScroll'),$('#viewValueDiv'));
	smoothScroll($('#viewNotifScroll'),$('#viewNotifDiv'));

	//slide all the home content off screen
	function slideOff(){
		$('.marketing, .viewing, .information').css('display', 'none');
		$('#home').addClass('slide')
		setTimeout(function(){
			$('#home').css('display','none');
		}, 300);
	}

	//go to new content
	function goTo(page){
		setTimeout(function(){
			$(page).css('display', 'block');
			$('#back').css('display', 'block');
		}, 300);
	}

	//used for footer links
	//trying to get this to work for the menu buttons
	//but struggling to pass "this" as an argument correctly
	function goToPage(name, page){
		name.click(function(){
			slideOff();
			goTo(page);
		});
	}

	$('.menuButton').click(function(){
		slideOff();
		goTo($('.'+this.id));
	});
	goToPage($('#appraisalFooterLink'), $('.marketing'));
	goToPage($('#viewingFooterLink'), $('.viewing'));
	goToPage($('#supportFooterLink'), $('.information'));

	//dropdown list 
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

	//modal image 
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
			$('.appraisal03, .viewing03').html(
				'As soon as an appointment slot has been selected, the user will be requested for further details.');
			$('.appraisal04, .viewing04').html(
				'Here is an example of how a successful booking looks.');
			$('.appraisal05, .viewing05').html(
				'The email the client receieves as confirmation.');
			$('.appraisal06').html(
				'The SMS message the client receieves as confirmation.');
			$('.viewing01').html(
				'This is the screen that is presented after a user clicks the "Book a Viewing" button.');
			$('.viewing02').html(
				'The viewer is shown available diary entries based on configuration. This is only for property managers, job title specific negotiators or specific negotiators.');
			$('.rps01').html(
				'Here is an example of the task being created and alerted for an appointment on the organiser screen.');
			$('.rps02').html(
				'Here is an example of the diary entry being created.');
			$('.rps03').html(
				'Here is an example of the viewing reminder being created on the organiser screen.');
			$('.rps04').html(
				'Finally here is the applicant being created in RPS.');
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