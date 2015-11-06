$(document).ready(function(){

	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) ? fixContent() : window.requestAnimationFrame(fixContent);
	});

	function fixContent() {
		var offsetTop = $('.main-content').offset().top,
			scrollTop = $(window).scrollTop();
		( scrollTop >= offsetTop ) ? $('.main-content').addClass('is-fixed') : $('.main-content').removeClass('is-fixed');
	}

	//mobile nav - open/close navigation
	$('.mobile-nav-trigger').on('click', function(event){
		event.preventDefault();    
		$('.header').toggleClass('is-nav-open');
		$('html').toggleClass("is-locked");
	});

	$('.has-children').children('a').on('click', function(event){
		event.preventDefault();
		$(this).next('.nav-children').removeClass('is-hidden');
	});

	$('.go-back').on('click', function(event){
		event.preventDefault();    
		$('.nav-children').addClass('is-hidden');
	});

	//mobile nav close btn
	$('.close-btn').on('click', function(event){
		event.preventDefault();    
		$(".header").removeClass("is-nav-open");
		$('html').removeClass("is-locked");
	});

	// mobile nav click outside to close menu
    $('.content-blocker').on('click', function(){
		$('.header').removeClass('is-nav-open');
		$('html').removeClass("is-locked");
	});

	// search function
	$('.start-search-trigger').on('click', function(event){
		event.stopPropagation();
		event.preventDefault();
		toggleSearch();
	});

	// hide search when clicking on overlay
    $('.search-overlay').on('click', function(){
		toggleSearch('close')
		$(this).removeClass('is-visible');
	});

	function toggleSearch(type) {
		if(type=="close") {
			//close serach 
			$('.start-search').removeClass('is-visible');
			$('.start-search-trigger').removeClass('search-is-visible');
			$('.search-overlay').removeClass('search-is-visible');
			$('html').removeClass("is-locked");

		} else {
			//toggle search visibility
			$('html').toggleClass("is-locked");
			$('.header').removeClass('is-nav-open');
			$('.header').toggleClass('search-is-visible');
			$('.start-search').toggleClass('is-visible');
			$('.start-search-trigger').toggleClass('search-is-visible');
			$('.search-overlay').toggleClass('search-is-visible');
			$('.start-search').find('input[type="search"]').focus();
			($('.start-search').hasClass('is-visible')) ? $('.search-overlay').addClass('is-visible') : $('.search-overlay').removeClass('is-visible') ;
		}
	}

	// check if device supports touchevents
	if ( 'ontouchstart' in window )
		$('body').addClass('touchevents');

});