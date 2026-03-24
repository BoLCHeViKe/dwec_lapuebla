//Declaracion Variables
const nombre = document.querySelector("#nombre");
const apellidos = document.querySelector("#apellidos");


//Eventos
nombre.addEventListener("blur", function () {
  this.value=this.value.toUpperCase();
});
apellidos.addEventListener("blur", function () {
  this.value=this.value.toUpperCase();
});
