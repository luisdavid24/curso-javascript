let cadena ="cadena de prueba";
let cadena2= "cadena";
let cadena3="";

let resultado=cadena.concat(cadena2);
// Este es para ver si lo contiene devuelve un booleano
let resultado2=cadena.startsWith(cadena2);

// Me devuelve un indece de la posicion de la palabra buscada si da -1 es porque no lo encontro
let resultado3=cadena.indexOf("de");

// devuelve la posicion (indice) 
let resultado4=cadena.lastIndexOf("de");

// Rellena la cadena para cumplir el numero de espacio necesarios que uno pide
let resultado5=cadena.padStart(26,"de");

// Hace lo mismo que padStart solo que al final
let resultado6=cadena.padEnd(26,"de");



document.write(resultado+"<br>");
document.write(resultado2+"<br>");
document.write(resultado3+"<br>");
document.write(resultado4+"<br>");
document.write(resultado5+"<br>");
document.write(resultado6+"<br>");
