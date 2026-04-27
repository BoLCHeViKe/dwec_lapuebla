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

//Mis funciones

//Optamos por la opcion 6.b.	Recargar todo el listado con los datos existentes (más sencillo y reutilizable
// Modificamos pintarInteriorTabla para que reciba el objeto de RegistroUsuarios, aunque el acoplamiento sea altisimo....
export function pintarInteriorTabla(tablaBodyDestino, registroUsuarios){
  //Primero LIMPIAMOS todo lo anterior para evitar duplicaciones
  if (tablaDatosBody.children.length>0) {
    //Utilizar el forEach me da problemas (por el tema de HTMLCollection...), por ello, utilizamos sencillamente un for
    for (let i = tablaDatosBody.children.length -1; i >= 0; i--) {
      tablaDatosBody.children[i].remove(); //Borramos hacia atras //(Tambien podriamos haberlo hecho con removeFirstChild... nos quedamos con este por sencillez   
    }
  }
  //Segungo PINTAMOS los datos actuales
  if (registroUsuarios.usuarios.length > 0) { //Hay usuarios... alto acoplamiento la utilizar registroUsuarios.USUARIOS...
    registroUsuarios.usuarios.forEach(item => {
      addFila(tablaBodyDestino, item, registroUsuarios); //Utilizamos nuestro metodo creado ^^ aunque tiene algo acoplamiento
    });
  }
}


// Añadimos addFila para que reciba el objeto de RegistroUsuarios y el objeto de usuario completo para luego poderle añadir el eliminar directamente a Usuarios.js
function addFila(tablaBodyDestino, objeto, registroUsuarios){

  //1. Creamos la fila (tr)
  const nuevaFila = document.createElement('tr');
  //2. Creamos celda (td) y le damos valor al texto
  const celdaNombre = document.createElement('td');
  celdaNombre.textContent = objeto.nombre;
  const celdaApellido = document.createElement('td');
  celdaApellido.textContent = objeto.apellido;

  //3. Y aqui lo complicado, la celda eliminar
  const celdaEliminar = document.createElement('td');
  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'X';
  botonEliminar.classList.add('botonEliminar');
  //3.1. Creamos aqui el evento del boton eliminar (aunque estamos "acoplando..." pero la sencillez de tenerlo aquí es mucho mejor):
  botonEliminar.addEventListener('click', () => {
    console.log("Clic detectado en el usuario:", objeto);
    // Eliminar el usuario del RegistroUsuarios (del Usuarios.js)
    if (confirm(`¿Esta seguro en eliminar a ${objeto.nombre} ${objeto.apellido}?`)) { //Confirmamos de la manera rapida
        registroUsuarios.borrarUsuario(objeto);
        // Volver a pintar la tabla para reflejar los cambios porque como t
        pintarInteriorTabla(tablaBodyDestino, registroUsuarios); //Volvemos a pintar la tabla cada vez que se utiliza este evento, es decir, que se elimina un usuario
    }

  });
  //3.2. Y ya enganchamos el boton con su evento a la celda creada
  celdaEliminar.appendChild(botonEliminar);
  
  //Vale, ya hemos creado la fila, y todos sus valores
  //4. Unimos todos nuestros elementos a nuevaFila y que pendan de el:
  nuevaFila.append(celdaNombre, celdaApellido, celdaEliminar); // Asegúrate de que userObject.apellido se usa aquí

  //5. y finalmente agregamos tambien al objetoHTML
  tablaBodyDestino.appendChild(nuevaFila);

}
