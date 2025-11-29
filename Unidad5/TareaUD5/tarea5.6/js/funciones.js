//************FUNCIONES*****************


/**
 * Función que completa/despliega a un Select Html destino, en función de la elección de un Select Html origen dado un array bidimensional de los valores a desplegar
 * @param {*} selectOpcionOrigen Select Html de origen que coge el value (Diseñado para contar desde value="1")
 * @param {*} arrayNuevasOpciones Array Bidimensional que incluye listado en el select Destino, en función del select.value numerico de la opción dada (OJO, empieza a contar desde value="1") [["Opciones valor 1"],["Opciones valor 2"],...]
 * @param {*} selectDestino Select Html al que se copiaran la blank option y todas las demás
 * @param {*} selectBaseDest opción Html default vacia que imprimir, EJEMPLO Para copiar: 
 * '\<option value="">- Selecciona un valor -\</option>'
 */
function completeSelectFromSelect(selectOpcionOrigen, arrayBidiNewOptions,selectDestino, selectBaseDest) {
  const numChooseOption = parseInt(selectOpcionOrigen.options[selectOpcionOrigen.selectedIndex].value);
  if (!isNaN(numChooseOption)) {
    let nuevoHtmlSelect = "";
    arrayBidiNewOptions[numChooseOption - 1].forEach((element, index) => {//Ojo que tiene un -1 para coger index desde 0 los values
      nuevoHtmlSelect += `<option value="${index+1}">${element}</option>`; //Ojo que tiene un +1 para empezar a contar desde 1 los nuevos values
    });
    selectDestino.innerHTML = selectBaseDest + nuevoHtmlSelect;
  }
}

//*****Select RADIO Value****/        
function getValueRadio(arrayRadio) { //Y asi reutilizamos la función de validación
    for (let i = 0; i < arrayRadio.length; i++) {
        if (arrayRadio[i].checked) {
            return arrayRadio[i].value;
        }
    }
}

//*****Selected CHECKBOXs values en Array****/
function getValuesCheckBox(arrayCheckBox) { //Devuelve en array los valores 
    const newArray=[];
    for (let i = 0; i < arrayCheckBox.length; i++) {
        if (arrayCheckBox[i].checked) {
            newArray.push(arrayCheckBox[i].value);
        }
    }
    return newArray;
}

/**
 * Función que elimina todos los values del formulario junto con todos sus errores (Formato #error-objeto.id de sus elementos )
 * @param {*} formulario Elemento HTML formulario a resetear
 */
function clearForm(formulario) {
    formulario.reset(); //Clear all values
    for (let i = 0; i < formulario.length; i++) { //Metodo para eliminar los errores mostrados en pantalla
        if(formulario.querySelector('#error-' +formulario[i].id)!=null){//Comprobamos que tenga/existan contenedores de errores en la busqueda (Evitamos TypeError e ineficiencias)
            showErrorIfCheck(formulario[i],false,""); //False para eliminar errores mostrados
        }        
    }
}

/**
 * Función para imprimir un mensaje-error en #error-ID dado un check manual
 * @param {*} objeto Elemento HTML (form, input etc.) para gestionar el error manual
 * @param {boolean} check true para mostrar mensaje error y tipo - false para resetear estilo y todo del error 
 * @param {string} mensaje mensaje error en check true (da error) y mensaje de no error en check false ("" para dejar vacio preferiblemente)
 */
function showErrorIfCheck(objeto,check,mensaje) {
    const error = document.querySelector('#error-' + objeto.id);
    if (check) {
        //objeto.style.border = "2px solid red";
        error.style.color = "red";
        error.innerHTML = `${mensaje}`;
        //return false; //No pasa la validacion 
    } else {
        objeto.style = "none"; //Para resetear estilo!!!!
        error.innerHTML = `${mensaje}`;
        //return true; //Pasa validacion
    }
}

function jsonObject(dni, nombre, direccion, curso, age, modulo, repite, email, fechaNac) {
    const json = {
    dni: dni.value,
    nombre: nombre.value,
    direccion: direccion.value,
    curso: curso.options[curso.selectedIndex].value, //Podemos cambiarlo a text si queremos
    age: parseInt(age.value),
    modulo: modulo.options[modulo.selectedIndex].value, //Podemos cambiarlo a text si queremos
    repite: repite.checked,
    email: email.value,
    fechaNac: fechaNac.value,
    // afiliado: getValueRadio(afiliado), //Utilizando hoisting
    // opciones: opciones.options[opciones.selectedIndex].value,
    // checkboxSelected: getValuesCheckBox(checkboxC), //Utilizando hoisting
    };
    return json;
}

/**
 * Función que calcula letra del DNI
 * @param {*} numbers Recibe por parametro 8 digitos o menos (en string o int)
 * @returns Devuelve letra correspodiente
 */
function calcLetraDNI(numbers) {
    const lettersDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
    numbers = parseInt(numbers); //Hacemos un parseInt por si acaso vienen como String
    if (numbers < 100000000) {
        return lettersDni[numbers % 23];//El op. modulo nos da la posición del array
    }
    return "";
}


