// variables
let numeroSecreto = 5;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

console.log(numeroUsuario);

/* Este codigo realiza la comparacion
*/
if (numeroUsuario == numeroSecreto) {
    // acertamos, insertando variable, puede ser codigo JS !!
    alert(`Acertaste el numero es ${numeroSecreto}`);
} else {
    // no acertamos
    if (numeroUsuario > numeroSecreto) {
        alert(`El numero secreto es menor`);
    } else {
        alert(`El numero secreto es mayor`);
    }
}