//manejo de cadenas o strings

let cadena = "Hola Mundo";

//Propiedades

//length-> devuelve la longitud de la cadena
console .log(cadena.length);

//Metodos

//los metodos devuelven una cadena nueva, la cadena original no se modifica
//toUppercase()-> devuelve la cadena en mayusculas

console.log(cadena.toUpperCase());
/*let cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus;
*/

//toLowerCase()-> devuelve la cadena en minusculas

console.log(cadena.toLowerCase());

//indexof(string)-> Devuelve la posicion en la que se encuentra el string, si no lo encuentra devuelve -1

console.log(cadena.indexOf('Hola'));
console.log(cadena.indexOf('o'));

//repalce(valor a buscar, valor nuevo) -> reemplaza un fragmento de la cadena por un valor nuevo
 console.log(cadena.replace('Mundo','Alexis'));

 // substring(inicio [,fin])-> extrae los carateres de inicio a fin (el funa l no se incluye)
 console.log(cadena.substring(3));
 console.log(cadena.substring(3, 7));

 //slice(inicio [,fin])-> igual que substring pero admite valores negativos, con esto empezara desde atras

 console.log(cadena.slice(3));
 console.log(cadena.slice(-3));
 console.log(cadena.slice(0, -6));
 //trim()-> elimina los espacions al inicio y final de la cadena
 let cadena2= "     Hola a todos, estamos trabajando con cadenas   ";
 console.log(cadena2);
 console.log(cadena2.trim());

 //startwhit()-> evalua si la cadna empieza con el valor que se indica, si coincide devlvera true
console.log(cadena.startsWith('H'));
 //endwhit()-> evalua si la cadena termina con el valor que se indica, si es asi devolvera true

 console.log(cadena.endsWith('o'));

 //includes(valor)-> misma funcion que indexof, con la diferencia que devuelve tru o false

 console.log(cadena.includes('n'));
 console.log(cadena.includes('a',5));

 //repeat(string, valor)-> repite un numero de veces lo que se indica

 let cadena3 = "hola";
 console.log(cadena3.repeat(3));
 console.log('r'.repeat(5));

 //template strings

 let nombre = "Alexis";
 let apellido = "Lema";
 let edad = 27;

 console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años`);



