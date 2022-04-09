let parrafo=document.getElementById("parrafo");
document.write(parrafo+"<br/>");

let navar=document.getElementsByTagName("nav");
document.write(navar+"<br/>");

// con querySelector se seleccion un solo elemento, pero con querySelectorAll se 
// selecciona todo los elementos que concidan con lo buscado 
let parrafoClase=document.querySelector(".parrafo_clase");
document.write(parrafoClase+"<br/>");


const rangoEtario= document.querySelector(".rangoEtario");
rangoEtario.setAttribute("type","text");

let valorDelAtributo=rangoEtario.getAttribute("type");

// let valorDelAtributo=rangoEtario.removeAttribute("type"); aqui elimino ese atributo
// let valorDelAtributo=rangoEtario.getAttribute("type","Aqui de poner el valor por cual lo voy a cambiar");

document.write(valorDelAtributo)

const input = document.querySelector(".input-normal");

document.write(input.className+"<br/>");
document.write(input.value+"<br/>");
input.type="color";

const inputFile = document.querySelector(".input-normal-file");
input.type="image/png";

