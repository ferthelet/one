// Desafíos
// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los
//  siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby'
// y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Crea una función que muestre en la consola todos los elementos de la lista
// "lenguagesDeProgramacion.
function mostrarElementos(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}
mostrarElementos(lenguagesDeProgramacion);

// Crea una función que muestre en la consola todos los elementos de la lista
// "lenguagesDeProgramacion en orden inverso.
function mostrarElementosInverso(lista) {
    for (let i = lista.length - 1; i >= 0; i--) {
        console.log(lista[i]);
    }
}
mostrarElementosInverso(lenguagesDeProgramacion);

// Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
}

let numeros = [1, 2, 3, 4, 5];
let promedio = calcularPromedio(numeros);

// Crea una función que muestre en la consola el número más grande y el número más pequeño
// en una lista.
function mostrarMinMax(lista) {
    let min = lista[0];
    let max = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < min) {
            min = lista[i];
        }
        if (lista[i] > max) {
            max = lista[i];
        }
    }
    console.log(`Mínimo: ${min}`);
    console.log(`Máximo: ${max}`);
}
mostrarMinMax(numeros);

// Crea una función que muestre en la consola la suma de todos los elementos en una lista.
function sumarElementos(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    console.log(`Suma: ${suma}`);
}
sumarElementos(numeros);

// Crea una función que devuelva la suma de todos los elementos en una lista.

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento
// pasado como parámetro, o -1 si no existe en la lista.

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva
// lista con la suma de los elementos uno a uno.

// Crea una función que reciba una lista de números y devuelva una nueva lista con el
// cuadrado de cada número.
