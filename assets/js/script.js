let menuBtn = document.querySelector(".nav__burger");
let menu = document.querySelector(".menu");
let submenu = document.querySelector(".submenu");
let projSubmenu = document.querySelector(".proj__submenu");
let down = document.querySelector(".aboutus__arrow-down");
let pDown = document.querySelector(".projects__arrow-down");

menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
});
down.addEventListener("click", function () {
    submenu.classList.toggle("submenu__active");
});
pDown.addEventListener("click", function () {
    projSubmenu.classList.toggle("proj__submenu__active");
});

// Керування вкладками проєктів
let all = document.querySelector(".projects__all");
let active = document.querySelector(".projects__active");
let finished = document.querySelector(".projects__finished");
let completed = document.querySelector(".completed");
let allProjects = document.querySelector(".project__status");
// const working = document.querySelector(".working");
let working = document.getElementsByClassName("working");

active.addEventListener("click", function () {
    // console.log(working);
    working.List.add("visible");

    // element.classList.add("visible");
});

// function myFunction() {
//     var element = document.getElementsByClassName("working");
//     element.classList.add("visible");
// }
