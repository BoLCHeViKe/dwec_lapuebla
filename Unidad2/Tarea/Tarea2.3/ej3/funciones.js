/* Metodo que muestra "error" si es menor de 0 o mayor de 70 años, y a partir de ahí entra en el circuito de menor o igual de 12 niño, 26 joven, 60 adulto o mayor jubilado */
function mostrarMensaje(){
    let edad = parseInt((document.getElementById("edad").value));
    // Lo hacemos vía Switch
    let mensaje = "";
    switch (true) {
        case (edad<0||edad>70):
            mensaje="Error";            
            break;
        case (edad<=12):
            mensaje="Niño";            
            break;
        case (edad<=26):
            mensaje="Joven";            
            break;
        case (edad<=60):
            mensaje="Adulto";            
            break;
        default:
            mensaje="Jubilado";
            break;
    }
    //Utilizamos template literal para mostrarlo
    document.getElementById("resultadoMensaje").innerHTML = `${mensaje}`;
}
