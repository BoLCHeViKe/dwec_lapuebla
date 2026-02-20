/*Declaracion objetos HTML*/

const inputs = document.getElementsByTagName("input");
const miFormulario = document.getElementById("miFormulario");


/*Eventos*/

    /*A) Añadimos el evento a todos los inputs*/
    inputs[0].focus();
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keypress", function (event) {
    event.preventDefault();
    if (event.key === "Enter") {
      if (this.nextElementSibling?.nextElementSibling?.type == "text" || this.nextElementSibling?.nextElementSibling?.type == "number")
        this.nextElementSibling.nextElementSibling.focus();
    }
  });
}
    /*B) Añadimos el evento al boton submit*/
miFormulario.addEventListener('submit',function (event) {
    event.preventDefault();
    const miBoton=document.getElementById("env");
    miBoton.setAttribute('value','CAMBIADO');
    miBoton.setAttribute('style','color:white;background-color: blue');
});




