import { clearError, showError, getValue, pressEnterNextField } from './funciones.js';

// Validadores modulares
const validators = {
  nombre: v => v ? true : 'El nombre es obligatorio',
  apellido: v => v ? true : 'Los apellidos es obligatorio'
};

// Validación de un campo genérico
export function validateField(id) {
  const val = getValue(id);
  clearError(id);
  //Para poner en rojo creamos el objeto de nuevo
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
