const butoon= document.querySelector(".button");

// butoon.onclick= ()=>{
//     alert("hello")
// }; esta manera de tratar los eventos ya no se usa

butoon.addEventListener("click",saludar);

function saludar(){
    alert("Hola, quiere una manzana");
    // butoon.removeEventListener("click",saludar); con este quitamos el evento 

}


// Existe algo llamado Flujo de eventos o event flow
// Lo normal es que va del mas especifico al mas generar,ese es el orden 
