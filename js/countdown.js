//==========================================
// FECHA DEL EVENTO
//==========================================

const eventDate = new Date("2026-08-01T16:00:00").getTime();

//==========================================
// ELEMENTOS
//==========================================

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Si falta algún elemento no seguimos

if (
    !daysElement ||
    !hoursElement ||
    !minutesElement ||
    !secondsElement
){

    console.error("No se encontraron los elementos del contador.");

}else{

    function updateCountdown(){

        const now = Date.now();

        const distance = eventDate - now;

        if(distance <= 0){

            document.querySelector(".countdown-container").innerHTML = `

                <h2 style="font-size:3rem">

                    🎉 ¡Llegó el gran día!

                </h2>

            `;

            clearInterval(timer);

            return;

        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElement.textContent = days;

        hoursElement.textContent = hours.toString().padStart(2,"0");

        minutesElement.textContent = minutes.toString().padStart(2,"0");

        secondsElement.textContent = seconds.toString().padStart(2,"0");

    }

    updateCountdown();

    const timer = setInterval(updateCountdown,1000);

}
