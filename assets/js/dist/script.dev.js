"use strict";

var menuBtn = document.querySelector(".nav__burger");
var menu = document.querySelector(".menu");
var submenu = document.querySelector(".submenu");
var projSubmenu = document.querySelector(".proj__submenu");
var down = document.querySelector(".aboutus__arrow-down");
var pDown = document.querySelector(".projects__arrow-down");
var rotate = document.querySelector(".rotate");
var mass = document.querySelector(".thanks-message");
var sendMail = document.getElementById("sendMail"); //

sendMail.addEventListener("click", function () {
  mass.classList.add("thanks-message-visible");
});
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
}); // блок відповідає за розкріття відгуків

var resize = document.querySelector(".opinions-text__resize");
var opinanItemOne = document.querySelector(".opinian__item-01");
var opinanItemTwo = document.querySelector(".opinian__item-02");
var opinanItemThree = document.querySelector(".opinian__item-03");
var opinanItem = document.querySelector(".opinions-block-item-01");
var opinanItemSecond = document.querySelector(".opinions-block-item-02");
var opinanItemTherd = document.querySelector(".opinions-block-item-03");
var opinanHidden = document.querySelector(".opinions-text__hidden");
opinanItem.addEventListener("click", function () {
  opinanItemOne.classList.toggle("opinions-text__resize");
});
opinanItemSecond.addEventListener("click", function () {
  opinanItemTwo.classList.toggle("two-columns-resize");
});
opinanItemTherd.addEventListener("click", function () {
  opinanItemThree.classList.toggle("opinions-text__resize");
});