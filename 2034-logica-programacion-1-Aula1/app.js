// variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero por favor:");

console.log(numeroUsuario);

/* Este codigo realiza la comparacion
*/
if (numeroUsuario == numeroSecreto) {
    // acertamos
    alert('Acertaste el numero');
} else {
    // no acertamos
    alert('Lo siento, no acertaste');
}