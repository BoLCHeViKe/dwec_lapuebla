import { clearError, showError, getValue } from './funciones.js';

// Validadores modulares
const validators = {
  nombre: v => v ? true : 'El nombre es obligatorio',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? true : 'Email no válido',
  dni: v => {
    if (!v.trim()) {
      return 'DNI es obligatorio';
    } else if (!/^\d{8}[A-Za-z]$/.test(v)) {
      return 'DNI formato inválido';
    } else if (!('TRWAGMYFPDXBNJZSQVHLCKE'[v.substring(0, 8) % 23] === v[8].toUpperCase())) {
      return 'Letra incorrecta';
    }
    return true;
  },
  curso: v => v ? true : 'Seleccione curso',
  mayor: v => v === true ? true : 'Debe confirmar la mayoría de edad'
};

// Validación de un campo genérico
export function validateField(id) {
  const val = getValue(id);
  clearError(id);
  // La validación sólo devuelve true en caso afirmativo o una cadena de caracteres
  // con el mensaje de error en caso contrario. Así podemos tener mensajes personalizados
  // para cada situación
  const result = validators[id](val);
  if (result !== true) { showError(id, result); return false; }
  return true;
}
