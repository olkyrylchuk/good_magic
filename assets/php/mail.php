<?php
$recepient = "s.kirilchuk@gmail.com";
$sitename = "Название сайта";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \пТелефон: $phone \пТекст: $text";
$pagetitle = "Новая заявка C сайта \"Ssitename\"";
mail(Srecepient, $pagetitle, $message, "Content-type: text/plain; charset=\'utf-81"\n From: $recepient);
