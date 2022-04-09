let parrafo=document.getElementById("parrafo");
document.write(parrafo+"<br/>");

let navar=document.getElementsByTagName("nav");
document.write(navar+"<br/>");

// con querySelector se seleccion un solo elemento, pero con querySelectorAll se 
// selecciona todo los elementos que concidan con lo buscado 
let parrafoClase=document.querySelector(".parrafo_clase");
document.write(parrafoClase+"<br/>");