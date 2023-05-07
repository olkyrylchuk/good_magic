let menuBtn = document.querySelector(".nav__burger");
let menu = document.querySelector(".menu");
let submenu = document.querySelector(".submenu");
let projSubmenu = document.querySelector(".proj__submenu");
let down = document.querySelector(".aboutus__arrow-down");
let pDown = document.querySelector(".projects__arrow-down");
let rotate = document.querySelector(".rotate");

menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
});
down.addEventListener("click", function () {
    submenu.classList.toggle("submenu__active");
    down.classList.toggle("rotate");
});
pDown.addEventListener("click", function () {
    projSubmenu.classList.toggle("proj__submenu__active");
    pDown.classList.toggle("rotate");
});
