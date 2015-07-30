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

  $('.mobile-nav-trigger').on('click', function(event){
    event.preventDefault();    
    $('.header').toggleClass('is-nav-open');
    $("body").toggleClass("is-locked");
  });

    $('.close-button').on('click', function(event){
    event.preventDefault();    
    $(".header").removeClass("is-nav-open");
    $("body").removeClass("is-locked");
  });

});