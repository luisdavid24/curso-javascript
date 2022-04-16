const nombre= document.getElementById('nombre');
const email= document.getElementById('email');
const materia= document.getElementById('materia');
const boton= document.getElementById('btn-enviar');
const resultado= document.querySelector(".resultado");
    

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let errror=validarCampos();
    if(errror[0]){
        resultado.innerHTML=error[1];
        resultado.classList.add("red");
    }else{
        resultado.innerHTML="Solicitud enviada correctamente";
        resultado.classList.add("green");
    }
})

const validarCampos=()=>{
    let error=[];
    if(nombre.value.length <5 ){
        error[0]=true; 
        error[1]="El nombre no puede contener menos de 5 caracteres.";
        return error; 
    }else if(nombre.value.length<40){
        error[0]=true; 
        error[1]="El nombre no puede contener mas de 40 caracteres.";
        return error; 
    }
}