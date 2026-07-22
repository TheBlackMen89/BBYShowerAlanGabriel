//==========================================
// REGISTRAR PLUGINS
//==========================================

gsap.registerPlugin(ScrollTrigger);

//==========================================
// TIMELINE REUTILIZABLE
//==========================================

function crearTimeline(trigger){

    return gsap.timeline({

        scrollTrigger:{

            trigger:trigger,

            start:"top 75%",

            toggleActions:"play none none none"

        }

    });

}

//==========================================
// HERO
//==========================================

function animacionInicio(){

    const tl=gsap.timeline();

    tl

    .from(".motorcycle",{

        x:-700,

        scale:.6,

        rotation:-12,

        opacity:0,

        duration:1.6,

        ease:"power4.out"

    })

    .from(".subtitle",{

        y:-40,

        opacity:0,

        duration:.6,

        ease:"power2.out"

    },"-=1")

    .from(".title",{

        y:60,

        opacity:0,

        duration:.8,

        ease:"power2.out"

    },"-=.4")

    .from(".frase",{

        y:40,

        opacity:0,

        duration:.7,

        ease:"power2.out"

    },"-=.4")

    .fromTo(

        "#btnMotor",

        {

            opacity:0,

            scale:.7

        },

        {

            opacity:1,

            scale:1,

            duration:.6,

            ease:"back.out(1.7)"

        }

    )

    .from(".hero-date",{

        opacity:0,

        y:20,

        duration:.5,

        ease:"power2.out"

    })

    .from(".scroll",{

        opacity:0,

        y:20,

        duration:.5,

        ease:"power2.out"

    });

}

//==========================================
// ABOUT
//==========================================

function animacionAbout(){

    const tl=crearTimeline(".about");

    tl

    .from(".about .about-subtitle",{

        opacity:0,

        y:40,

        duration:.5

    })

    .from(".about .about-title",{

        opacity:0,

        y:50,

        duration:.6

    },"-=.3")

    .from(".about .about-image",{

        opacity:0,

        scale:.85,

        duration:.9

    })

    .from(".about .about-quote",{

        opacity:0,

        y:30,

        duration:.5

    })

    .from(".about .about-divider",{

        scaleX:0,

        duration:.5

    })

    .from(".about .about-text p",{

        opacity:0,

        y:25,

        stagger:.25,

        duration:.5

    });

}

//==========================================
// GALERÍA
//==========================================

function animacionGallery(){

    const tl=crearTimeline(".gallery");

    tl

    .from(".gallery-subtitle",{

        opacity:0,

        y:40

    })

    .from(".gallery-title",{

        opacity:0,

        y:40

    },"-=.3")

    .from(".gallery-description",{

        opacity:0,

        y:30

    },"-=.2")

    .from(".gallery-item",{

        opacity:0,

        y:60,

        scale:.85,

        stagger:.15,

        duration:.8,

        ease:"power2.out"

    });

}

//==========================================
// EVENTO
//==========================================

function animacionEvento(){

    const tl=crearTimeline(".evento");

    tl

    .from(".event-subtitle",{

        opacity:0,

        y:40

    })

    .from(".event-title",{

        opacity:0,

        y:40

    })

    .from(".event-description",{

        opacity:0,

        y:30

    })

    .fromTo(

        ".card",

        {

            opacity:0,

            y:60

        },

        {

            opacity:1,

            y:0,

            stagger:.2,

            duration:.7,

            ease:"power2.out"

        }

    )

    .from(".event-buttons",{

        opacity:0,

        scale:.8,

        duration:.5

    });

}

//==========================================
// COUNTDOWN
//==========================================

function animacionCountdown(){

    const tl=crearTimeline(".countdown");

    tl

    .from(".countdown-subtitle",{

        opacity:0,

        y:40

    })

    .from(".countdown-title",{

        opacity:0,

        y:40

    })

    .from(".countdown-text",{

        opacity:0,

        y:25

    })

    .from(".time-box",{

        opacity:0,

        scale:.75,

        stagger:.15,

        duration:.6,

        ease:"back.out(1.6)"

    });

}

//==========================================
// REGALOS
//==========================================

function animacionRegalos(){

    const tl=crearTimeline(".gifts");

    tl

    .from(".gifts-subtitle",{

        opacity:0,

        y:40

    })

    .from(".gifts-title",{

        opacity:0,

        y:40

    })

    .from(".gifts-description",{

        opacity:0,

        y:30

    })

    .fromTo(

    ".gift-card",

    {

        opacity:0,

        y:50,

        scale:.9

    },

    {

        opacity:1,

        y:0,

        scale:1,

        stagger:.2,

        duration:.7,

        ease:"power2.out"

    }

)

    .from(".tip",{

        opacity:0,

        scale:.9,

        duration:.7

    });

}

//==========================================
// FOOTER
//==========================================

function animacionFooter(){

    gsap.from(".footer-heart",{

        scrollTrigger:".footer",

        scale:0,

        duration:.6

    });

    gsap.from(".footer h2",{

        scrollTrigger:".footer",

        opacity:0,

        y:40,

        duration:.8

    });

    gsap.from(".footer h3",{

        scrollTrigger:".footer",

        opacity:0,

        y:40,

        duration:.8,

        delay:.15

    });

    gsap.from(".footer p",{

        scrollTrigger:".footer",

        opacity:0,

        y:40,

        duration:.8,

        delay:.3

    });

    gsap.fromTo(

    ".footer-bike",

    {

        x: -900,
        rotation: -8,
        opacity: 0

    },

    {

        scrollTrigger: {

            trigger: ".footer",

            start: "top 80%"

        },

        x: 0,

        rotation: 0,

        opacity: 1,

        duration: 15,

        ease: "expo.out",

        onComplete: () => {

            gsap.to(".footer-bike", {

                y: -4,

                duration: 0.25,

                repeat: 3,

                yoyo: true,

                ease: "power1.inOut"

            });

        }

    }

);

}

//==========================================
// INICIALIZAR
//==========================================

animacionAbout();
animacionGallery();
animacionEvento();
//animacionCountdown();
animacionRegalos();
animacionFooter();