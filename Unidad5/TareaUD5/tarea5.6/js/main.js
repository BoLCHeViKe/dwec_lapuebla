/****** DECLARACION VARIABLES*******/
//*****FORM****/
const miFormulario = document.querySelector("#miFormulario");
//*****INPUT****/
const dni = document.querySelector("#dni");
const nombre = document.querySelector("#nombre");
const direccion = document.querySelector("#direccion");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const fechaNac = document.querySelector("#fechaNac");
//*****SELECT****/
const curso = document.getElementById("curso");
const modulo = document.getElementById("modulo");
//*****CHECKBOX****/
const repite = document.getElementById("repite");
//*****BUTTON****/
const matriculados = document.querySelector("#matriculados"); //Por consola
const alum1SMR = document.querySelector("#alum1SMR"); //Por consola
const alumMayor = document.querySelector("#alumMayor"); //Por consola
const clear = document.querySelector("#clear");

//Modulos cursos
const arrayModulos = [
  [
    "Asignatura 1 Curso 1º SMR",
    "Asignatura 2 Curso 1º SMR",
    "Asignatura 3 Curso 1º SMR",
  ],
  [
    "Asignatura 1 Curso 2º SMR",
    "Asignatura 2 Curso 2º SMR",
    "Asignatura 3 Curso 2º SMR",
    "Asignatura 4 Curso 2º SMR",
    "Asignatura 5 Curso 2º SMR",
  ],
];

//Array alumnos
//Mas sencillo const registroAlumnos = new RegistroAlumnos();
const registroAlumnos = new RegistroAlumnos([]); //Problema con pasar array vacio

//************EVENTOS*****************
curso.addEventListener('change', function () {
  completeSelectFromSelect(curso, arrayModulos, modulo,'<option value="">- Selecciona un valor -</option>');
});
//*****BUTTON ********/
clear.addEventListener('click', function(){
    clearForm(miFormulario);
})
matriculados.addEventListener('click', function(){
    console.log(registroAlumnos.alumnos);
})
alum1SMR.addEventListener('click', function(){
    console.log(registroAlumnos.getAlumnosCurso("1"));
})
alumMayor.addEventListener('click', function(){
    registroAlumnos.sortByEdadDes();
    console.log(registroAlumnos.getAlumnoOlder()); //Tambien podemos hacerlo con splice(0,1)
})

//*****CHECKERS individuales ********/
dni.addEventListener('blur', function () {
    checkDNI(this);
});
nombre.addEventListener('blur', function () {
    checkRequiredInput(nombre);
});
direccion.addEventListener('blur', function () {
    checkRequiredInput(direccion);
});
curso.addEventListener('blur', function () {
    checkRequiredSelect(curso);
});
modulo.addEventListener('blur', function () {
    checkRequiredSelect(modulo);
});
age.addEventListener('blur', function () {
    checkNum(age,12);
});
email.addEventListener('blur', function () {
    checkEmail(email);
});
fechaNac.addEventListener('blur', function () {
    checkDate(fechaNac);
});

//********CHECKER GLOBAL (SUBMIT FORMULARIO) ******/
miFormulario.addEventListener('submit', function (event) {
    event.preventDefault(); //PTEEEEEE Cancelamos la función (Podríamos ponerla en el else)
    if (checkDNI(dni)&checkRequiredInput(nombre)&checkRequiredInput(direccion)&checkRequiredSelect(curso)&checkNum(age,12)&checkRequiredSelect(modulo)&checkEmail(email)&checkDate(fechaNac)) {//Desactivamos la validacion "CORTOCIRCUITO" con un solo &
        alert("Formulario CORRECTO!!!");
        try {
            registroAlumnos.insertAlumno(jsonObject(dni, nombre, direccion, curso, age, modulo, repite, email, fechaNac));
            alert(`Alumno con DNI ${dni.value} grabado Satisfactoriamente`);
            clearForm(this); //Limpiamos
            dni.focus(); //Establecemos focus en DNI
            // showErrorIfCheck(dni,false,""); 
        } catch (error) {
            alert(error.message+`. Alumno con DNI ${dni.value} no creado`);    
        }
        //return true;
    } else {
        alert("INCORRECTO formulario");
    }
    //return false; //al no ser validación en linea, no es necesario devolver true o false.

    
})

