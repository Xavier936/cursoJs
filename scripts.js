//arrays propiedades y metodos

let numbers = [1,2,3,4,5];

/*
    Propiedad
    .length-> devuelte el nro de posiciones que contiene el array
*/

console.log(numbers.length);

/*
    Metodo
    array.isarray(variable a evaluar)-> devuelve true si la variable es un array
*/

let number = 4;

console.log(Array.isArray(numbers));

/*
    Eliminar un elemento
    .shift() ->elelima el primer elemento del array y devuelve ese elemento
    .pop() -> Elimina el ultimo elemento del array y devuelve ese elemnto 
*/

//console.log(numbers);
//let deleteElement = numbers.shift();
//numbers.shift();
//console.log(numbers);
//numbers.pop();
//console.log(numbers);

/*
    Añadir elemntos
    .push(elemento1,elemento2,...) Añade uno o mas elementos al final del array
    y devuelve la nueva longitud
    .unshift(elemento1,elemento2,...) Añade uno o mas elementos al comienzo del array
    y devuelve la nueva longitud
*/

//console.log(numbers);
//let newLengt = numbers.push(6);
//console.log(numbers);
//let newLengt2 = numbers.unshift(0);
//console.log(numbers);

/*
    .indexOf() -> Devuelve el primer indice del elemento que conincida con
    el valor especificado, o -1 si ninguno es encontrado
*/ 
//console.log(numbers);
//console.log(numbers.indexOf(1));

/*
    .lastIndexOf() -> devuelve el ultimo indice del elemento que coincida
    con el valor esoecificaso, o -1 si ninguno es encontrado
*/

//console.log(numbers);
//console.log(numbers.lastIndexOf(1));

/*
    .reverse() -> Invierte el orden de los elementos del array
*/

//console.log(numbers);
//console.log(numbers.reverse());

/*
    .join(separador) -> devuelve un string con el separador que indiquemos,
    por defecto son comas
*/

//console.log(numbers);
//console.log(numbers.join('-'));

/**
    .splice(a,b,items)-> Cambia el contenido de un array eliminando
    elementos existentes y/o nuevos elementos,
        a - Indice de inicio
        b - Numero de elemetos(opcional)
        items - Elementos a añadir en el caso de que se añadan(opcional)
 */

 //console.log(numbers);
 //numbers.splice(3); // elimina desde la pocicion 3 hasta el final
 //numbers.splice(2,2); // elimina desde la pocison 2 los valor indicados
//numbers.splice(2,2,10,23,64); // si b es un vlaor distinto de 0 elimina el nro de bvalores que indiquemos en b y añade los valores de items a pratir de la posicion a
//numbers.splice(4,0,10,23,64); //si b es igual a 0 añade los elementos a partir de la posicion a y no elimina ninguno
//console.log(numbers);

/**
    .slice(a,b) -> Extrae elemntos de un array desde le indice "a" hasta el
    indice "b". Si no existe "b" lo hace desde "a" hasta el final, si no existe
    ni "a" ni "b" hace una cipia del original
*/

//let newNumbers = numbers.slice();
//console.log(numbers);
//console.log(newNumbers);

//let newNumbers = numbers.slice(2);
//console.log(numbers);
//console.log(newNumbers);

let newNumbers = numbers.slice(2,4);
console.log(numbers);
console.log(newNumbers);


