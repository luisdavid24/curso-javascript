// dineroCofla=prompt("Cuanton dinero tienes cofla?");
// dineroRoberto=prompt("Cuanto dinero tienes roberto?");
// dineroPedro=prompt("Cuanto dinero tienes pedro?");

// if(dineroCofla >= 0.6 && dineroCofla<1){
//     alert("Comprar el helado de agua");
// }
// else if(dineroCofla>= 1 && dineroCofla<1.6){
//     alert("Comprar el helado de crema");
    
// }
// else{
//     alert("lo siento, no tienes dinero suficiente");
// }

let frutas= ["bananas","manzana","pera"];

let pc={
    nombre:"David",
    procesador:"Intel core I6",
    ram:"16bg",
    espacio:"1tb"
}

// document.write(frutas);
// document.write(pc["ram"]);

let animales=["gato","perro","pajaro"];
// con in nos devuelve la posicion 
for(animal in animales){
    document.write(animal+"<br>");
}
// con of nos devuelve el elemento
for(animal of animales){
    document.write(animal+"<br>");
}


function saludar(){
    let respuesta=prompt("Hola soy david,como fue tu dia ?")
    if(respuesta==="bien"){
        alert("me alegro");
    }else{
        alert("una pena");
    }
}
// saludar();

function saludar2(nombre){
    let frase = `Hola ${nombre} como va todo`;
    document.write(frase);
}
// saludar2("Pepe");



class animal2{
    constructor(especie,edad,color){
        this.especie=especie;
        this.edad=edad;
        this.color=color;
        this.info=`Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInformacion(){
        document.write(this.info);
    }
}

class Perro extends animal2{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza=raza;
    }
    ladrar(){
        alert("Estoy ladrando");
    }
}

let perro = new Perro("Perro",5,"Morado","Chanda");

perro.verInformacion();
perro.ladrar();