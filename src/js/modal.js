let sendMail = document.getElementById("sendMail");
let smallMass = document.querySelector(".thanks-message-small");

// виводить повідомлення після відправки контактної форми
sendMail.addEventListener("click", function () {
    mass.classList.add("thanks-message-visible");
    modalElem.classList.add("modal-visible");
    smallMass.style.display = "flex";
});
