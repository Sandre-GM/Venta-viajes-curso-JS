import { barcelona, roma, paris, londres } from "./ciudades.js";

//  obteniendo los elementos del DOOM.

let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

// eventos click
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        // removiendo active
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        // agregar activo
        this.classList.add('active');

        // Conenido correspondiente
        let content = getContent(this.textContent)
        // mostrar contenido DOOM

        tituloElemento.innerHTML = content.titulo
        subtituloElemento.innerHTML = content.subtitulo
        parrafoElemento.innerHTML = content.parrafo
        precioElemento.innerHTML = content.precio
    });

    // Funcion de información

    function getContent(enlace) {
        let content = {
            'Barcelona': barcelona,
            'Roma': roma,
            'París': paris,
            'Londres': londres,
        };
        return content[enlace];
    }
})