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
// mouseenter ocurre cuando el puntero se mueve sobre un elemento 
// mousemove ocurre cuando el puntero se mueve mientras esta sobre un elemento 
// mousedown ocurre cuando un usuario apreta un boton del mouse sobre un elemento 
// mouseup courre cuando un usuario suelta un boton del mouse sobre un elemento 


const contenedorTeclado=document.querySelector(".contenedorTeclado");
const inputPrueba=document.querySelector(".inputPrueba");

inputPrueba .addEventListener("keydown",(e)=>{
    console.log("Una fue presionada");
});//cuando la tecla se presiona

inputPrueba.addEventListener("keypress",(e)=>{
    console.log("un usuario presiono una tecla y la solto");
});///cuando se presiona y se suelta en el mismo elemento

inputPrueba.addEventListener("keyup",(e)=>{
    console.log("una tecla fue soltada");
});//Solo cuando se suelta en ese mismo elemento.


const imagenFutbol=document.querySelector(".imagenFutbol");

imagenFutbol.addEventListener('error',()=>{
    console.log("Hubo un error");
});

window.addEventListener("load",()=>{
    console.log("Ha cargado el sitio");
});


window.addEventListener("beforeunload",()=>{
    console.log("Te estas por ir del sitio");
});//con unload es para cuando ya te fuiste del sitio
//resize es para cuando cambia la resolucion de la pantalla
//scroll como su nombre lo dice es para el scroll

const inputSeleccionado=document.querySelector(".inputSeleccionado");
const contenedorSeleccionado=document.querySelector(".contenedorSeleccionado");

inputSeleccionado.addEventListener("select",(e)=>{
    let start =e.target.selectionStart;
    let end=e.target.selectionEnd;
    let textoCompleto=inputSeleccionado.value;
    contenedorSeleccionado.innerHTML=textoCompleto.substring(start,end);
})

