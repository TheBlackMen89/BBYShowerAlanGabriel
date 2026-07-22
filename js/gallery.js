//==========================================
// VARIABLES
//==========================================

const galleryItems = document.querySelectorAll(".gallery-item img");

const lightbox = document.querySelector("#lightbox");

const lightboxImage = document.querySelector("#lightbox-image");

const closeLightbox = document.querySelector(".close-lightbox");

//==========================================
// ABRIR LIGHTBOX
//==========================================

galleryItems.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightboxImage.src=image.src;

        lightboxImage.alt=image.alt;

    });

});

//==========================================
// CERRAR
//==========================================

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

//==========================================
// CERRAR AL HACER CLICK FUERA
//==========================================

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

//==========================================
// ESC
//==========================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});