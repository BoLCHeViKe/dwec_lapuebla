/* Metodo que muestra "error" si es menor de 0 o mayor de 70 años, y a partir de ahí entra en el circuito de menor o igual de 12 niño, 26 joven, 60 adulto o mayor jubilado */
function mostrarMensaje(){
    let mensaje="";
    //Comprobamos que sea un numero en el primer condicional
    if (!isNaN(parseInt((document.getElementById("edad").value)))) {
        let edad = parseInt((document.getElementById("edad").value));
        // Lo hacemos vía Operador ternario
        mensaje = (edad<0||edad>70)?"Error": edad<=12? "Niño":edad<=26?"Joven":edad<=60? "Adulto": "Jubilado";
    }else {
        mensaje="¡No ha introducido un numero!"
    }
    //Utilizamos template literal para mostrarlo
    document.getElementById("resultadoMensaje").innerHTML = `${mensaje}`;
}
