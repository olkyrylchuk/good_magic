// Керування вкладками проєктів
let all = document.querySelector(".projects__all");
let activeProj = document.querySelector(".projects__active");
let finished = document.querySelector(".projects__finished");
let completed = document.querySelector(".completed");
let allProjects = document.querySelector(".project__status");
let working = document.getElementsByClassName("working");
// let working = document.getElementsByClassName("working");

// виводить усі проєкти
all.addEventListener("click", function () {
    console.log("ok");
    activeProj.classList.remove("proj__leble-active");
    all.classList.add("proj__leble-active");
    finished.classList.remove("proj__leble-active");
});

all.onclick = function () {
    document.querySelectorAll(".project__working").forEach((el) => {
        el.classList.remove("visible");
        document.querySelectorAll(".project__working").forEach((el) => {
            el.classList.remove("unvisible");
            document.querySelectorAll(".project__ended").forEach((el) => {
                el.classList.remove("unvisible");
                document.querySelectorAll(".project__ended").forEach((el) => {
                    el.classList.remove("visible");
                });
            });
        });
    });
};

// виводить тільки актуально діючі проєкти
activeProj.addEventListener("click", function () {
    console.log("act");
    activeProj.classList.add("proj__leble-active");
    all.classList.remove("proj__leble-active");
    finished.classList.remove("proj__leble-active");
});

activeProj.onclick = function () {
    document.querySelectorAll(".project__working").forEach((el) => {
        el.classList.remove("visible");
        document.querySelectorAll(".project__working").forEach((el) => {
            el.classList.remove("unvisible");
            document.querySelectorAll(".project__ended").forEach((el) => {
                el.classList.remove("unvisible");
                document.querySelectorAll(".project__ended").forEach((el) => {
                    el.classList.remove("visible");
                    document
                        .querySelectorAll(".project__working")
                        .forEach((el) => {
                            el.classList.add("visible");
                            document
                                .querySelectorAll(".project__ended")
                                .forEach((el) => {
                                    el.classList.add("unvisible");
                                });
                        });
                });
            });
        });
    });
};

// виводить усі проєкти які закінчилися
finished.addEventListener("click", function () {
    console.log("close");
    finished.classList.add("proj__leble-active");
    all.classList.remove("proj__leble-active");
    activeProj.classList.remove("proj__leble-active");
});

finished.onclick = function () {
    document.querySelectorAll(".project__working").forEach((el) => {
        el.classList.remove("visible");
        document.querySelectorAll(".project__ended").forEach((el) => {
            el.classList.remove("unvisible");
            document.querySelectorAll(".project__working").forEach((el) => {
                el.classList.add("unvisible");
                document.querySelectorAll(".project__ended").forEach((el) => {
                    el.classList.add("visible");
                });
            });
        });
    });
};
