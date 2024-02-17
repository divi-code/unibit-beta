(function() {
    var autoSlide, autoSlideInterval, autoSlideTimer, carousel, next, prev, seats;
  
    carousel = $('.carousel');
  
    seats = $('.carousel-seat');
  
    autoSlideInterval = 3000;
  
    next = function(el) {
      if (el.next().length > 0) {
        return el.next();
      } else {
        return seats.first();
      }
    };
  
    prev = function(el) {
      if (el.prev().length > 0) {
        return el.prev();
      } else {
        return seats.last();
      }
    };
  
    autoSlide = function() {
      var el, i, j, new_seat, ref;
      el = $('.is-ref').removeClass('is-ref');
      new_seat = next(el);
      carousel.removeClass('is-reversing');
      new_seat.addClass('is-ref').css('order', 1);
      for (i = j = 2, ref = seats.length; (2 <= ref ? j <= ref : j >= ref); i = 2 <= ref ? ++j : --j) {
        new_seat = next(new_seat).css('order', i);
      }
      carousel.removeClass('is-set');
      return setTimeout((function() {
        return carousel.addClass('is-set');
      }), 100);
    };
  
    $('.toggle').on('click', function(e) {
      var autoSlideTimer, el, i, j, new_seat, ref;
      clearInterval(autoSlideTimer);
      el = $('.is-ref').removeClass('is-ref');
      if ($(e.currentTarget).data('toggle') === 'next') {
        new_seat = next(el);
        carousel.removeClass('is-reversing');
      } else {
        new_seat = prev(el);
        carousel.addClass('is-reversing');
      }
      new_seat.addClass('is-ref').css('order', 1);
      for (i = j = 2, ref = seats.length; (2 <= ref ? j <= ref : j >= ref); i = 2 <= ref ? ++j : --j) {
        new_seat = next(new_seat).css('order', i);
      }
      carousel.removeClass('is-set');
      setTimeout((function() {
        return carousel.addClass('is-set');
      }), 100);
      return autoSlideTimer = setInterval(autoSlide, autoSlideInterval);
    });
  
    autoSlideTimer = setInterval(autoSlide, autoSlideInterval);
  
  }).call(this);
  $(document).ready(function(){
    $('.navbar-toggler').on('click',function(){
      $('div#navbarNavDropdown').toggle();
    })
    $('a#dropabout').on('click',function(e){
      e.preventDefault();
      $(this).next('.dropdown-menu').toggle();
    });
    $('#dropgallery').on('click',function(e){
      e.preventDefault();
      $(this).next('.dropdown-menu').toggle();
    });
  })
  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("disb");
let dots = document.getElementsByClassName("number-slide");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" actives", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " actives";
}