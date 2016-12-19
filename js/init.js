var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var info = document.getElementsByClassName("myInfo");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
     info[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";
  info[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
}


(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel();

		// Next slide
		$('.carousel').carousel('next');
		$('.carousel').carousel('next', 3); // Move next n times.
		// Previous slide
		$('.carousel').carousel('prev');
		$('.carousel').carousel('prev', 4); // Move prev n times.
		// Set to nth slide
		$('.carousel').carousel('set', 4);

		$('.carousel.carousel-slider').carousel({full_width: true});
  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('.slider').slider({full_width: true});
  });

$(document).ready(function(){
    $('.carousel').carousel();
  });


$(window).scroll(function() {
	if ($(this).scrollTop() > 1){
		$('header').addClass("sticky");
	}
	else{
		$('header').removeClass("sticky");
	}
});
