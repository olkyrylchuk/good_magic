// $("#sendMail").on("click", function () {
//     let name = $("#userName").val().trim();
//     let phone = $("#userPhone").val().trim();
//     var email = $("#userMail").val().trim();
//     let textarea = $("#userText").val().trim();
//     let button = $("#sendMail").val().trim();

//     if (email == "") {
//         $("#errorMass").text("Впишіть вашу пошту");
//         return false;
//     }
//     if (name == "") {
//         $("#errorMass").text("Впишіть ваше ім'я");
//         return false;
//     }

//     $.ajax({
//         url: "ajax/mail.php",
//         type: "POST",
//         cache: false,
//         date: {
//             name: name,
//             phone: phone,
//             email: email,
//             textarea: textarea,
//         },
//         dataType: "html",
//         beforeSend: function () {
//             $("#sendMail").prop("disabled", true);
//         },
//         success: function (data) {
//             alert(data);
//             $("#sendMail").prop("disabled", false);
//         },
//     });
// });

$(document).ready(function () {
    $("#form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize(),
        }).done(function () {
            alert("Спасибо за заявку! Скоро МЫ с вами свяжемся. ");
        });
        return false;
    });
});
