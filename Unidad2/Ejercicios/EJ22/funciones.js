  		/*
			KC_EJ22
      Crear un programa que reciba los nombres y edades de 10 personas. 
      Mostrar únicamente los nombres de las personas que tienen derecho a votar (mayores a 18 años).

  		*/
function contar(){
  // hacer dos arrays nombres[i] a la par de edad[i]
  let n = parseInt(document.getElementById("limite").value);
    let myNumber=0;
    for (let i = 1; i <=n; i++) {
      myNumber+=i;
    }  
    document.getElementById("cuenta").innerHTML = `El resultado de sumar los numeros del 1 al ${n} es ${myNumber}`;
}
