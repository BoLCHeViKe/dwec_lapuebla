import { validateField, pressEnterNextFieldIfValidate } from './validaciones.js';
import { getValue, pintarInteriorTabla } from './funciones.js';
import { RegistroUsuarios } from './Usuarios.js';

// Campos del DOM
const registroUsuarios = new RegistroUsuarios();
const formulario = document.querySelector('#formulario');
const verUsers = document.querySelector("#verUsers");
const tablaDatosBody = document.querySelector("#tablaDatosBody");


// Campos (y los ids son sus valores)
const campos = ['nombre', 'apellido'];

//posicionar el cursor en el campo Nombre
document.getElementById('nombre').focus();

//Vamos a pintar los datos de nuestra "BD" ya existente (tenemos datos mockeados)

// Si hay usuarios mockeados, los añadimos a la tabla al iniciar la página
pintarInteriorTabla(tablaDatosBody, registroUsuarios); // Pasamos la instancia de registroUsuarios



// Manejo de eventos para validar al perder el foco
campos.forEach(id => {
  document.getElementById(id).addEventListener('blur', () => validateField(id));
  pressEnterNextFieldIfValidate(document.getElementById(id)); //Añadimos esto para el desplazamiento y lo mas importante, añadimos el eventDefault para que no haga submit!!! // OJOOOO ESTE TAMBIEN VALIDA!!!
});

// Manejo de eventos para validar formulario
document.getElementById('formulario').addEventListener('submit', e => {
  e.preventDefault();
  // Validaciones 
  for (const c of campos) {
    if (!validateField(c)) return;
  }
  // Empaquetamiento genérico de resultados (sacado de la plantilla vanilla dada por el profe)
  const data = {};
  campos.forEach(c => data[c] = getValue(c));
  //console.log(JSON.stringify(data, null, 2)); //descomentamos esto por mostrarlo por consola
  //alert('Enviado: ' + JSON.stringify(data));
  // A PARTIR DE AQUI HACEMOS LO QUE QUERAMOS CON LOS DATOS...
  try {
    // Ejemplo de mock
    //const data = { dni: "adfdfrfeaaa", email: "bbbbasdasdas", curso: "DAW" };
    registroUsuarios.insertarUsuario(data);
    
    
    //Recargamos/Pintamos los nuevos resultados
    pintarInteriorTabla(tablaDatosBody, registroUsuarios); // Pasamos la instancia de registroUsuarios
    
    //resetea una vez este todo introducido

    formulario.reset();
    document.getElementById('nombre').focus();

  } catch (error) {
    console.log(error);
  }
});

verUsers.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(registroUsuarios.listarUsuarios());
});


