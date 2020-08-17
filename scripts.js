// bucle for
/*
es un bucle determinados que hay que especificar cuantas vueltas dara durante su ejecucion
su sintaxis se compone de 3 partes
    -iniciacion de la variable
    -NUmero de vuletas
    -incremento o deremento

for(let i=0; 0<= 10; i++){
    Codigo a ejecutar
}

Durante su ejecucuion la variable i aumentara su valor en cada vuelta

for(let i=0; i<=10; i++){
    console.log(i)
}
1ra vuelta: i=0 ¿i<=3? 0 i++
2da vuelta: i=1 ¿i<=3? 1 i++
3ra vuelta: i=2 ¿i<=3? 2 i++
4ta vuelta: i=2 ¿i<=3? 2 i++
5ta vuelta: i=3 ¿i<=3? 3 fin del bucle

*/
let numbers = [45,32,33,67,90,23,36,32];
for(let i=0; i<numbers.length; i++){
    console.log(`i vale ${i} y el valor de esa posicion en el arrya es ${numbers[i]}`);
}
