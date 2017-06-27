"use strict";
$(document).ready(function(){

	//stop form submit from enter key
	$(window).keydown(function(event){
	    if(event.keyCode == 13) {
	      event.preventDefault();
	      return false;
	    }
  	});

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

	// calls
	smoothScroll($('#valueScroll'),$('#valueDiv'));
	smoothScroll($('#notifScroll'),$('#notifDiv'));
	smoothScroll($('#glosetScroll'),$('#glosetDiv'));
	smoothScroll($('#back, .button'),$('html'));
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

	// going to another page
	function goToPage(name, page){
		name.click(function(){ 
			slideOff();
			if(name.hasClass('button')){
				goTo($('.'+this.id));
			} else{
				goTo(page);
			}
		});
	}

	// calls
	goToPage($('.menuButton'));
	goToPage($('#appraisalFooterLink'), $('.marketing'));
	goToPage($('#viewingFooterLink'), $('.viewing'));
	goToPage($('#supportFooterLink'), $('.information'));

	//spinner animation when submitting
	$('#submit').click(function(){
		$('.spinner').css('display', 'block');
	});

	//add a negotiator to the list
	function addNegotiator(negoName, negoOffice, list){
		$('.addNegotiator').click(function(){
			if(negoName.val().length > 0 && negoOffice.val().length > 0){
				list.append('<div style="position: relative;"><label>Name: ' + negoName.val() + '</label><br/><br/><label>Office: ' + negoOffice.val() + '</label><div class="removeNegotiator"><i class="fa fa-times"></i></div><div class="line" style="margin: 15px 0;"></div></div>');
				negoName.val('')
				negoOffice.val('');
			}

			// remove negotiator
			$('.removeNegotiator').click(function(){
				$(this).parent().remove();
			});
		});
	}

	// calls
	addNegotiator($('#marketappSalesNegoName'), $('#marketappSalesNegoOffice'), $('#marketappSalesNegoList'));
	addNegotiator($('#marketappLettingsNegoName'), $('#marketappLettingsNegoOffice'), $('#marketappLettingsNegoList'));
	addNegotiator($('#viewingNegoName'), $('#viewingNegoOffice'), $('#viewingNegoList'));

	$('#marketExamples').on('click', function(){

		//remove the p tag that says click here
		$(this).parent().text('You can click here to see examples of this plugin.')

		//iterate and append all of the images
		for(var i=1; i < 9; i++){
			$('.marketingExample').append($('<div class="item" id="appraisal0' + [i] + '" style="background-image: url(assets/img/appraisal0' + [i] + '.png);"/></div>'));
		}

		//open a modal when the item is clicked
		var modal = $('<div class="modal"></div>');
		$('.item').click(function(){
			$(modal).append($('<img src = "assets/img/' + this.id + '.png"/>'));
			$('body').append(modal);
			if($(modal).css('display') == 'none'){
				$(modal).css('display', 'block');
			}
		});

		//close the modal
		$(modal).click(function(){
			$(this).css('display','none').empty();
		});

		return false;
	});

	$('#viewExamples').on('click', function(){

		//remove the p tag that says click here
		$(this).parent().text('You can click here to see examples of this plugin.')

		//iterate and append all of the images
		for(var i=1; i < 8; i++){
			$('.viewingExample').append($('<div class="item" id="viewing0' + [i] + '" style="background-image: url(assets/img/viewing0' + [i] + '.png);"/></div>'));
		}

		//open a modal when the item is clicked
		var modal = $('<div class="modal"></div>');
		$('.item').click(function(){
			$(modal).append($('<img src = "assets/img/' + this.id + '.png"/>'));
			$('body').append(modal);
			if($(modal).css('display') == 'none'){
				$(modal).css('display', 'block');
			}
		});

		//close the modal
		$(modal).click(function(){
			$(this).css('display','none').empty();
		});

		return false;
	});


	//this is close to working
	//using above for now

	// function exampleImages(link, div, identifier, amount){
	// 	link.on("click", function(){
	//		$(this).parent().remove();
	// 		for(var i=1; i<amount; i++){
	// 			div.append($('<div class="item" id="' + identifier.toString() + [i] + '" style="background-image: url(assets/img/' + identifier.toString() + [i] + '.png);"/></div>'));
	// 		}

	// 		var modal = $('<div class="modal"></div>');
	// 		$('.item').click(function(){
	// 			$('body').append(modal);
	// 			$(modal).append($('<img src = "assets/img/' + this.id + '.png"/>'));
	// 		});

	// 		$(modal).click(function(){
	// 			$(this).css('display','none').empty();
	// 		});

	// 		if($(modal).css('display' == 'none')){
	// 			$(modal).css('display', 'block');
	// 		}
	// 		return false;
	// 	});
	// }

	// exampleImages($('#marketExamples'), $('.marketingExample'), "appraisal0", 9);
	// exampleImages($('#viewExamples'), $('.viewingExample'), "viewing0",);

});