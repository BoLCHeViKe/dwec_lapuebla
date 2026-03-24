//Declaracion Variables
const miRectangulo = document.querySelector("#miRectangulo");

//Transformacion a ClassList (del texto a editar)
const miRectanguloCS = miRectangulo.classList;
miRectanguloCS.add("rectangle"); //Utilizamos ClassList para transformarlo
miRectanguloCS.add("bcOrange");

//Eventos
miRectangulo.addEventListener("mousedown", function () {
  this.classList.remove("bcOrange");
  this.classList.remove("bcPink");
  this.classList.add("bcGold");
  this.firstChild.nodeValue="Sueltame";

});
miRectangulo.addEventListener("mouseup", function () {
  this.classList.remove("bcGold");
  this.classList.add("bcPink");
  this.firstChild.nodeValue="Gracias";

});

