var hamburger = document.querySelector("header nav button");
var navMenu = document.querySelector(" header nav ul");
var navbar = document.querySelector(" header nav");

hamburger.addEventListener("click", mobileMenu);

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


var darkmode = document.querySelector("main aside button");

function darkmodeEnable() {
    document.body.classList.toggle("darkmode");
}

darkmode.addEventListener("click", darkmodeEnable);


console.log(darkmode);

