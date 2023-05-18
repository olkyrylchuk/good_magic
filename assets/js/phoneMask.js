let element = document.getElementById("userPhone");
let maskOptions = {
    mask: "+38 000 000 00 00",
    lazy: true,
};

let mask = new IMask(element, maskOptions);

let element2 = document.getElementById("userMail");
let maskOptions2 = {
    mask: function (value) {
        if (/^[a-z0-9_\.-]+$/.test(value)) return true;
        if (/^[a-z0-9_\.-]+@$/.test(value)) return true;
        if (/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value)) return true;
        if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value)) return true;
        if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value)) return true;
        if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value)) return true;
        if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
            return true;
        return false;
    },
    lazy: false,
};
let mask2 = new IMask(element2, maskOptions2);
