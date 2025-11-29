/**
 * =======================================================
 * EJERCICIOS DE JAVASCRIPT: Funciones Anónimas, Arrow Functions y Callbacks
 * =======================================================
 */

// --- 1. Funciones Anónimas y Arrow Functions Básicas ---

/**
 * 1. Función Anónima para Multiplicar:
 * Define una variable 'multiplicar' y asígnale una función anónima 
 * que acepte dos números y devuelva su producto.
 */
// const multiplicar = function(/* Escribe aquí tu función anónima */) {
//   // Escribe aquí la lógica para multiplicar los dos argumentos
// };
// console.log("Resultado 1 (multiplicar 5 * 8):"); // Llama a la función aquí con 5 y 8

const multiplicar = function (num1,num2) {
    return num1*num2;    
};
console.log("Resultado 1 :"+multiplicar(5,8));
/**
 * 2. Arrow Function para Saludo:
 * Define una variable 'saludar' y asígnale una arrow function 
 * que acepte un nombre y devuelva un saludo.
 */
// const saludar = (/* Escribe aquí el argumento */) => {
//   // Escribe aquí la lógica para devolver el saludo
// };
// console.log("Resultado 2 (saludar 'Ana'):"); // Llama a la función aquí con "Ana"

saludar = (nombre) => "Saludos "+nombre;
console.log("Resultado 2 :"+saludar("Ana"));

/**
 * 3. Arrow Function para Verificar Par:
 * Crea una arrow function que reciba un número y devuelva true si es par.
 */

// const esPar = (/* Escribe aquí el argumento */) => /* Escribe aquí la expresión de retorno */;
// console.log("Resultado 3 (¿es 10 par?):"); // Llama a la función con 10
// console.log("Resultado 3 (¿es 7 par?):"); // Llama a la función con 7

const esPar = (number) => number%2===0;
console.log("Resultado 3 :"+esPar(7));


// --- 2. Uso de Callbacks (Funciones de Retrollamada) ---

/**
 * 4. Callback con Operación:
 * Define 'ejecutarOperacion' que reciba dos números y un callback.
 * Dentro, llama al callback pasando los números. Usa una función anónima 
 * para la suma como callback.
 */
// function ejecutarOperacion(/* Recibe num1, num2 y el callback */) {
//   // Llama al callback con num1 y num2
// }

// // Define la función anónima de suma aquí
// const sumar = /* Escribe aquí la función anónima de suma */;

// console.log("Resultado 4 (ejecutarOperacion con suma, 15 y 5):"); // Llama a ejecutarOperacion

const ejecutarOperacion = (number1, number2, callback) => callback(number1,number2);
const sumar = (num1, num2) => num1+num2;
console.log("Resultado 4 :"+ejecutarOperacion(15,5,sumar));

/**
 * 5. Callback para Transformar String:
 * Crea 'transformarTexto' que reciba un string y un callback.
 * Debe devolver el resultado del callback aplicado al string.
 * Usa una arrow function para convertir a mayúsculas como callback.
 */
// function transformarTexto(texto, /* Recibe el callback */) {
//   // Retorna el resultado de llamar al callback
// }
// // Define la arrow function para convertir a mayúsculas
// const aMayusculas = (/* Escribe aquí el argumento */) => /* Escribe aquí la expresión */;
// console.log("Resultado 5 (transformarTexto 'javascript'):"); // Llama a transformarTexto

const transformarTexto = (texto, callback) => callback(texto);
const convMayus = (texto) => texto.toUpperCase();
console.log("Resultado 5 :"+transformarTexto("javascript",convMayus));

/**
 * 6. Simulación de Demora con Callback:
 * Define 'despuesDeDosSegundos' que usa setTimeout para ejecutar 
 * una arrow function como callback después de 2000ms.
 */
// function despuesDeDosSegundos() {
//   // Usa setTimeout aquí. Su segundo argumento debe ser una arrow function
// }
// console.log("Resultado 6: El mensaje '¡Tiempo cumplido!' aparecerá después de 2 segundos.");
// despuesDeDosSegundos(); // Llama a la función
setTimeout(function() {
    console.log("Este mensaje aparece después de 3 segundos.");
}, 3000); // 3000 milisegundos (3 segundos)

function despuesDeDosSegundos() {
    return setTimeout(() => console.log("'¡Tiempo cumplido!'"),2000);    
};
console.log("Resultado 6: El mensaje '¡Tiempo cumplido!' aparecerá después de 2 segundos.");
despuesDeDosSegundos();
// --- 3. Array Methods con Funciones Anónimas y Arrow Functions ---

const numeros = [1, 2, 3, 4, 5];
const edades = [12, 18, 25, 8, 30];
const nombres = ["elena", "pablo", "maria"];

/**
 * 7. Iteración con forEach:
 * Usa forEach con una arrow function para imprimir cada número multiplicado por 2.
 */
// console.log("\nResultado 7 (forEach - Multiplicado por 2):");
// numeros.forEach(/* Escribe aquí la arrow function */);
numeros.forEach((element) => console.log(element*2));
/**
 * 8. Filtrado con filter:
 * Usa filter con una arrow function para crear un array de mayores o iguales a 18.
 */

const edades18=edades.filter((element)=>element>=18);
console.log(edades18);

// const mayoresDeEdad = edades.filter(/* Escribe aquí la arrow function para la condición */);
// console.log("Resultado 8 (filter - Mayores de edad):", /* Imprime el nuevo array */);




/**
 * 9. Mapeo con map:
 * Usa map con una función anónima para crear un array de nombres capitalizados.
 */

const upperNames = nombres.map(function (element){
    return element.toUpperCase();

});

console.log(upperNames);







// const nombresCapitalizados = nombres.map(function(/* Escribe aquí el argumento */) {
//   // Escribe aquí la lógica para capitalizar el string
// });
// console.log("Resultado 9 (map - Nombres capitalizados):", /* Imprime el nuevo array */);

let dni = prompt("Introduce dni");
console.log(dni);