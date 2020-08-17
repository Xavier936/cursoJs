// Bucle while y do while
/*
Se usan cuando queremos que un trozo de codigo se repita
Existen bulces determinados e indeterminados
Los determinados se usan cuando especificamos el numero de veces que se va a repetir
    -Imprimir numeros del 1 al 10
Los indeterminados se suan cuando no sabemos el nro de veces qeu se van a repetir
    -Repetir mensaje de introducir contraseña
La estrucura de un bucle siempre es la misma
    Bucle{
        Codigo a ejecutar
    }
*/
/*
Bucle While
es un bucle indeterminado ya que no sabemos cunatas vueltas dara durante su ejecucion
Sintaxis
    condicion de salida
    while(condicion){
        Codigo a ejecutar
    }

bucle Do While
es un bucle indeterminado ya que no sabemos cunatas vueltas dara durante su ejecucion
Su sintaxis
    codigo a ejecutar
    condicion de salida

    do{
        codigo a ejecutar
    }while(condicion)

*/

let pass= '';

/*while(pass != 'hola'){
    pass = prompt('Indtroduzca su contraseña');
}

console.log('Fin del bucle');
*/

do{
    pass = prompt('Indtroduzca su contraseña');
    
}while(pass != 'hola');
console.log('Fin del bucle');

