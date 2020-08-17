// for of || for in

/*
simplifica el bucle sin tener que darle un numero de vuletas ni realizar un incremento

for of

let names = ['Pedro','Pepe','Juan','Paco']
for(let name of names){
    console.log(name)
}

for in

for(let name in names){
    console.log(name)
}
1ra vuelta:0
2da vuketa:1

palabras reservadas
break rompe el bucle
continue se salta las(s) posicion(es) que le indiquemos y despues continua su ejecucion

*/

let names = ['Pedro','Pepe','Juan','Paco'];

/*for(let i = 0; i < names.length; i++){
    if(names[i]==='Juan'){
        break;
    }
    console.log(names[i]);
}*/

/*for(let i = 0; i < names.length; i++){
    if(names[i]==='Juan'){
        continue;
    }
    console.log(names[i]);
}*/

/*for(let name of names){
    if(name==='Juan'){
        continue;
    }
    console.log(name);

}*/

/*for(let name of names){
    if(name==='Juan'){
        break;
    }
    console.log(name);

}*/

/*for(let index in names){
    if(names[index]==='Juan'){
        continue;
    }
    console.log(index);
}*/

for(let index in names){
    if(names[index]==='Juan'){
        break;
    }
    console.log(index);
}