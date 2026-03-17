import { validateField } from './validaciones.js';
import { getValue } from './funciones.js';
import { RegistroUsuarios } from './Usuarios.js';

// Campos del DOM
const registroUsuarios = new RegistroUsuarios();


// Campos (y los ids son sus valores)
const campos = ['nombre', 'apellido'];

// Manejo de eventos para validar al perder el foco
campos.forEach(id => {
  document.getElementById(id).addEventListener('blur', () => validateField(id));
});

// Manejo de eventos para validar formulario
document.getElementById('formulario').addEventListener('submit', e => {
  e.preventDefault();
  // Validaciones 
  for (const c of campos) {
    if (!validateField(c)) return;
  }
  // Empaquetamiento genérico de resultados
  const data = {};
  campos.forEach(c => data[c] = getValue(c));
  console.log(JSON.stringify(data, null, 2));
  alert('Enviado: ' + JSON.stringify(data));
  // A partir de aquí hacemos lo que queramos con los datos...
  try {
    // Ejemplo de mock
    //const data = { dni: "adfdfrfeaaa", email: "bbbbasdasdas", curso: "DAW" };
    registroUsuarios.insertarUsuario(data);
  } catch (error) {
    console.log(error);
  }
});



