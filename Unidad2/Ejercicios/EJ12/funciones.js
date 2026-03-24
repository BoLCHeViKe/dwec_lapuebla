  		/*
			KC_EJ12
Crear un programa que reciba una letra e indique si es vocal o consonante.

  		*/

function comprobarCaracter(){
        //DUDA!!!!!, porque con miCaracter. no me salen las propiedades?? Que metodos utilizan () y cuales no?
        // tengo que forzar un str inicializandolo con ""
    let char="";
    char = (document.getElementById("caracterInput").value).toLowerCase();  
    let tipoChar;  
    //let patron =  /abc/i;
    let patron =  new RegExp("[a-z]"); //Creamos patron para separar los caracteres especiales de los que no
    if (char.length==1&&char.match(patron)) {
        tipoChar = (char=="a"||char=="e"||char=="i"||char=="o"||char=="u")?"vocal":"consonante";
        document.getElementById("resultadoCaracter").innerHTML = `El caracter introducido es ${tipoChar}`;     
    }else if(char.length!=1) {
        document.getElementById("resultadoCaracter").innerHTML = "Debe de introducir un solo valor";
 
    } else{
        document.getElementById("resultadoCaracter").innerHTML = "Debe de introducir un caracter válido";
    }
}
