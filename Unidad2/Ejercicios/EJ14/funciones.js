  		/*
			KC_EJ14
      Crear un programa que reciba un texto y muestre su longitud
  		*/

function contarCaracteres(){
        //DUDA!!!!!, porque con miCaracter. no me salen las propiedades?? Que metodos utilizan () y cuales no?
        // tengo que forzar un str inicializandolo con ""
    let cadena="";
    cadena = (document.getElementById("cadenaTexto").value);  

        document.getElementById("resultadoLongitud").innerHTML = `La cadena introducida tiene ${cadena.length} caracteres`;
}
