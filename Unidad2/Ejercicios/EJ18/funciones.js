  		/*
			KC_EJ18
      Crear un programa que muestre los números naturales del 1 al N, donde N será dado por el usuario.
  		*/
function contarNumeros(){
  //Dos posibilidades:
    //Contar e imprimir en el for
    //Contar en el for y luego imprimir str
    let n = parseInt((document.getElementById("numeroContar").value));
    let str="";
    for (let i = 1; i <= n; i++) {
      str+=i;
      str+=i<n?", ":""; //añadimos coma para separar los numeros contados menor el ultimo      
    }  
    document.getElementById("resultadoContar").innerHTML = `Los números contados son ${str}`;
}
