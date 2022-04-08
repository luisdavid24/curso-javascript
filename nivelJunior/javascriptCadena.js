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

// Solo repite la cadena 
let resultado7=cadena.repeat(2);

// Separa por medio de comas, uno indica que puede usar para separarlo
let resultado8=cadena.split(" ");

// Extrea la parte del string que le pidamos
let resultado9=cadena.substring(0,6);

// elimina los espacios en blanco en ambos extremos del string
let resultado10=cadena.trim();

document.write(resultado+"<br>");
document.write(resultado2+"<br>");
document.write(resultado3+"<br>");
document.write(resultado4+"<br>");
document.write(resultado5+"<br>");
document.write(resultado6+"<br>");
document.write(resultado7+"<br>");
document.write("Resultado 8: "+resultado8+"<br>");
document.write(resultado9+"<br>");
document.write(resultado10+"<br>");


let arregloElementos=["uno","dos","tres",1,2];
document.write(arregloElementos+"<br>");

// El sort solo lo invierte
arregloElementos.sort();
document.write(arregloElementos+"<br>");

let arregloElementos2=["pera","mango","narajan","pedro"];
document.write(arregloElementos2+"<br>");


// El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
arregloElementos2.splice(2,0,"Anderson :(");
document.write(arregloElementos2+"<br>");
