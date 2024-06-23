// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del numero secreto';
asignarTextoElemento('h1', "Juego del numero secreto")

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Ingresa un numero del 1 al 10';
asignarTextoElemento('p', "Ingresa un numero del 1 al 10");

function intentoDeUsuario() {
    alert('Click desde boton');
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
