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

  $(".nav-button").click(function(event){
  	$(".header").addClass("is-nav-open");
  });
  $(".close-button").click(function(event){
  	$(".header").removeClass("is-nav-open");
  });


});