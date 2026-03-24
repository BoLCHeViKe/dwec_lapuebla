//Nuevamente, nos apoyamos de nuestra funcion para mostrar arrays utilizando el join
mostrarArray = (array) => console.log(array.join(", "));

const paises = ["España", "Portugal", "Italia", "Francia", "Alemania", "Polonia", "Bélgica", "Rumanía", "Noruega"];

// 	Mostrar el número de elementos del array y todos sus elementos.
console.log(`Nuestro array paises tiene ${paises.length} elementos`);
mostrarArray(paises);

// 	Muestra los elementos del array en sentido inverso.
paises.reverse();
mostrarArray(paises);
// 	Añadir un país al principio del array, muestra la longitud y como queda ahora.
paises.shift("Japon"); //Mal, oendiente arreglar
console.log(paises.length);
mostrarArray(paises);

// 	Añadir un país al final del array y muestra el resultado.
paises.push("Japon"); //Mal
console.log(paises.length);
mostrarArray(paises);

// 	Borrar un país al principio del array (y decir cuál se ha borrado).
paises.shift(); //Se borrara "Rumania", puesto que es el primero
console.log(paises.length);
mostrarArray(paises);

// 	Borrar un país al final del array (y decir cuál se ha borrado).
paises.pop(); //Se borrara "Japon", puesto que es el ultimo
console.log(paises.length);
mostrarArray(paises);

// 	Muestra el elemento que hay en la posición que el usuario indica.

function buscarPais(){
    let indice = (document.getElementById("indice").value);

    const paises = ["España", "Portugal", "Italia", "Francia", "Alemania", "Polonia", "Bélgica", "Rumanía", "Noruega"];
    //Utilizamos template literal para mostrarlo
    document.getElementById("resultado").innerHTML = `${paises[indice]}`;
}

// 	Muestra la posición en la que se está un elemento que indica el usuario.

function buscarPaisIndex(){
    let indice = (document.getElementById("indice").value);

    const paises = ["España", "Portugal", "Italia", "Francia", "Alemania", "Polonia", "Bélgica", "Rumanía", "Noruega"];
    //Utilizamos template literal para mostrarlo
    //funcion indexOf
    let entradaUser = "Italia";

    console.log(paises.indexOf(entradaUser));

    document.getElementById("resultado2").innerHTML = `${paises.indexOf(entradaUser)}`;
}; //Mal, pendiente arreglar




