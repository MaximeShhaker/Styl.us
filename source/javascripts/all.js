//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function(){

  //change navbar background

  $(window).on('scroll', function(){

    if ( $(this).scrollTop() > 120 ){
      $(".navbar").css("background-color", "black");
    } else {
      $(".navbar").css("background-color", "transparent");
    }

  });



  //smooth scroll

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});
