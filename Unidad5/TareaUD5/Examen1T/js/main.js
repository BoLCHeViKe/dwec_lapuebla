/****** DECLARACION VARIABLES*******/
//*****FORM****/
const miFormulario = document.querySelector("#miFormulario");
//*****INPUT****/
const dni = document.querySelector("#dni");
const nombre = document.querySelector("#nombre");
const apellidos = document.querySelector("#nombre");
const direccion = document.querySelector("#direccion");
const email = document.querySelector("#email");
const telefono = document.querySelector("#telefono");
const fechaAlta = document.querySelector("#fechaAlta");
const fechaNac = document.querySelector("#fechaNac");
const age = document.querySelector("#age");


//*****SELECT****/
const provincia = document.getElementById("provincia");
const deporte = document.getElementById("deporte");

//*****RADIO****/
const sexo = document.getElementsByName('sexo'); //"Array-HTMLCollection"
//For para recorrerlo
//afiliado[i].value     //afiliado[i].checked

//*****BUTTON****/
const sociosInscritos = document.querySelector("#sociosInscritos"); //Por consola
const sociosDeporte = document.querySelector("#sociosDeporte"); //Por consola
const socioMayor = document.querySelector("#socioMayor"); //Por consola
const clear = document.querySelector("#clear");

//Modulos cursos
const arrayDeportes = [
  [
    "Natacion",//Almeria
    "Pesas",
  ],
  [
    "Pesas",//Granada
    "Bicicleta",
  ],
  [
    "Pesas",
    "Natacion",//Sevilla
    "Bicicleta",
  ],
];

//Array socios
const registroSocios = new Gimnasio([]);
dni.focus(); //Focus en DNI
//provincia.value="1"; //por defecto Almeria, deshabilitamos para hacer comprobaciones mas rapidas


//************EVENTOS*****************
provincia.addEventListener('change', function () {
  completeSelectFromSelect(provincia, arrayDeportes, deporte,'<option value="">- Selecciona un valor -</option>');
});
fechaNac.addEventListener('change', function () {
  age.value=2025-parseInt(fechaNac.value.slice(0,5));
});
//*****BUTTON ********/
clear.addEventListener('click', function(){
    clearForm(miFormulario);
});
sociosInscritos.addEventListener('click', function(){
    console.log(registroSocios.mostrarAllSocios()); //////////
    //console.log(registroSocios.socios);//Ojo, pte MAP!
});
sociosDeporte.addEventListener('click', function(){
    let deportChoise = prompt("Selecciona deporte con numero 1,2 o 3: ");
    console.log(registroSocios.getSociosDeporte(deportChoise));
});
socioMayor.addEventListener('click', function(){
    registroSocios.sortByEdadDes();
    console.log(registroSocios.getsocioOlder()); //Tambien podemos hacerlo con splice(0,1)
});


//Poner los demas botones, pendiente


//*****CHECKERS individuales ********/
dni.addEventListener('blur', function () {
    checkDNI(this);
});
nombre.addEventListener('blur', function () {
    checkRequiredInput(nombre);
});
apellidos.addEventListener('blur', function () {
    checkRequiredInput(apellidos);
});
direccion.addEventListener('blur', function () {
    checkRequiredInput(direccion);
});
email.addEventListener('blur', function () {
    checkEmail(email);
});
// sexo.addEventListener('change', function () {
//     checkRequiredRadio(sexo);
// }); //Luego
telefono.addEventListener('blur', function () {
    console.log(telefono.value);
    checkTelf(telefono);
});

fechaAlta.addEventListener('blur', function () {
    checkDate(fechaAlta);
});
provincia.addEventListener('blur', function () {
    checkRequiredSelect(provincia);
});
fechaNac.addEventListener('blur', function () {
    checkDate(fechaNac);
});
age.addEventListener('blur', function () {
    checkNum(age,15,80);
});
deporte.addEventListener('blur', function () {
    checkRequiredSelect(deporte);
});

//********CHECKER GLOBAL (SUBMIT FORMULARIO) ******/
miFormulario.addEventListener('submit', function (event) {
    event.preventDefault();
    if (checkDNI(dni)&checkRequiredInput(nombre)&checkRequiredInput(apellidos)&checkRequiredInput(direccion)&checkTelf(telefono)&checkDate(fechaAlta)&checkRequiredRadio(sexo)&checkEmail(email)&checkRequiredSelect(provincia)&checkNum(age,15,80)&checkRequiredSelect(deporte)&checkDate(fechaNac)) {//Desactivamos la validacion "CORTOCIRCUITO" con un solo &
        alert("Formulario CORRECTO!!!");
        try {
            registroSocios.insertsocio(jsonObject(dni, nombre, apellidos, direccion, email, telefono, fechaAlta, fechaNac, provincia, age, deporte, sexo));
            alert(`Socio con DNI ${dni.value} grabado Satisfactoriamente`);
            clearForm(this); //Limpiamos
            dni.focus(); //Establecemos focus en DNI
            // showErrorIfCheck(dni,false,""); 
        } catch (error) {
            alert(error.message+`. Socio con DNI ${dni.value} no creado`);    
        }
        //return true;
    } else {
        alert("INCORRECTO formulario");
    }
    //return false; //al no ser validación en linea, no es necesario devolver true o false.

    
})
