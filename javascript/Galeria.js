window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


const seleccionGaleria = document.getElementById('galeria');
let galeria;
let imagenes = [];

class Imagen {
    constructor(foto, texto) {
        this.foto = foto;
        this.texto = texto;
    }
}

let imagen1 = new Imagen('https://github.com/Parker6294/Imagenes/blob/main/imagenes%20galeria/bodegon-1.jpg?raw=true', '" Bodegón con Iluminación de bombilla desde arriba: Luz Dia"');
let imagen2 = new Imagen('https://github.com/Parker6294/Imagenes/blob/main/imagenes%20galeria/bodegon-2.jpg?raw=true', '"Bodegón con Iluminación de bombilla desde arriba: Luz Dia e Iluminación por lado izquierdo: Luz Vela"');
let imagen3 = new Imagen('https://github.com/Parker6294/Imagenes/blob/main/imagenes%20galeria/bodegon-3.jpg?raw=true', '"Bodegón con Iluminación de bombilla desde arriba: Luz Dia, por lado izquierdo: Luz Vela e Iluminación perpendicular: Luz Led"');
let imagen4 = new Imagen('https://github.com/Parker6294/Imagenes/blob/main/imagenes%20galeria/bodegon-4.jpg?raw=true', '"Bodegón con Iluminación de bombilla desde arriba: Luz Dia, por lado izquierdo: Luz Vela y Luz Led"');
let imagen5 = new Imagen('https://github.com/Parker6294/Imagenes/blob/main/imagenes%20galeria/bodegon-5.jpg?raw=true', '"Bodegón con Iluminación de bombilla desde arriba: Luz Dia, por lado izquierdo: Luz Vela e Iluminación perpendicular: Luz Led alejada"');



imagenes.push(imagen1, imagen2, imagen3, imagen4, imagen5);

imagenes.forEach((imagen) => {
    galeria = `
    <img src=${imagen.foto} alt=${imagen.texto} onclick="funcionAmpliar(this);">
    `;
    seleccionGaleria.innerHTML += galeria;
});

// Ventana modal para expandir imagen
let modal = document.getElementById('popUp');
let modalImg = document.getElementById("img");
let captionText = document.getElementById("caption");

function funcionAmpliar(imgs) {
    modal.style.display = "block";
    modalImg.src = imgs.src;
    captionText.innerHTML = imgs.alt;
}

// Cerrar modal con la tecla Esc
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = "none";
    }
});

// Cerrar el modal al hacer clic fuera de la imagen
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
