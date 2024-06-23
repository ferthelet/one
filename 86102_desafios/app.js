// Desafíos:
// Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo() {
    console.log("¡Hola, mundo!");
}

// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!"
// en la consola.
function hola(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobla(numero) {
    console.log(`El doble del ${numero} es ${numero + numero}`)
}

// Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(numero1, numero2, numero3) {
    console.log((numero1 + numero2 + numero3) / 3)
    return (numero1 + numero2 + numero3) / 3;
}

// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function elMayor(numero1, numero2) {
    console.log(numero1 > numero2 ? numero1 : numero2);
    return numero1 > numero2 ? numero1 : numero2;
}

// Crear una función que reciba un número como parámetro y devuelva el resultado de
// multiplicar ese número por sí mismo.
function multiplicaPorSi(numero) {
    console.log(numero * numero);
    return numero * numero;
}

holaMundo();
hola('juan');
dobla(4);
promedio(4, 6, 8);
elMayor(9, 16);
multiplicaPorSi(3);
