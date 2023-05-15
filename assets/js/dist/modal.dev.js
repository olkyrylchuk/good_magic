"use strict";

// Модальне вікно
// const buttonElem = document.getElementById("#sendMail");
var modalElem = document.querySelector(".modal"); // const openModal = document.querySelector(".open__modal");

modalElem.style.cssText = "\ndisplay: flex;\nvisibility: hidden;\nopacity: 0;\ntransition: opacity 0.3s ease-in-out;\n";

var closeModal = function closeModal(event) {
  var target = event.target;

  if (target === modalElem) {
    modalElem.style.opacity = 0;
    setTimeout(function () {
      modalElem.style.visibility = "hidden";
    }, 300);
  }
};

var openModal = function openModal() {
  modalElem.style.visibility = "visible";
  modalElem.style.opacity = 1;
};

sendMail.addEventListener("click", openModal);
modalElem.addEventListener("click", closeModal);