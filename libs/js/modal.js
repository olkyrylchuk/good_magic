let sendMail = document.getElementById("sendMail");

// виводить повідомлення після відправки контактної форми
sendMail.addEventListener("click", function () {
    mass.classList.add("thanks-message-visible");
    modalElem.classList.add("modal-visible");
});
