const spinspeed = .5
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