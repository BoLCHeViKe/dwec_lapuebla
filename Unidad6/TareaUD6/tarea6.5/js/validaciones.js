import { clearError, showError, getValue} from './funciones.js';

// Validadores modulares
const validators = {
  nombre: v => v ? true : 'El nombre es obligatorio',
  apellido: v => v ? true : 'Los apellidos es obligatorio'
};

// Validación de un campo genérico
export function validateField(id) {
  const val = getValue(id);
  clearError(id);
  //Para poner en rojo creamos el objeto de nuevo, aunque aumentemos el acoplamiento
  const objeto = document.querySelector(`#${id}`);
  // La validación sólo devuelve true en caso afirmativo o una cadena de caracteres
  // con el mensaje de error en caso contrario. Así podemos tener mensajes personalizados
  // para cada situación
  const result = validators[id](val);
  if (result !== true) { showError(id, result); 
    objeto.style.border = "2px solid red"; //Imprimimos el field en rojo
    return false; 
  }
  objeto.style = "none"; // Reseteamos
  return true;
}

export function pressEnterNextFieldIfValidate(objeto){
  objeto.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); //Evita submit

      if (validateField(objeto.id)) {
        //Aumentamos el acoplamiento... Para aqui poder hacer la validación
        const components = document.querySelectorAll(`${objeto.tagName}`);
        //console.log(components.length);
        //console.log(!document.querySelector(`#error-${objeto.id}`).textContent.trim()); //Comprueba si existe texto en su error, no pasa!!! NO UTILIZADO FINALMENTE
        //Esto funciona, pasa de uno a otro, aunque tengo que limitar el ultimo
        let encontrado = false;
        components.forEach((element, index) => {
          if (element === objeto && !encontrado) {
            encontrado = true;
            let nextIndex = index + 1 >= components.length ? 0 : ++index; //Sumamos
            components[nextIndex].focus();
          }
        });
      }
    }
  });
}


