const inicio = document.getElementById("inicio");
const declaracion = document.getElementById("declaracion");
const cielo = document.getElementById("cielo");

const botonDescubrir =
    document.getElementById("botonDescubrir");

const botonUltimo =
    document.getElementById("botonUltimo");

const ultimoMensaje =
    document.getElementById("ultimoMensaje");


/* =================================
   BOTÓN PRINCIPAL
================================= */

botonDescubrir.addEventListener("click", () => {

    /* Ocultar inicio */

    inicio.style.transition = "opacity 1s";
    inicio.style.opacity = "0";


    setTimeout(() => {

        inicio.classList.add("oculto");

        declaracion.classList.remove("oculto");

        window.scrollTo(0, 0);

    }, 1000);


    /* Mostrar cielo después */

    setTimeout(() => {

        declaracion.style.transition = "opacity 1.5s";
        declaracion.style.opacity = "0";

    }, 5000);


    setTimeout(() => {

        declaracion.classList.add("oculto");

        cielo.classList.remove("oculto");

        crearEstrellas();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 6500);

});


/* =================================
   CREAR CIELO ESTRELLADO
================================= */

function crearEstrellas() {

    const contenedor =
        document.getElementById("estrellas");


    /* Evitar estrellas duplicadas */

    if (contenedor.children.length > 0) {
        return;
    }


    const cantidad = 180;


    for (let i = 0; i < cantidad; i++) {

        const estrella =
            document.createElement("div");

        estrella.classList.add("estrella");


        /* Posición aleatoria */

        estrella.style.left =
            Math.random() * 100 + "%";

        estrella.style.top =
            Math.random() * 100 + "%";


        /* Tamaño aleatorio */

        const tamaño =
            Math.random() * 2.5 + 1;

        estrella.style.width =
            tamaño + "px";

        estrella.style.height =
            tamaño + "px";


        /* Duración diferente */

        estrella.style.animationDuration =
            (Math.random() * 3 + 2) + "s";


        /* Retraso */

        estrella.style.animationDelay =
            (Math.random() * 5) + "s";


        contenedor.appendChild(estrella);

    }

}


/* =================================
   ÚLTIMO MENSAJE
================================= */

botonUltimo.addEventListener("click", () => {

    ultimoMensaje.classList.remove(
        "ocultar-mensaje"
    );

    ultimoMensaje.classList.add(
        "mostrar-mensaje"
    );


    botonUltimo.style.opacity = "0";
    botonUltimo.style.pointerEvents = "none";


    setTimeout(() => {

        ultimoMensaje.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);

});