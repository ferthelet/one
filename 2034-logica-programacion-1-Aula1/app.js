// variables
let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;

// repetir hasta que sea correcto
while (numeroUsuario != numeroSecreto) {

    numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

    console.log(numeroUsuario);

    /* Este codigo realiza la comparacion
    */
    if (numeroUsuario == numeroSecreto) {
        // acertamos, insertando variable, puede ser codigo JS !!
        alert(`Acertaste el numero es ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos > 1 ? "veces" : "vez"}`);
    } else {
        // no acertamos
        if (numeroUsuario > numeroSecreto) {
            alert(`El numero secreto es menor`);
        } else {
            alert(`El numero secreto es mayor`);
        }
        intentos++;
        if (intentos > 3) {
            alert ("Llegaste al numero maximo de intentos");
            break;
        }
    }
}