//Condicionales
/* 
El flujo del programa se ejecuta de arriba hacia abajo
*/
let num = 5;
let num2 = -5;
let num3 = 0;
//condicion simple
if(num>0) console.log(`${num} es mayor que 0`); // si silo es una condicion no se requiere las llaves

//condicion compuesta
 if(num2 > 0){
    console.log(`${num2} es mayor que 0`);
 }else{
    console.log(`${num2}  no es mayor que 0`);
 }

 //condicional multiple

 if(num3 > 0){
    console.log(`${num3} es mayor que 0`);
 }else if(num3 < 0){
    console.log(`${num3} es menor que 0`);
 }else{
    console.log(`${num3} es igual a 0`);
 }

 /*
 operadores lógicos:
 && and
 || O
 */

 if( num > 0 && num2 < 0){
    console.log(`${num} es mayor que 0 y ${num2} es menor que 0`);
 }

if(num >0){
    if (num2 < 0){
        console.log(`${num} y ${num2} cumplen las condiciones`);
    }

}

/*---------------------------------------------------*/

if(num > 0){
    if(num2 >0){
        console.log(`${num} y ${num2} son mayores a 0`);
    }else if(num2 < 0){
        console.log(`${num} es mayor a 0 y ${num2} es menor a 0`);
    }else{
        console.log(`${num} es mayor a 0 y ${num2} es igual a 0`);
    }
}else if(num < 0){
    if(num2 >0){
        console.log(`${num} es menor a 0 y ${num2} es mayor a 0`);
    }else if(num2 < 0){
        console.log(`${num} y ${num2} son menores a 0`);
    }else{
        console.log(`${num} es menor a 0 y ${num2} es igual a 0`);
    }
}else{
    if(num2 >0){
        console.log(`${num} es igual a 0 y ${num2} es mayor a 0`);
    }else if(num2 < 0){
        console.log(`${num} es igual a 0 y ${num2} es menor a 0`);
    }else{
        console.log(`${num} y ${num2} son iguales a 0`);
    }
}

let word = 'Hol';
if(word.length > 4){
    console.log(`${word} tiene mas de 4 letras`);
}else if(word.length < 4){
    console.log(`${word} tiene menos de 4 letras`);
}else{
    console.log(`${word} tiene 4 letras`);
}


let respuesta = true;
let resp2 = false;

if(respuesta == true) console.log('Respuesta tiene el valor true');
if(respuesta == false) console.log('Respuesta tiene el valor flase');

if(resp2) console.log('Respuesta tiene el valor true');
if(!resp2) console.log('Respuesta tiene el valor false');

