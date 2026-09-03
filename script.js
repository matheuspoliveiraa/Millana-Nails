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