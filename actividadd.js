/*Declara una variable cuyo nombre sea cadena y tenga el valor “Hola Mundo”.-**/
let nombre = "Hola mundo";
/*Muestra por consola la longitud de la cadena.*/
console.log(nombre.length);
/*Muestra por consola la cadena con todos sus caracteres en mayúsculas.*/
console.log(nombre.toUpperCase());
/*Muestra por consola la cadena con todos sus caracteres en minúsculas.*/
console.log(nombre.toLowerCase());
/*Muestra por consola la posición de la cadena en la que se encuentra la letra o.*/
nombre.indexOf("o");
/*Muestra por consola la posición de la cadena en la que se encuentra la cadena “Hola”.*/
nombre.indexOf("Hola");
/*Reemplaza la cadena “Mundo” por la cadena “Youtube” y muestra el resultado.*/
nombre.replace("Mundo","Youtube");
/*Extrae la segunda parte de la cadena y muéstrala por consola.*/
/*Comprueba si la cadena empieza por “h”.*/
nombre.startsWith("h");
/*Comprueba si la cadena empieza por “H”.*/
nombre.startsWith("H");
/*Muestra Utilizando por TEMPLATE consola la STRINGS letra JAVASCRIPT*/
 /*“r” declara 10 veces.*/
 let i = 0;
 while(i<10){console.log("r");i++;}
 /*3 variables con tu nombre, apellidos y edad y muéstralas por consola introduciéndolas dentro de una cadena.*/
 let name1 = "David";
 let apellidos = "Martinez Avila";
 let edad = 19;
 let e =0;
 while(e<4){
 console.log(`Hola , soy ${name1},${apellidos}. y tengo ${edad}`);
e++;};