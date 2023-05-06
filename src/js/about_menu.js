// Керування вкладками проєктів
let all = document.querySelector(".projects__all");
let active = document.querySelector(".projects__active");
let finished = document.querySelector(".projects__finished");
let completed = document.querySelector(".completed");
let allProjects = document.querySelector(".project__status");
// const working = document.querySelector(".working");
let working = document.getElementsByClassName("working");

// виводить усі проєкти
all.addEventListener("click", function () {
    active.classList.remove("proj__leble-active");
    all.classList.add("proj__leble-active");
    finished.classList.remove("proj__leble-active");
});

all.onclick = function () {
    document.querySelectorAll(".project__ended").forEach((el) => {
        el.classList.remove("unvisible");
    });
};

// виводить тільки актуально діючі проєкти
active.addEventListener("click", function () {
    active.classList.add("proj__leble-active");
    all.classList.remove("proj__leble-active");
    finished.classList.remove("proj__leble-active");
});

active.onclick = function () {
    document.querySelectorAll(".project__working").forEach((el) => {
        el.classList.add("visible");
        document.querySelectorAll(".project__ended").forEach((el) => {
            el.classList.add("unvisible");
        });
    });
};

// виводить усі проєкти які закінчилися
finished.addEventListener("click", function () {
    finished.classList.add("proj__leble-active");
    all.classList.remove("proj__leble-active");
    active.classList.remove("proj__leble-active");
});

finished.onclick = function () {
    document.querySelectorAll(".project__working").forEach((el) => {
        el.classList.add("unvisible");
        document.querySelectorAll(".project__ended").forEach((el) => {
            el.classList.add("visible");
        });
    });
};
