//Declaracion Variables
const miRectangulo = document.querySelector("#miRectangulo");

//Transformacion a ClassList (del texto a editar)
const miRectanguloCS = miRectangulo.classList;
miRectanguloCS.add("rectangle"); //Utilizamos ClassList para transformarlo
miRectanguloCS.add("bcRed");

//Eventos
miRectangulo.addEventListener("mouseover", function () {
  this.classList.remove("bcRed");
  this.classList.remove("bcGreen");
  this.classList.add("bcGold");
  this.firstChild.nodeValue="Muchas gracias";

});
miRectangulo.addEventListener("mouseout", function () {
  this.classList.remove("bcGold");
  this.classList.add("bcGreen");
  this.firstChild.nodeValue="Pon el Ratón sobre mi";

});

