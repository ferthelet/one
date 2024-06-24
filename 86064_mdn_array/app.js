// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length);

// salta un indice [4] pero largo del array aumenta a 6
fruits[5] = "mango";
console.log(fruits.length);
console.log(Object.keys(fruits));
console.log(fruits.length);

// aumentando el largo del array lo agranda sin crear nuevos elementos
fruits.length = 10;
console.log(fruits);
console.log(Object.keys(fruits));
console.log(fruits.length);
console.log(fruits[8]);

// reduciendo el largo, elimina elementos
fruits.length = 6;
console.log(fruits);
console.log(Object.keys(fruits));
console.log(fruits.length);

// algunos metodos tienen differentes comportamientos cuando hay slots vacios
// forEach no los toma en cuenta por ejemplo
console.log(fruits);
fruits.forEach((item, index) => {
    console.log(`${index}: ${item}`)
});

// Newer methods (e.g. keys) do not treat empty slots specially and treat them as
// if they contain undefined.
const iterator = fruits.keys();
console.log(iterator);
for (const key of iterator) {
    console.log(`${key}: ${fruits[key]}`);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array