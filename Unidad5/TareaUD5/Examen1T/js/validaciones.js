//************VALIDACIONES*****************

//*********** VALIDACIONES GENERICAS POR TIPO ETIQUETA*******/

//*****CHECK INPUT****/
function checkRequiredInput(objeto) {
    const error = document.querySelector('#error-' + objeto.id);
    if (!objeto.value.trim()) {
        objeto.style.border = "2px solid red";
        error.style.color = "red";
        error.innerHTML = `Debe completar el campo ${objeto.name}`;
        //objeto.focus(); //Si quieroo que el primero que de error, se pued
        return false; //No pasa la validacion 
    } else {
        objeto.style = "none"; //Para resetear estilo!!!!
        error.innerHTML = "";
        return true; //Pasa validacion
    }
}
//*****CHECK SELECT****/
function checkRequiredSelect(arraySelect) {
    const error = document.querySelector('#error-' + arraySelect.id);
    if (!arraySelect.options[arraySelect.selectedIndex].value.trim()) {
        arraySelect.style.border = "2px solid red";
        error.style.color = "red";
        error.innerHTML = `Debe completar el campo ${arraySelect.name}`;
        //objeto.focus(); //No puedo hacer focus, se rompe
        return false; //No pasa la validacion 
    } else {
        arraySelect.style = "none";
        error.style = "none"; //Para resetear estilo!!!!
        error.innerHTML = "";
        return true; //Pasa validacion
    }
}

//*****CHECK RADIO****/
function checkRequiredRadio(arrayRadio) {
    const error = document.querySelector('#error-' + arrayRadio[0].name);
    for (let i = 0; i < arrayRadio.length; i++) {
        if (arrayRadio[i].checked) {
            error.style = "none"; //Para resetear estilo!!!!
            error.innerHTML = "";
            return true;
        }
        error.style.color = "red";
        error.innerHTML = `Debe completar el campo ${arrayRadio[0].name}`;
        //arrayRadio[0].focus();  //No se le haria focus así
        //arrayRadio[0].checked = true;//Focus así: Pero no queremos ponerlo pues el radio se señalaria solo
        return false;
    }
}
//*********** VALIDACIONES ESPECIFICAS*******/

//*****CHECK DNI****/
function checkDNI(objeto) {
    const error = document.querySelector('#error-' + objeto.id);
    //1. Comprobación obligatoriedad (No vacio)
    if (objeto.value.trim() === "") {
        error.innerHTML = `No puede dejar el campo ${objeto.name.toUpperCase()} vacio`;
        error.style.color = "red";
        return false;
    }
    //1.5.	Si no introduce la letra, calcularla e incluirla
    if (/^[0-9]{8}-$/.test(objeto.value)) {
        let numbers = parseInt(objeto.value.substring(0, 8));
        objeto.value += calcLetraDNI(numbers);
    }
    //2. Comprobación sintaxica (RegEx)
    if (!/^[0-9]{8}-[a-zA-Z]$/.test(objeto.value)) { //2. Comprobación sintaxica (RegEx)
        error.innerHTML = `Formato incorrecto (Esperado: 00000000-X)`;
        error.style.color = "red";
        return false;
    }
    //3. Comprobación semantica (lógica)
    let numbers = parseInt(objeto.value.substring(0, 8));
    let letter = objeto.value.substring(9, 10).toUpperCase();
    if (letter !== calcLetraDNI(numbers)) {
        //objeto.style.border = "2px solid red"; 
        error.innerHTML = `Letra incorrecta, ¿Podría ser la ${calcLetraDNI(numbers)}?`;
        error.style.color = "red";
        return false;
    } else {
        error.style.color = "green"; //Para resetear estilo del error!!!!
        error.innerHTML = "DNI correcto";//Nos pide que mostremos mensaje oportuno, pero tambien podemos dejarlo en blanco
        return true;
    }
}

//*****CHECK NUM (AGE)****/
function checkNum(objeto,min,max) {
    const error = document.querySelector('#error-' + objeto.id);
    if (!objeto.value.trim()) {
        objeto.style.border = "2px solid red";
        error.style.color = "red";
        error.innerHTML = `Debe completar el campo ${objeto.name}`;
        return false;
    } else if (isNaN(objeto.value)){
        objeto.style.border = "2px solid red";
        error.style.color = "red";
        error.innerHTML = `${objeto.name} debe de ser un numero`;
        return false;        
    } else if (objeto.value<min||objeto.value>max) {
        objeto.style.border = "2px solid red";
        error.style.color = "red";
        error.innerHTML = `${objeto.name} no puede ser inferior a ${min} ni mayor que ${max}`;
        return false;         
    } else {
        objeto.style = "none"; //Para resetear estilo!!!!
        error.innerHTML = "";
        return true; //Pasa validacion
    }
}
//*****CHECK EMAIL****/
function checkEmail(objeto) {
  const error = document.querySelector("#error-" + objeto.id);
  if (objeto.value.trim() === "") {
    error.innerHTML = `${objeto.name} no puede quedar vacio`;
    error.style.color = "red";
    return false;
    
  }else if (!/^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/.test(objeto.value)) {
    error.innerHTML = `Formato de ${objeto.name} incorrecto. Esperado _____@_____.yyy`;
    error.style.color = "red";
    return false;
  } else {
    error.style = "none";
    error.innerHTML = "";
    return true;
  }
}
//*****CHECK TELEFONO****/
function checkTelf(objeto) {
  const error = document.querySelector("#error-" + objeto.id);
  if (objeto.value.trim() === "") {
    error.innerHTML = `${objeto.name} no puede quedar vacio`;
    error.style.color = "red";
    return false;
    
  }else if (!/^\(\+[0-9]{2}\)-[0-9]{9}$/.test(objeto.value)) {
    error.innerHTML = `Formato de ${objeto.name} incorrecto. Esperado (+11)-123456789`;
    error.style.color = "red";
    return false;
  } else {
    error.style = "none";
    error.innerHTML = "";
    return true;
  }
}


//*****CHECK DATE****/
function checkDate(objeto) {
  const error = document.querySelector("#error-" + objeto.id);
  if (objeto.value.trim() === "") {
    error.innerHTML = `${objeto.name} no puede quedar vacio`;
    error.style.color = "red";
    return false;
    
//   }else if (!/^[0-9]{4}-[0-3][0-9]-[0-1]-[0-9]$/.test(objeto.value)) {
//     error.innerHTML = `Formato de ${objeto.name} incorrecta. Esperado dd/mm/yyyy`;
//     error.style.color = "red";
//     return false;
  } else {
    error.style = "none";
    error.innerHTML = "";
    return true;
  }
}