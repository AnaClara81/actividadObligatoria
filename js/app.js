


let edad =parseFloat(prompt("ingresa su edad"));
esMayor();
function esMayor(){
   if(edad>= 18){ 
     alert("es mayor")
  }else{
      alert("es menor")
  }
};




let edadUno= (prompt("Usuario 1:"));
let edadDos= (prompt("Usuario 2:"));
let edadTres=(prompt("Usuario 3:"));


if ( edadUno > edadDos && edadUno > edadTres ) {
alert("Usuario 1 con : " + edadUno +  " Es Mayor");
}else if (edadDos > edadTres){
  alert("Usuario 2 con : " + edadDos + " Es Mayor");
}else{
  alert("Usuario 3 con : " + edadTres + " Es Mayor");
}

