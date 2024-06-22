// Desafíos
// Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.
// https://github.com/alura-es-cursos/js-curso-2/tree/main

// Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente
// texto: "Hora del Desafío".
let h1 = document.querySelector('h1');
h1.innerHTML = "Hora del Desafío";

// Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre
// que se presione el botón "Console".
function clickAlert() {
    alert("Fue clicado");
}

// Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando
// el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando
// la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function preguntaCiudad() {
    let ciudad = prompt("Ingrese una ciudad");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

// Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se
// presione el botón "Alerta".
function amoJS() {
    alert("Yo amo JS ❤️");
}

// Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function sumandos() {
    let sumando1 = parseInt(prompt("Ingresa el primer numero"));
    let sumando2 = parseInt(prompt("Ingresa el segundo numero"));
    alert(`La suma de ${sumando1} y ${sumando2} es ${sumando1 + sumando2}`)
}