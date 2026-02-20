/*Declaracion objetos HTML*/

const entrada = document.getElementById("entrada");
const teclaPulsada = document.getElementById("teclapulsada");
const miFormulario = document.getElementById("miFormulario");

entrada.focus();
/*Eventos*/



function finTeclaPulsada(event) {
  event.preventDefault();
  entrada.setAttribute('disabled',"");   //Poner disabled entrada
  //añadir hijo , text, y unir de proceso terminado
  const nuevoParrafo= document.createElement('p');
  const nuevoTexto= document.createTextNode('Proceso terminado');
nuevoParrafo.appendChild(nuevoTexto);
document.body.appendChild(nuevoParrafo);
}

entrada.addEventListener("keypress", function (event) {
  if (event.key !== "Enter") {
    teclaPulsada.setAttribute('value',event.keyCode);
  } else if(event.key === "Enter"){
    finTeclaPulsada;

  }
});


    /*B) Añadimos el evento al boton submit*/
miFormulario.addEventListener('submit',finTeclaPulsada);






