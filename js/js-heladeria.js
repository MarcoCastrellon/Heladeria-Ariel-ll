document.addEventListener("DOMContentLoaded", function(){
 
    crearGaleria()

    scrollNav()
})

function crearGaleria() {
    const galeria = document.querySelector(".contenedor-galerias");

    for(let i = 1; i <= 6; i++ ) {
        const imagen = document.createElement("IMG");
        imagen.src = `img/img-galeria/${i}.jpg`;
        imagen.dataset.imagenId = i;

        // Añadir la funcion de mostrar imagen 
        imagen.onclick = mostrarImagen;
       
        const lista = document.createElement("LI");
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {

    const id = parseInt(e.target.dataset.imagenId);

    // Generar imagen
    const imagen = document.createElement("IMG");
    imagen.src = `img/img-galeria/${id}.jpg`;

    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");

    // Cuando se da click cerrar la imagen
    overlay.onclick = function () {
        overlay.remove();
        body.classList.remove("fijar-body");
    }

    // Boton de cerrar imagen
    
    const cerrarImagen = document.createElement("P");
    cerrarImagen.textContent = "X";
    cerrarImagen.classList.add("btn-cerrar");
    overlay.appendChild(cerrarImagen);

    // Al presionar el boton se cierra la imagen

    cerrarImagen.onclick = function () {
        overlay.remove();
        body.classList.remove("fijar-body");
    }

    //Mostrar en el HTML
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijar-body");
}

function scrollNav() {
    const enlaces = document.querySelectorAll(".navegacion a")
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(e){
            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior : "smooth"});
        })
    })
}

