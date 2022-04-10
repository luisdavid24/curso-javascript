const contenedor = document.querySelector(".contenedor");

const fragmento=document.createDocumentFragment();

// let item=document.createElement("LI");

// let itemText=document.createTextNode("hello");


// item.appendChild(itemText);
// contenedor.appendChild(itemText);

// console.log(item);

// document.write(item);

for(let i=0;i<2;i++){
    item=document.createElement("LI");
    item.innerHTML="Este es un item de la lista";
    fragmento.appendChild(item);

}
contenedor.appendChild(fragmento);


const contenedor2=document.querySelector(".contenedor2");

// cuando se usa firstChild los espacio se toman como elementos  
// Cuando usamos firstElementChild nos trae el primer elemmento encontrado
// Cuando usamos childNodes nos da un node list con todos los hijos no un arreglo
// Conn children solo devuelve las etiquetas sin el contenido
const primerHijo=contenedor.firstElementChild;

console.log(primerHijo);

const contenedor3=document.querySelector(".contenedor3");
const parrafo=document.createElement("P").innerHTML="Parafo";
const h2Nuevo=document.createElement("H2");
h2Nuevo.innerHTML="Titulo";

h2Antiguo=document.querySelector(".h2Viejo");

contenedor3.replaceChild(h2Nuevo,h2Antiguo);

contenedor3.removeChild(h2Nuevo);

// contenedor3.hasChildNodes(); da un true si tiene hijo 

// parentElement para ver el elemento padre 

// NextElementSibling devuelve el elemento inmediatamente posterior al especificado
