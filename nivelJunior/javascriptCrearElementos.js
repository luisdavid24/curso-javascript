const contenedor = document.querySelector(".contenedor");

const fragmento=document.createDocumentFragment();

// let item=document.createElement("LI");

// let itemText=document.createTextNode("hello");


// item.appendChild(itemText);
// contenedor.appendChild(itemText);

// console.log(item);

// document.write(item);

for(let i=0;i<20;i++){
    item=document.createElement("LI");
    item.innerHTML="Este es un item de la lista";
    fragmento.appendChild(item);

}
contenedor.appendChild(fragmento);
