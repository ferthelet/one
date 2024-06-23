// hoisting probado en version anterior
// redordenando funciones on top

const NUMERO_MAX = 10;
let numeroSecreto = generaSecreto(NUMERO_MAX);
console.log(numeroSecreto); // TBD

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intentoDeUsuario() {
    alert('Click desde boton');
}

function generaSecreto(max) {
    return Math.floor(Math.random() * max) + 1;    
}

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del numero secreto';
asignarTextoElemento('h1', "Juego del numero secreto")

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Ingresa un numero del 1 al 10';
asignarTextoElemento('p', `Ingresa un numero del 1 al ${NUMERO_MAX}`);

