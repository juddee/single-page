
var menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", showNavbar);



function showNavbar() {
    var navMenu = document.getElementById("menu");
    navMenu.classList.toggle("menu-show");

    }