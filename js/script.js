// ============================
// ELEMENTOS DEL DOM
// ============================

const btnMotor = document.querySelector("#btnMotor");
const loader = document.querySelector("#loader");

// ============================
// FUNCIONES
// ============================

function ocultarLoader() {

    setTimeout(() => { 
    loader.classList.add("oculto");

    }, 4000);

}

function encenderMotor() {

    alert("🏍️ ¡Motor encendido!");

}

// ============================
// EVENTOS
// ============================

window.addEventListener("load", () => {

    ocultarLoader();

});

btnMotor.addEventListener("click", () => {
    
    encenderMotor();

});