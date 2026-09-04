const menuEsmalte = document.getElementById("menuEsmalte");
        const menuMobile = document.getElementById("menuMobile");


        menuEsmalte.addEventListener("click", function () {

            menuEsmalte.classList.toggle("ativo");
            menuMobile.classList.toggle("ativo");

        });


        /* Fecha o menu ao clicar em algum link */

        document.querySelectorAll(".menu-mobile a").forEach(function (link) {

            link.addEventListener("click", function () {

                menuEsmalte.classList.remove("ativo");
                menuMobile.classList.remove("ativo");

            });

        });

        /* =========================================
   CARROSSEL
========================================= */

const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");

const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");

let slideAtual = 0;


/* =========================================
   MOSTRAR SLIDE
========================================= */

function mostrarSlide(numero) {

    slides.forEach(function (slide) {

        slide.classList.remove("ativo");

    });


    indicadores.forEach(function (indicador) {

        indicador.classList.remove("ativo");

    });


    slides[numero].classList.add("ativo");

    indicadores[numero].classList.add("ativo");

    slideAtual = numero;

}


/* =========================================
   PRÓXIMO
========================================= */

proximo.addEventListener("click", function () {

    slideAtual++;

    if (slideAtual >= slides.length) {

        slideAtual = 0;

    }

    mostrarSlide(slideAtual);

});


/* =========================================
   ANTERIOR
========================================= */

anterior.addEventListener("click", function () {

    slideAtual--;

    if (slideAtual < 0) {

        slideAtual = slides.length - 1;

    }

    mostrarSlide(slideAtual);

});


/* =========================================
   CLICAR NOS INDICADORES
========================================= */

indicadores.forEach(function (indicador, indice) {

    indicador.addEventListener("click", function () {

        mostrarSlide(indice);

    });

});


/* =========================================
   TROCA AUTOMÁTICA
========================================= */

setInterval(function () {

    slideAtual++;

    if (slideAtual >= slides.length) {

        slideAtual = 0;

    }

    mostrarSlide(slideAtual);

}, 5000);