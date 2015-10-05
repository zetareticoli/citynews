$(document).ready(function(){
  
    $(window).on('scroll', function(){
      (!window.requestAnimationFrame) ? fixContent() : window.requestAnimationFrame(fixContent);
    });

    function fixContent() {
      var offsetTop = $('.main-content').offset().top,
        scrollTop = $(window).scrollTop();
      ( scrollTop >= offsetTop ) ? $('.main-content').addClass('is-fixed') : $('.main-content').removeClass('is-fixed');
    }

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

  //mobile nav close btn
  $('.close-btn').on('click', function(event){
    event.preventDefault();    
    $(".header").removeClass("is-nav-open");
    $("body").removeClass("is-locked");
  });

});