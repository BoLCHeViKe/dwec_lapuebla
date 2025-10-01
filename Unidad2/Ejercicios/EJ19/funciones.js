  		/*KC_EJ19
      Crear un programa que almacene 10 números dados por el usuario y muestre únicamente los pares.
  		*/
function askNumbers(number){
  for (let i = 1; i <= number; i++) {
    document.getElementById("peticionNumbers").innerHTML+=`  <label for="number${i}">Numero ${i}: </label>
	<input type="number" name="number${i}" id="number${i}" step="1" required/>
  <p></p>`;
  }

}

function mostrarPares(){
  let myEvenNumbers = new Array();
  for (let i = 1; i < 11; i++) {
    if ((parseInt(document.getElementById(`number${i}`).value))%2==0) {
      myEvenNumbers.push(parseInt(document.getElementById(`number${i}`).value));

    }
  }
    let str="";
    for (let i = 0; i < myEvenNumbers.length; i++) {
      str+=myEvenNumbers[i];
      str+=i<(myEvenNumbers.length-1)?", ":""; //añadimos coma para separar los numeros contados menor el ultimo      
    }  
    document.getElementById("pares").innerHTML = `Los números contados son ${str}`; //concatenando innerHTML+
}
