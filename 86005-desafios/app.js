// Desafíos:

// Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador += 1;
}

// Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
contador = 10;

while (contador >= 0) {
    console.log(contador);
    contador -= 1;
}

// Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando
// un bucle 'while' en la consola del navegador.
let numeroUsuario = prompt ("Ingrese un numero menor 50 por favor");
contador = 0;

while (contador <= numeroUsuario) {
    console.log(contador);
    contador += 1;    
}

// Crea un programa de cuenta regresiva. Pide un número y cuenta desde el número hasta cero utilizando
// un bucle 'while' en la consola del navegador.
numeroUsuario = prompt ("Ingrese un numero menor 50 por favor");
contador = numeroUsuario;

while (contador >= 0) {
    console.log(contador);
    contador -= 1;    
}
