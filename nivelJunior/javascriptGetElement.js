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

const inputMin = document.querySelector("#input_con_min");
// input.minLength=5;
inputMin.setAttribute("minLength","5");

const titulo=document.querySelector(".titulo");
titulo.style.color="blue"; 

// Aqui se agrega y se eliminan clases del elemento titulo
titulo.classList.add("grande");
titulo.classList.remove("grande");


// Aqui lo que hago es optener lo que se tenga en class y con el indice 
// determino que parte quiero
let valor_clases=titulo.classList.item(0);
document.write(valor_clases);

// Si tiene la clase la elimina y viceversa
// ademas retorna un booleano
titulo.classList.toggle("bello");

// Lo que hace es replazar la clase grander por la chico
// y retorna un boolenao true si hizo el cambio
let valorDeClase=tiutlo.classList.replace("grande","chico");


// titulo.textContent;muestra el contenido sin estilos

// titulo.innerText; muestra el contenido con estilos ya no se usa