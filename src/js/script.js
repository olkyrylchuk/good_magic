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

// window.history.back();
// window.history.forward();

// $(":input").inputmask();
// $("#phone").inputmask({ mask: "+38 000 000 00 00" });

// let element = document.getElementById("userPhone");
// let maskOptions = {
//     mask: "+38 000 000 00 00",
//     // lazy: false,
// };
// let mask = IMask(element, maskOptions);

// document.querySelector(".input__btn").addEventListener("click", () => {
//     document
//         .querySelector(".thanks-message")
//         .classList.add("thanks-message-visible");
// });

// function foo() {
//     if (window.innerWidth < 430) {
//         /* все, что вы хотите здесь сделать */
//         element.classList.add("news-block-resize");
//     } else {
//         element.classList.remove("news-block-resize");
//     }
// }

// window.addEventListener("changesize", foo);

// window.addEventListener("resize", function () {
//     if (window.innerWidth <= 430) {
//         // 0...768
//         element.classList.add("news-block-resize");
//     } else {
//         // 769...Inf
//         element.classList.remove("news-block-resize");
//     }
// });
