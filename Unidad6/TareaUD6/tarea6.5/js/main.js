import { validateField } from './validaciones.js';
import { getValue, pressEnterNextField } from './funciones.js';
import { RegistroUsuarios } from './Usuarios.js';

// Campos del DOM
const registroUsuarios = new RegistroUsuarios();
const verUsers = document.querySelector("#verUsers");


// Campos (y los ids son sus valores)
const campos = ['nombre', 'apellido'];

//posicionar el cursor en el campo Nombre
document.getElementById('nombre').focus();

// Manejo de eventos para validar al perder el foco
campos.forEach(id => {
  pressEnterNextField(document.getElementById(id)); //Añadimos esto para el desplazamiento y lo mas importante, añadimos el eventDefault para que no haga submit!!!
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

verUsers.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(registroUsuarios.listarUsuarios());
});

