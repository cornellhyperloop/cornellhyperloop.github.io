const spinspeed = .09
var header;
var sticky;
var logo_symbol;

function pageSpecificOnLoad(){
  console.log("Loading about")
  window.onscroll = function() { handleWindowScroll() }

  header = document.getElementsByTagName('header')[0]
  logo_symbol = document.getElementsByClassName("logo-symbol")[0]
  // sticky = header.offsetHeight * .9;
  sticky = 20;

}

// Get the navbar

// Get the offset position of the navbar

function handleWindowScroll(){

  const spin = spinspeed*360*(window.pageYOffset / 112)
  logo_symbol.style.transform = "rotateZ("+String(spin)+"deg)"
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky-header")
  } else {
    header.classList.remove("sticky-header");
  }
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
