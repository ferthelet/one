// variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero por favor:");

console.log(numeroUsuario);

/* Este codigo realiza la comparacion
*/
if (numeroUsuario == numeroSecreto) {
    // acertamos, insertando variable, puede ser codigo JS !!
    alert(`Acertaste el numero es ${numeroSecreto}`);
} else {
    // no acertamos
    alert(`Lo siento, no acertaste, el numero es ${numeroSecreto}`);
}