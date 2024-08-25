// hoisting probado en version anterior
// re-ordenando funciones on top
// actualizado con https://github.com/alura-es-cursos/2035-logica-programacion-2/blob/Aula3/app.js

const NUMERO_MAX = 10;
let numeroSecreto = 0;
// console.log(numeroSecreto); // TBD
let intentos = 3;
// arreglo para evitar que los aleatorios se repitan
let listaNumerosSorteados = [];

function asignaTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificaIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(numeroSecreto);
    // console.log(numeroDeUsuario);
    // console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignaTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled', 'true');
    } else {
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignaTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignaTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiaCaja();
    }
}

function limpiaCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generaSecreto(max) {
    let numeroGenerado = Math.floor(Math.random() * max) + 1;
    console.log(numeroGenerado); // tbd
    console.log(listaNumerosSorteados); // tbd

    // condicion de salida
    if (listaNumerosSorteados.length === max) {
        asignaTextoElemento('p', 'Ya se sortearon todos los numeros disponibles');
    } else {
        // console.log(listaNumerosSorteados.includes(numeroGenerado)); // tbd
        // si el numero ya fue "sorteado" 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            // recursivo?
            return generaSecreto(max);
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    // let titulo = document.querySelector('h1');
    // titulo.innerHTML = 'Juego del numero secreto';
    asignaTextoElemento('h1', "Juego del numero secreto")
    // let parrafo = document.querySelector('p');
    // parrafo.innerHTML = 'Ingresa un numero del 1 al 10';
    asignaTextoElemento('p', `Ingresa un numero del 1 al ${NUMERO_MAX}`);
    numeroSecreto = generaSecreto(NUMERO_MAX);
    intentos = 1;
    console.log(numeroSecreto); //TBD
}

function reiniciarJuego() {
    limpiaCaja();
    condicionesIniciales();
    // activa/desactiva botones
    document.querySelector('#intentar').removeAttribute('disabled');
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

// main
condicionesIniciales();
