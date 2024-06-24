// Desafíos:
// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de
// su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calculaIMC(altura, peso) {
    return peso / altura ** 2; // ** exponent
}
console.log(calculaIMC(1.65, 70));

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(numero) {
    let acumulador = 1;

    while (numero > 0) {
        acumulador *= numero;
        numero--;
    }
    return acumulador;
}

console.log(factorial(2));

// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el
// valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del
// dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
// utilizando la altura y la anchura que se proporcionarán como parámetros.

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
// utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como
// parámetro.
