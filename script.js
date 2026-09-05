const menuEsmalte = document.getElementById("menuEsmalte");
const menuMobile = document.getElementById("menuMobile");

menuEsmalte.addEventListener("click", function () {
    menuEsmalte.classList.toggle("ativo");
    menuMobile.classList.toggle("ativo");
});

document.querySelectorAll(".menu-mobile a").forEach(function (link) {
    link.addEventListener("click", function () {
        menuEsmalte.classList.remove("ativo");
        menuMobile.classList.remove("ativo");
    });
});

const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");

const carrossel = document.querySelector(".carrossel");
const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");

let slideAtual = 0;
let intervalo;

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

function iniciarCarrossel() {
    clearInterval(intervalo);

    intervalo = setInterval(function () {
        slideAtual++;

        if (slideAtual >= slides.length) {
            slideAtual = 0;
        }

        mostrarSlide(slideAtual);
    }, 5000);
}

proximo.addEventListener("click", function () {
    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    mostrarSlide(slideAtual);
    iniciarCarrossel();
});

anterior.addEventListener("click", function () {
    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    mostrarSlide(slideAtual);
    iniciarCarrossel();
});

indicadores.forEach(function (indicador, indice) {
    indicador.addEventListener("click", function () {
        mostrarSlide(indice);
        iniciarCarrossel();
    });
});

let toqueInicial = 0;
let toqueFinal = 0;

carrossel.addEventListener("touchstart", function (evento) {
    if (window.innerWidth <= 768) {
        toqueInicial = evento.touches[0].clientX;
    }
});

carrossel.addEventListener("touchend", function (evento) {
    if (window.innerWidth > 768) {
        return;
    }

    toqueFinal = evento.changedTouches[0].clientX;

    const distancia = toqueInicial - toqueFinal;

    if (Math.abs(distancia) < 50) {
        return;
    }

    if (distancia > 0) {
        slideAtual++;

        if (slideAtual >= slides.length) {
            slideAtual = 0;
        }
    } else {
        slideAtual--;

        if (slideAtual < 0) {
            slideAtual = slides.length - 1;
        }
    }

    mostrarSlide(slideAtual);
    iniciarCarrossel();
});



iniciarCarrossel();

const certificados = document.querySelectorAll(".certificado");
const certificadoModal = document.getElementById("certificadoModal");
const certificadoAmpliado = document.getElementById("certificadoAmpliado");
const fecharCertificado = document.getElementById("fecharCertificado");

certificados.forEach(function (certificado) {
    certificado.addEventListener("click", function () {
        const imagem = certificado.querySelector("img");

        certificadoAmpliado.src = imagem.src;
        certificadoAmpliado.alt = imagem.alt;

        certificadoModal.classList.add("ativo");
        document.body.style.overflow = "hidden";
    });
});

function fecharModalCertificado() {
    certificadoModal.classList.remove("ativo");
    document.body.style.overflow = "";
}

fecharCertificado.addEventListener("click", fecharModalCertificado);

certificadoModal.addEventListener("click", function (evento) {
    if (evento.target === certificadoModal) {
        fecharModalCertificado();
    }
});

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        fecharModalCertificado();
    }
});