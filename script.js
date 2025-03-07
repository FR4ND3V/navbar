// Hacer el navbar sticky al hacer scroll
window.onscroll = function () {
  makeSticky();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function makeSticky() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Funcionalidad del menú de hamburguesa
var hamburger = document.getElementById("hamburger");
var navLinks = document.getElementById("navLinks");
var hamburgerMenu = document.getElementById("hamburgerMenu");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});
