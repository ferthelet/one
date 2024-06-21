// Desafíos:

// Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", 
// muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaSemana = prompt ("Ingrese el dia de la semana");
if (diaSemana == "Sabado" || diaSemana == "sabado" ||
    diaSemana == "Domingo" || diaSemana == "domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

// Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numero = prompt ("Ingrese un numero");
if (numero < 0) {
    alert ("Numero negativo!");
} else if (numero > 0) {
    alert ("Numero positivo");
} else {
    alert("Cero!");
}

// Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100,
// muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntuacion = Math.random() * 200;
if (puntuacion >= 100) {
    alert (`¡Felicidades, has ganado! Numero ${puntuacion}`);
} else {
    alert (`Intentalo nuevamente para ganar. Numero ${puntuacion}`)
}

// Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string
// para incluir el valor del saldo.

// Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida
// usando ese nombre.

