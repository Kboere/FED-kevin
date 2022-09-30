var hamburger = document.querySelector("header nav button");
var navMenu = document.querySelector(" header nav ul");
var navbar = document.querySelector(" header nav");

hamburger.addEventListener("click", mobileMenu);
console.log(hamburger);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navbar.classList.toggle("active");
}

var slide = document.querySelector("body.page2 main section article:nth-of-type(2) div div");
var btn1 = document.querySelector("body.page2 main section:first-of-type article:nth-of-type(2) ul li:first-of-type");
var btn2 = document.querySelector("body.page2 main section:first-of-type article:nth-of-type(2) ul li:nth-of-type(2)");
var btn3 = document.querySelector("body.page2 main section:first-of-type article:nth-of-type(2) ul li:nth-of-type(3)");

if(btn1) {
    btn1.onclick = function () {
      slide.style.transform = "translateX(0px)";
    };
}

if(btn2) {
    btn2.onclick = function () {
      slide.style.transform = "translateX(-100%)";
    };
}

if(btn3) {
    btn3.onclick = function () {
      slide.style.transform = "translateX(-200%)";
    };
}

var divisor = document.getElementById("divisor"),
slider = document.getElementById("slider");
function moveDivisor() { 
	divisor.style.width = slider.value+"%";
}


//https://dev.to/ljcdev/introduction-to-scroll-animations-with-intersection-observer-d05

const svgs = document.querySelectorAll("svg")

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log('interactings ')
    if (entry.isIntersecting) {
      entry.target.classList.add("triggered")
    }
  })
}

const options = {}

const myObserver = new IntersectionObserver(callback, options)

svgs.forEach(svg => {
    myObserver.observe(svg)
})


/* Slideshow Manual */

var slideIndex = 1;
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




