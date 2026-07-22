//==========================================
// VARIABLES
//==========================================

const loader = document.getElementById("loader");
const btnMotor = document.getElementById("btnMotor");

const motos = document.querySelectorAll(".motorcycle");

const motorAudio = document.getElementById("motorAudio");
const musicAudio = document.getElementById("musicAudio");

const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menuToggle");

const topButton = document.getElementById("topButton");

//==========================================
// LOADER
//==========================================

function ocultarLoader() {

    if (!loader) return;

    loader.classList.add("oculto");

    setTimeout(() => {

        loader.remove();

    }, 800);

}

//==========================================
// ENCENDER MOTOR
//==========================================

function encenderMotor() {

    if (!btnMotor) return;

    btnMotor.innerHTML = "🏍️ ¡Comienza la aventura!";
    btnMotor.classList.add("encendido");
    btnMotor.disabled = true;

    motos.forEach(moto => {

        moto.classList.add("vibrar");

    });

}

//==========================================
// AUDIO
//==========================================

async function reproducirAudio() {

    try {

        if (motorAudio) {

            motorAudio.currentTime = 0;

            await motorAudio.play();

        }

        if (musicAudio) {

            musicAudio.volume = 0;

            await musicAudio.play();

            let volumen = 0;

            const fade = setInterval(() => {

                volumen += 0.02;

                musicAudio.volume = Math.min(volumen, 0.25);

                if (volumen >= 0.25) {

                    clearInterval(fade);

                }

            }, 80);

        }

    } catch (error) {

        console.log("Error reproduciendo audio:", error);

    }

}

//==========================================
// SCROLL
//==========================================

function iniciarInvitacion() {

    gsap.to(window, {

        duration: 1.5,

        scrollTo: {

            y: "#about",

            offsetY: 40

        },

        ease: "power2.inOut"

    });

}

//==========================================
// BOTÓN SUBIR
//==========================================

function controlarBotonSubir() {

    if (!topButton) return;

    topButton.style.display = window.scrollY > 400
        ? "flex"
        : "none";

}

//==========================================
// EVENTOS
//==========================================

window.addEventListener("load", () => {

    setTimeout(() => {

        ocultarLoader();

        if (typeof animacionInicio === "function") {

            animacionInicio();

        }

    }, 1800);

});

//==========================================
// BOTÓN PRINCIPAL
//==========================================

if (btnMotor) {

    btnMotor.addEventListener("click", async () => {

        await reproducirAudio();

        encenderMotor();

        setTimeout(() => {

            iniciarInvitacion();

        }, 1500);

    });

}

//==========================================
// TERMINAR VIBRACIÓN
//==========================================

motos.forEach(moto => {

    moto.addEventListener("animationend", () => {

        moto.classList.remove("vibrar");

    });

});

//==========================================
// MENU RESPONSIVE
//==========================================

if (menuToggle && menu) {

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}

//==========================================
// CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
//==========================================

document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

//==========================================
// BOTÓN SUBIR
//==========================================

window.addEventListener("scroll", controlarBotonSubir);

if (topButton) {

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}