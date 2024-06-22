// Desafíos finales:

// Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("Bienvenido/a");

// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar
// el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = "Juan";
console.log("Hola " + nombre);

// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el
// mensaje "¡Hola, [tu nombre]!".
nombre = "Juan";
alert(`Hola ${nombre}`);

// Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te
// gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let respuesta = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(respuesta);

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu
// elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable
// llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es
// igual a [resultado]." en la consola.
let valor1 = 7;
let valor2 = 5;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`)

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu
// elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable
// llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y
// [valor2] es igual a [resultado]." en la consola.
valor1 = 7;
valor2 = 5;
resultado = valor1 - valor2;
console.log(`La diferencia de ${valor1} y ${valor2} es igual a ${resultado}.`)

// Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para
// verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edad = prompt("Ingrese su edad");
edad >= 18 ? console.log("Mayor de edad") : console.log("Menor de edad");

// Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo
// o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = prompt("Ingrese un valor");
numero == 0 ? console.log("Cero") : numero > 0 ? console.log("Positivo") : console.log("Negativo");

// Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
const MAX = 10;
let contador = 1;
while (contador <= MAX) {
    console.log(contador++);
}

// Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota
// es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
const NOTA_MINIMA = 7;
let nota = 5;
nota >= 7 ? console.log("Aprobado") : console.log("Reprobado");

// Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let aleatorio = Math.random();
console.log(`Numero random ${aleatorio}`);

// Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
aleatorio = Math.floor(Math.random() * 10) + 1
console.log(`Numero random entre 1 y 10 ${aleatorio}`);

// Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
aleatorio = Math.floor(Math.random() * 1000) + 1
console.log(`Numero random entre 1 y 1000 ${aleatorio}`);