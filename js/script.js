// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});





// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});



// beim Klicken der Navigationsanker und des Logos soll das angesteuerte Ziel animiert aufgerufen werden
$('nav a,.logo,.mouse').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

//Scroll to top

$(document).ready(function(){
          $(function () {
           $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
             $('#scroll-to-top').fadeIn();
            } else {
             $('#scroll-to-top').fadeOut();
            }
           });
           $('#scroll-to-top').click(function () {
            $('body,html').animate({
             scrollTop: 0
            }, 800);
            return false;
           });
          });
          
    });

// accordion

var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

