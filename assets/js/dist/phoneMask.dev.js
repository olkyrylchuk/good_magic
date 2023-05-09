"use strict";

var element = document.getElementById("userPhone");
var maskOptions = {
  mask: "+38 000 000 00 00",
  lazy: true
};
var mask = new IMask(element, maskOptions);
var element2 = document.getElementById("userMail");
var maskOptions2 = {
  mask: function mask(value) {
    if (/^[a-z0-9_\.-]+$/.test(value)) return true;
    if (/^[a-z0-9_\.-]+@$/.test(value)) return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value)) return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value)) return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value)) return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value)) return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value)) return true;
    return false;
  },
  lazy: false
};
var mask2 = new IMask(element2, maskOptions2);