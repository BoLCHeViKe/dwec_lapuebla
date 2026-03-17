// Funciones auxiliares
export function getValue(id) {
  const el = document.getElementById(id);
  if (el.type === 'checkbox') return el.checked;
  return el.value.trim();
}

export function showError(id, msg) {
  document.getElementById(id).classList.add('error');
  document.getElementById('error-' + id).textContent = msg;
}

export function clearError(id) {
  document.getElementById(id).classList.remove('error');
  document.getElementById('error-' + id).textContent = '';
}

export function pressEnterNextField(objeto){
  objeto.addEventListener("keydown", function (event) {

  if (event.key === "Enter") {
    event.preventDefault();//Evita submit


//SEGUIR AQUIIIIIII FALLOOOOOO
    if(!document.querySelector(`#error-${objeto.id}`).textContent.trim()){//Comprueba si existe texto en su error, no pasa!!!




          const components = document.querySelectorAll(`${objeto.tagName}`);
    console.log(components.length);

    //Esto funciona, pasa de uno a otro, aunque tengo que limitar el ultimo
    let encontrado = false;
    components.forEach((element,index) => {
      if(element===objeto&&!encontrado){
        encontrado = true;
        let nextIndex=index+1>=components.length?0:++index; //Sumamos
        // if(nextIndex>=components.length){ //Evitamos outOfRange
        //   nextIndex=0; //Indicamos que vuelva al principio
        // }
        components[nextIndex].focus();
      }
      
    }
  );

    };
    //Vamos a gestionar que cambie de campo


  // const index = components.indexOf(objeto);
  // let nextIndex=index+1>=components.length?0:++index;
  // components[nextIndex].focus();
  // let nextIndex= components.findIndex(element => element===objeto)+1;
  // if (nextIndex>=components.length) { //Evitamos outOfRange
  //   nextIndex=0; //Indicamos que vuelva al principio
  // }
  // components[nextIndex].focus();



    // objeto.nextElementSibling.focus();

    // teclaPulsada.setAttribute('value',event.keyCode);
  } //else if(event.key === "Enter"){
    //finTeclaPulsada;

  //}
});

}
