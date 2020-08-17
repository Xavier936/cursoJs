/*
1 - Solicita un nombre, la edad y muestra por consola el mensaje
 "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
*/

const result = document.getElementById('result');

let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');
let edad = prompt('Ingrese su edad');
//let edad2= '';

result.textContent = `Hola ${nombre} ${apellido}, tienes ${edad} años y el año que viene tendras ${edad++} años`;


