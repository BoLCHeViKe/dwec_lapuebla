//Declaracion Variables
const titulo = document.querySelector("#titulo");
const miBoton = document.querySelector("#miBoton");


//Transformacion a ClassList (del texto a editar)
const tituloCS = titulo.classList;

//Eventos
miBoton.addEventListener("click", function () {
  tituloCS.toggle("displayNone");
  let firstC =this.firstChild;
  console.log(firstC);
  //this.firstChild.nodeValue="Mostrar";
  firstC.nodeValue==="Ocultar"?firstC.nodeValue="Mostrar":firstC.nodeValue="Ocultar";
});
