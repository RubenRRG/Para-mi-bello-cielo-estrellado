/* =========================================
   ELEMENTOS DE LA PÁGINA
========================================= */

const inicio =
    document.getElementById("inicio");


const declaracion =
    document.getElementById("declaracion");


const cielo =
    document.getElementById("cielo");


const botonDescubrir =
    document.getElementById("botonDescubrir");


const botonUltimo =
    document.getElementById("botonUltimo");


const ultimoMensaje =
    document.getElementById("ultimoMensaje");


const musica =
    document.getElementById("musicaFondo");



/* =========================================
   CONFIGURACIÓN DE LA MÚSICA
========================================= */

/*
La música empieza en volumen 0
para poder hacer un efecto de
aparición gradual.
*/

musica.volume = 0;



/* =========================================
   BOTÓN DESCÚBRELO
========================================= */

botonDescubrir.addEventListener(
    "click",
    () => {


        /* ===============================
           INICIAR MÚSICA
        =============================== */

        musica.play()

            .then(() => {

                subirVolumen();

            })

            .catch(error => {

                console.log(
                    "No se pudo reproducir la música:",
                    error
                );

            });



        /* ===============================
           OCULTAR PANTALLA INICIAL
        =============================== */

        inicio.style.transition =
            "opacity 1s";


        inicio.style.opacity =
            "0";



        setTimeout(
            () => {


                inicio.classList.add(
                    "oculto"
                );


                declaracion.classList.remove(
                    "oculto"
                );


                window.scrollTo(
                    0,
                    0
                );


            },
            1000
        );



        /* ===============================
           DESVANECER DECLARACIÓN
        =============================== */

        setTimeout(
            () => {


                declaracion.style.transition =
                    "opacity 1.5s";


                declaracion.style.opacity =
                    "0";


            },
            5000
        );



        /* ===============================
           MOSTRAR CIELO
        =============================== */

        setTimeout(
            () => {


                declaracion.classList.add(
                    "oculto"
                );


                cielo.classList.remove(
                    "oculto"
                );


                crearEstrellas();


                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });


            },
            6500
        );


    }
);



/* =========================================
   SUBIR VOLUMEN SUAVEMENTE
========================================= */

function subirVolumen() {


    let volumenActual = 0;


    const volumenFinal = 0.35;


    const intervalo =
        setInterval(
            () => {


                volumenActual += 0.01;


                if (
                    volumenActual
                    >=
                    volumenFinal
                ) {


                    musica.volume =
                        volumenFinal;


                    clearInterval(
                        intervalo
                    );


                    return;

                }


                musica.volume =
                    volumenActual;


            },
            100
        );

}



/* =========================================
   CREAR ESTRELLAS
========================================= */

function crearEstrellas() {


    const contenedor =
        document.getElementById(
            "estrellas"
        );



    /*
    Evitar crear estrellas
    dos veces.
    */

    if (
        contenedor.children.length > 0
    ) {

        return;

    }



    const cantidad =
        180;



    for (
        let i = 0;
        i < cantidad;
        i++
    ) {


        const estrella =
            document.createElement(
                "div"
            );


        estrella.classList.add(
            "estrella"
        );



        /* POSICIÓN */

        estrella.style.left =

            Math.random()
            * 100
            + "%";


        estrella.style.top =

            Math.random()
            * 100
            + "%";



        /* TAMAÑO */

        const tamaño =

            Math.random()
            * 2.5
            + 1;


        estrella.style.width =

            tamaño
            + "px";


        estrella.style.height =

            tamaño
            + "px";



        /* VELOCIDAD DE PARPADEO */

        estrella.style.animationDuration =

            (
                Math.random()
                * 3
                + 2
            )
            + "s";



        /* RETRASO */

        estrella.style.animationDelay =

            (
                Math.random()
                * 5
            )
            + "s";



        contenedor.appendChild(
            estrella
        );


    }

}



/* =========================================
   BOTÓN "UNA ÚLTIMA COSA"
========================================= */

botonUltimo.addEventListener(
    "click",
    () => {


        ultimoMensaje.classList.remove(
            "ocultar-mensaje"
        );


        ultimoMensaje.classList.add(
            "mostrar-mensaje"
        );



        botonUltimo.style.opacity =
            "0";


        botonUltimo.style.pointerEvents =
            "none";



        setTimeout(
            () => {


                ultimoMensaje.scrollIntoView({

                    behavior: "smooth",

                    block: "center"

                });


            },
            300
        );


    }
);