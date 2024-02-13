let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");

  slideIndex = (n > slides.length) ? 1 : (n < 1) ? slides.length : n;

  Array.from(slides).forEach(slide => slide.style.display = "none");
  Array.from(dots).forEach(dot => dot.className = dot.className.replace(" active", ""));
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
if (window.innerWidth <= 767) {
  button.style.display = "none";
  console.log("Mindre skærmstørrelse - tilpas galleriet her");
}
else{
  button.style.display="block"
}