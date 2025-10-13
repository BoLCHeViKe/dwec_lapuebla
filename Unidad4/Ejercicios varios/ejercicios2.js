/*
|---------------------------------------------------------|
|                EJERCICIO 1: Calculadora con Callback Condicional
| Enfoque: Practicar la definición y el uso de funciones callback personalizadas
|          dentro de una función iteradora propia.
|---------------------------------------------------------|
*/

/**
 * 1. Crea una función llamada operacionArray(numeros, operacion) que tome un array de números (numeros)
 * y una función callback (operacion).
 * 2. La función operacionArray debe iterar sobre el array y, por cada número, ejecutar la función operacion,
 * pasándole el número actual y su índice.
 * 3. Crea dos callbacks diferentes:
 * - multiplicarYMostrar(numero, indice): Multiplica el numero por su indice y muestra el resultado en la consola.
 * - cuadradoYFiltrar(numero, indice): Devuelve el cuadrado del numero (numero * numero) SOLO SI el número original es par.
 * Si es impar, devuelve null.
 * 4. Llama a operacionArray con un array de 5 a 10 números y cada uno de los callbacks para probar su funcionamiento.
 */

operacionArray = (numeros, operacion) => {
    numeros.forEach((element,index) => {
        operacion(element,index);        
    });
};
//Modo clasico
// function operacionArray(numeros, operacion){
//     numeros.forEach((element,index) => {
//         operacion(element,index);        
//     });
// };

multiplicarYMostrar = (numero,indice) => console.log(numero*indice);

cuadradoYFiltrar = (numero, indice) => {
    if (numero%2===0) {
        let newNum = numero*numero;
        console.log(`${numero} es par, resultado al cuadrado ${newNum}`);
        return newNum;        
    } else{
        console.log(`${numero} es impar, ignoramos...`);
        return null;
    }
};

const arrayTest=[2,4,4,6,7,8,4,2,34,8];

operacionArray(arrayTest,multiplicarYMostrar);

operacionArray(arrayTest,cuadradoYFiltrar);

//Esto es a parte, utilizando filter
const arrayFiltrado = arrayTest.filter((element) => element%2===0);
console.log(arrayFiltrado);




/*
|---------------------------------------------------------|
|                EJERCICIO 2: Generador de Elementos HTML con Callbacks
| Enfoque: Usar funciones callback para manejar la presentación (formato HTML)
|          mientras la función principal maneja la lógica de la estructura y la inserción en el DOM.
|---------------------------------------------------------|
*/

/**
 * 1. Crea una función llamada generarLista(datos, idContenedor, callbackElemento).
 * - datos: Un array de strings (por ejemplo, nombres de frutas o ciudades).
 * - idContenedor: El ID de un elemento HTML existente (ej. "demo" o "demo2").
 * - callbackElemento: Una función callback que recibirá un elemento del array y DEBE DEVOLVER el HTML del ítem de la lista (ej. <li>Nombre</li>).
 * 2. La función generarLista debe usar el método forEach para recorrer datos, construir una lista desordenada (<ul>...</ul>)
 * utilizando el HTML devuelto por callbackElemento, y luego ESTABLECER (innerHTML=) todo el HTML de la lista
 * dentro del idContenedor especificado.
 * 3. Implementa la función callbackElemento usando la SINTAXIS DE FUNCIÓN FLECHA (arrow function) para devolver un ítem de lista.
 */

//Arreglo (Mejor)

/**
 * Función principal que orquesta la generación de la lista y la inserción en el DOM.
 * @param {string[]} datos - Array de strings a listar.
 * @param {string} idContenedor - ID del elemento HTML donde insertar la lista.
 * @param {function} callbackElemento - Callback que formatea cada elemento en un <li>.
 */
generarLista = (datos, idContenedor, callbackElemento) => { //Unica función que llama al callback (este formatea en <li>), obtiene HTML (str) total y coloca en el elemento html en el DOM
    str="<ul>";
    datos.forEach((element) => {
        str+=callbackElemento(element);        
    });
    str+="</ul>";
    document.getElementById(idContenedor).innerHTML=str;
};
callbackElemento = (some)=> `<li>${some}</li>`; 


//Anterior
// generarLista = (datos, idContenedor, callbackElemento) => {
//     str="";
//     datos.forEach((element,index) => {
//         str+=`${index===0?"<ul>":""}<li>${element}</li>${index===(datos.length-1)?"</ul>":""}`;        
//     });
//     callbackElemento(str,idContenedor);
// };
// callbackElemento = (some, id)=>document.getElementById(id).innerHTML=some;



//Test
const verduras = ["Tomate", "Lechuga", "Zanahoria", "Guisante", "Col"];
generarLista(verduras, "demo", callbackElemento);


/*
|---------------------------------------------------------|
|                EJERCICIO 3: Uso de Métodos de Array Avanzados
| Enfoque: Aplicar los métodos de array integrados (.filter(), .findIndex())
|          usando funciones anónimas y funciones flecha para la lógica de filtrado/búsqueda.
|---------------------------------------------------------|
*/

/**
 * 1. Dado el array: const arrayNotas = [7.5, 9.2, 5.0, 8.8, 6.4, 4.9, 9.8, 7.0].
 * 2. Utiliza el método de array .filter() con una FUNCIÓN ANÓNIMA (classic function notation)
 * para crear un nuevo array llamado notasAprobadas que solo contenga notas iguales o superiores a 7.0.
 * 3. Utiliza el método de array .findIndex() con una FUNCIÓN FLECHA (arrow function)
 * para encontrar el índice de la primera nota que sea MENOR que 5.0 (suspenso).
 * Almacena el resultado en una variable llamada indiceSuspenso.
 * 4. Imprime ambos resultados (notasAprobadas e indiceSuspenso) en la consola.
 */

//Recordar a gemini