// objeto Math
// objeto estatico-> se susa su nombre para utilizarlo
/*
Propiedades:
Math.E - Math.Pi
Metodos:
Math.abs(x) -> devuleve el valor absoluto de x
Math.ceil(x) -> devuelve el entero mas grande mayor o igual que un numero
Math.floor(x) -> devuleve el entero mas pequeño menor o igual que in numero
Math.pow(x,y) -> devuleve la potencia de x elevado a y
Math.sqrt(x) -> devuelve la raiz cuadrad de x
Math.random-> genera un numero psudoaleatorio entre 0 y 1
Math.round(x) -> devuelve el valor de un numero redondeado al entero mas cercano
Math.sign(x) -> devuelve el signo de la x, que indica si es positivo, negativo o cero
*/

console.log(Math.E);
console.log(Math.PI);

let num = 5;
let num2 = 6.9;

console.log(Math.abs(num));
console.log(Math.ceil(num2));
console.log(Math.floor(num2));
console.log(Math.pow(num,2));
console.log(Math.round(Math.random()*100));
//console.log(Math.random()*(max -min) +min);
console.log(Math.round(Math.random()*(10 -5) +5));
console.log(Math.sign(num));
console.log(Math.sqrt(num));








