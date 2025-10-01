  		/*
			KC_EJ20
      Crear un programa que escriba la suma de los números del 1 a N, donde N será dado por el usuario.
  		*/
function contar(){
  let n = parseInt(document.getElementById("limite").value);
    let myNumber=0;
    for (let i = 1; i <=n; i++) {
      myNumber+=i;
    }  
    document.getElementById("cuenta").innerHTML = `El resultado de sumar los numeros del 1 al ${n} es ${myNumber}`;
}
