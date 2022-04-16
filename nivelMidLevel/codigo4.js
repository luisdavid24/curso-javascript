
const saludar=()=>{
    document.write("hola, te gusta la piña")
};
setTimeout(saludar,2000);


const temporizador=setTimeout(()=>{
    document.write("Te gusta la carne")
},3000);

clearInterval(temporizador);//Aqui no se va a ejecutar el temporizador

const intervalo=setInterval(()=>{
    document.write("Te gusta la carne invervalo")
},3000);


setTimeout(()=>{
    clearInterval(intervalo);
},5000); //los temporizadores consumen mucho 
