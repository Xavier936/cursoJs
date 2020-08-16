//Operador ternario 
//se usa cundo la condicion es true o false
/*
simple: (condicion) ? true : false
con mas condiciones:
 
(condicion) ?
    (sentencia1, sentencia2)
    :
    (sentencia1, sentencia2)
 */

let num = 2;

(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`) 

(num % 2 == 0) ?
    (
        console.log(`${num} es par`),
        console.log(`${num} es par 2`)
    )
    :
    (
        console.log(`${num} es impar`),
        console.log(`${num} es diferente de 2`)  
    )