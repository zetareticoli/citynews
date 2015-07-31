$(document).ready(function(){
  
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 486) {
          $(".meta-share").addClass("affixed");
      }
      else {
      	$(".meta-share").removeClass("affixed");
      }
  });

  //sliding nav - open/close navigation
  $('.sliding-nav-trigger').on('click', function(event){
    event.preventDefault();    
    $('.header').toggleClass('is-nav-sliding');
  });

  //mobile nav - open/close navigation
  $('.mobile-nav-trigger').on('click', function(event){
    event.preventDefault();    
    $('.header').toggleClass('is-nav-open');
    $("body").toggleClass("is-locked");
  });

  $('.has-children').children('a').on('click', function(event){
    event.preventDefault();
    $(this).next('.nav-children').removeClass('is-hidden');
  });

  $('.go-back').on('click', function(event){
    event.preventDefault();    
    $('.nav-children').addClass('is-hidden');
  });

  //mobile nav close button
  $('.close-button').on('click', function(event){
    event.preventDefault();    
    $(".header").removeClass("is-nav-open");
    $("body").removeClass("is-locked");
  });

});