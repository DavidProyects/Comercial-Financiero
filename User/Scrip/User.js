let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let ahorros = document.querySelectorAll(".ahorros")[0];
let ahorrosC = document.querySelectorAll(".ahorros-container")[0];

abrir.addEventListener("click", function (e) {
    e.preventDefault();
    ahorrosC.style.opacity = "1";
    ahorrosC.style.visibility = "visible";
    ahorros.classList.toggle("ahorros-close");
});

cerrar.addEventListener("click", function () {
    ahorros.classList.toggle("ahorros-close");


    setTimeout(function () {
        ahorrosC.style.opacity = "0";
        ahorrosC.style.visibility = "hidden";

    }, 600)
})
