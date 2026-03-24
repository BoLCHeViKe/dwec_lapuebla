/*
|---------------------------------------------------------|
|                EJERCICIO 1: Calculadora con Callback Condicional
|---------------------------------------------------------|
*/

console.log("--- EJERCICIO 1 ---");

/**
 * 1. Toma un array de números y aplica una función callback a cada elemento.
 * @param {number[]} numeros - El array de números a procesar.
 * @param {function} operacion - La función a ejecutar por cada número (recibe numero e indice).
 */
function operacionArray(numeros, operacion) {
    // Usamos forEach para iterar y simplificar, ya que no necesitamos devolver un nuevo array.
    numeros.forEach((numero, indice) => {
        // Ejecutamos el callback con el número y el índice.
        operacion(numero, indice);
    });
}

/**
 * 2a. Callback: Multiplica el número por su índice y lo muestra.
 * @param {number} numero - El elemento actual del array.
 * @param {number} indice - La posición del elemento.
 */
function multiplicarYMostrar(numero, indice) {
    let resultado = numero * indice;
    console.log(`[Callback 1] ${numero} * ${indice} = ${resultado}`);
}

/**
 * 2b. Callback: Devuelve el cuadrado si el número es par, si no, devuelve null.
 * @param {number} numero - El elemento actual del array.
 */
function cuadradoYFiltrar(numero) {
    if (numero % 2 === 0) {
        let cuadrado = numero * numero;
        console.log(`[Callback 2] Cuadrado de ${numero}: ${cuadrado}`);
        return cuadrado; // Aunque se devuelve, el forEach no lo recoge.
    } else {
        console.log(`[Callback 2] ${numero} es impar, se ignora.`);
        return null;
    }
}

// 4. Prueba de la función con un array de ejemplo:
const numerosTest = [10, 3, 7, 4, 15, 8];

// Prueba con el primer callback
console.log("\n--- Usando multiplicarYMostrar (Multiplica por índice) ---");
operacionArray(numerosTest, multiplicarYMostrar);

// Prueba con el segundo callback
console.log("\n--- Usando cuadradoYFiltrar (Cuadrado de pares) ---");
operacionArray(numerosTest, cuadradoYFiltrar);


/*
|---------------------------------------------------------|
|                EJERCICIO 2: Generador de Elementos HTML con Callbacks
|---------------------------------------------------------|
*/

console.log("\n--- EJERCICIO 2 ---");

/**
 * 1. Genera una lista desordenada (<ul>) a partir de un array de datos, 
 * utilizando un callback para formatear cada elemento <li>.
 * @param {string[]} datos - Array de strings para los ítems de la lista.
 * @param {string} idContenedor - El ID del elemento donde se insertará la lista.
 * @param {function} callbackElemento - Función que devuelve el HTML del ítem.
 */
function generarLista(datos, idContenedor, callbackElemento) {
    let htmlLista = "<ul>"; // Comienza la lista

    // 2. Usamos forEach para iterar.
    datos.forEach((elemento) => {
        // Concatenamos el resultado del callback para cada elemento.
        htmlLista += callbackElemento(elemento);
    });

    htmlLista += "</ul>"; // Cierra la lista

    // Establecemos (sobrescribimos) el contenido HTML del contenedor.
    const contenedor = document.getElementById(idContenedor);
    if (contenedor) {
        contenedor.innerHTML = htmlLista;
        console.log(`Lista generada e insertada en #${idContenedor}.`);
    } else {
        console.error(`Error: No se encontró el elemento con ID: ${idContenedor}`);
    }
}

// 3. Implementación del callback usando función flecha para devolver el <li> HTML
const listaFrutas = ["Manzana", "Pera", "Uva", "Naranja", "Fresa"];

const crearLiCallback = (texto) => `<li>Fruta: ${texto}</li>`;

// Llamamos a la función. Vamos a insertarla en el elemento con ID "demo".
generarLista(listaFrutas, "demo", crearLiCallback);


/*
|---------------------------------------------------------|
|                EJERCICIO 3: Uso de Métodos de Array Avanzados
|---------------------------------------------------------|
*/

console.log("\n--- EJERCICIO 3 ---");

const arrayNotas = [7.5, 9.2, 5.0, 8.8, 6.4, 4.9, 9.8, 7.0];

// 2. Utiliza .filter() con una función anónima (clásica) para filtrar notas >= 7.0
const notasAprobadas = arrayNotas.filter(function (nota) {
    return nota >= 7.0;
});

console.log("Notas Aprobadas (>= 7.0):", notasAprobadas);

// 3. Utiliza .findIndex() con una función flecha para encontrar el índice de la primera nota < 5.0
const indiceSuspenso = arrayNotas.findIndex((nota) => nota < 5.0);

console.log("Índice de la primera nota suspendida (< 5.0):", indiceSuspenso);

// Resultado en el DOM: Usamos demo2 para mostrar un resumen.
document.getElementById("demo2").innerHTML += 
    `<p><b>[Resultado E3]</b> Notas Aprobadas: ${notasAprobadas.join(', ')}</p>` + 
    `<p><b>[Resultado E3]</b> Índice de Suspenso: ${indiceSuspenso}</p>`;