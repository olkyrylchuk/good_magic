// Модальне вікно
// const buttonElem = document.getElementById("#sendMail");
const modalElem = document.querySelector(".modal");
// const openModal = document.querySelector(".open__modal");

modalElem.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 0.3s ease-in-out;
`;

const closeModal = (event) => {
    const target = event.target;
    if (target === modalElem) {
        modalElem.style.opacity = 0;
        setTimeout(() => {
            modalElem.style.visibility = "hidden";
        }, 300);
    }
};

const openModal = () => {
    modalElem.style.visibility = "visible";
    modalElem.style.opacity = 1;
};

sendMail.addEventListener("click", openModal);

modalElem.addEventListener("click", closeModal);
