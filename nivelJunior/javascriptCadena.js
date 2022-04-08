let cadena ="cadena de prueba";
let cadena2= "cadena";
let cadena3="";

let resultado=cadena.concat(cadena2);
// Este es para ver si lo contiene devuelve un booleano
let resultado2=cadena.startsWith(cadena2);

// Me devuelve un indece de la posicion de la palabra buscada si da -1 es porque no lo encontro
let resultado3=cadena.indexOf("de");


document.write(resultado+"<br>");
document.write(resultado2+"<br>");
document.write(resultado3+"<br>");
