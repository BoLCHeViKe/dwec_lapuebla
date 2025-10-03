    /*Metodo para comprobar apellido correcto */
function comprApellido(){
    let apellido = (document.getElementById("apellido").value);
    let resultApe;
    //Comprobacion apellido Suarez
    if (apellido.toLowerCase()==="suarez") {
        resultApe="¡Correcto! Damos paso a la web !<p>Web en contrucción :(</p>";
        //Aquí podemos dirigir a la siguiente pagina web      
    } else {
        //Error
        resultApe="¡Error en el acceso!"; //vamos a mostrarla en html
        alert("Error login"); //Y tambien como ALERT
    }
    //Utilizamos template literal para mostrarlo
    document.getElementById("resultado").innerHTML = `${resultApe}`;
}
