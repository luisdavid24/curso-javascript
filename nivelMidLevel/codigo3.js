const butoon= document.querySelector(".button");

// butoon.onclick= ()=>{
//     alert("hello")
// }; esta manera de tratar los eventos ya no se usa

butoon.addEventListener("dblclick",saludar);//este evento es doble click

function saludar(){
    alert("Hola, quiere una manzana");
    // butoon.removeEventListener("click",saludar); con este quitamos el evento 

}


// Existe algo llamado Flujo de eventos o event flow
// Lo normal es que va del mas especifico al mas generar,ese es el orden 
// Para cambiar ese flujo se pone un true y se altera el flujo 

const contenedor1=document.querySelector(".contenedor1");
const contenedor2=document.querySelector(".contenedor2");
const botonFlujo=document.querySelector(".buttonFlujo");


contenedor1.addEventListener("click",(e)=>{
    alert("Soy el contenedor azul");
},true);// con este true se cambia el flujo


contenedor2.addEventListener("click",(e)=>{
    alert("Soy el contenedor  rojo");
});

botonFlujo.addEventListener("click",(e)=>{
    alert("Soy el boton");
});


const buton= document.querySelector(".button2");

buton.addEventListener("mouseover",(e)=>{
    alert("Quiere un kiwi");
})
// mouseover Cuando me poso sobre el elemento
// mouseout Cuando me dejo de posarme sobre el elemento 
// contextmenu doy click y suelto sobre el elemento funcion, sino no 