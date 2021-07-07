
/* slide altomatico */
var slideIndex = 0;
showSlides()
function showSlides() {
  var i;

  var slides = document.getElementsByClassName("slide-container");

  var dots = document.getElementsByClassName("dot");


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-dot";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

/* slide comentários */
var comtaIndex = 1;
showSlidesComenta(comtaIndex);

function plusSlides(n) {
  showSlidesComenta(comtaIndex += n);
}

function currentSlide(n) {
  showSlidesComenta(comtaIndex = n);
}

function showSlidesComenta(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var perfil = document.getElementsByClassName("myPrfil");
  var dots = document.getElementsByClassName("dot-comete");
  if (n > slides.length) {comtaIndex = 1}    
  if (n < 1) {comtaIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      perfil[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot-comente ", "");
  }
  slides[comtaIndex-1].style.display = "block";  
  perfil[comtaIndex-1].style.display = "flex";  
  dots[comtaIndex-1].className += " active-dot-comente ";
}

/* controle slide capa */
var controleIndex = 1;
showSlidesControle(controleIndex);

function plusSlidesControle(n) {
  showSlidesControle(controleIndex += n);
}

function currentSlideControle(n) {
  showSlidesControle(controleIndex = n);
}

function showSlidesControle(n) {
  var i;
  var slides = document.getElementsByClassName("slide-container");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {controleIndex = 1}    
  if (n < 1) {controleIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[controleIndex-1].style.display = "block";  
  dots[controleIndex-1].className += " active-dot";
}