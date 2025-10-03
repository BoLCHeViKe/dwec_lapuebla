    /*Metodo para comprobar apellido correcto */
function calcSalario(){
    //Declaramos e inicializamos las variables a utilizar
    let nombre = (document.getElementById("nombre").value);    
    let apellido = (document.getElementById("apellido").value);
    let salario = parseFloat((document.getElementById("salario").value));
    let edad = parseInt((document.getElementById("edad").value));
    //Logica de la modificacion del salario
    if (salario<1000) {
        if (edad<30) {
            salario=1100;            
        }else if (edad<=45){
            salario*=1.03; //El salario sube un 3%
        }else {
            salario*=1.15; //El salario sube un 15%
        }
    }else if (salario<=2000){
        if (edad<=45) {
            salario*=1.10; //El salario sube un 10%
        } else {
            salario*=1.03; //El salario sube un 3%   
        }
    }
    document.getElementById("resultado").innerHTML = `<p>Nombre y apellidos: ${nombre} ${apellido} </p> <p>Edad: ${edad} </p> Salario:  ${salario} €`;
}
