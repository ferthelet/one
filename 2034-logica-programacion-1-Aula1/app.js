// variables
const MAX_NUMEROS = 20;
const MAX_INTENTOS = Math.floor(MAX_NUMEROS / 3); // cantidad de intentos un tercio del maximo
let numeroSecreto = Math.floor(Math.random() * MAX_NUMEROS) + 1; // random entre 1 y MAX_NUMEROS
let numeroUsuario = 0;
let intentos = 1;

// repetir hasta que sea correcto
while (numeroUsuario != numeroSecreto) {

    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${MAX_NUMEROS} por favor`));
    // DELETE_ME for testing
    console.log(typeof(numeroUsuario));
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
        if (intentos > MAX_INTENTOS) {
            alert (`Llegaste al maximo de intentos ${MAX_INTENTOS}. Numero secreto ${numeroSecreto}`);
            break;
        }
    }
}