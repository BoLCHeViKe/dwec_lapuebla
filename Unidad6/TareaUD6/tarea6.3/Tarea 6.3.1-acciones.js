//  Dentro de Tarea 6.3.1-acciones.js debes hacer lo siguiente:
   const parrafos = document.getElementsByTagName('p');  //Lo vamos a necesitar
// 1.- Saca el nº de párrafos del documento con el texto: "El número de párrafos del       documento es: " --> Debe salir 3
   //Nuevo Div para contener el ej1
   const nuevoDiv1 = document.createElement('div');//Creamos div vacio
   const nuevoTexto1 = document.createTextNode(`Ej1: El numero de parrafos son: ${parrafos.length}`); //Ya hemos creado el todo de tipo texto con el contenido que nos solicitan
   document.body.appendChild(nuevoDiv1);//Hacemos que nuestro nuevo Div sea ultimo hijo de body
   //Y finalmente unimos el nodo texto a nuestro nodo div ya unido a body
   nuevoDiv1.appendChild(nuevoTexto1);

// 2.- Saca el valor nodo hijo 0 del párrafo 1: --> “Párrafo DOM es dos”
    //Nuevo Div para contener el ej2
   const nuevoDiv2 = document.createElement('div');
   document.body.appendChild(nuevoDiv2);

   const nuevoTexto2 = document.createTextNode(`Ej2: El valor nodo hijo 0 del parrafo 1 es en este momento:" ${parrafos[1].firstChild.nodeValue}"`); //Obtenemos valor
   nuevoDiv2.appendChild(nuevoTexto2); //Y lo unimos a nuestro nuevo div
     
// 3.- Modifica su valor para que ponga "Él párrafo segundo se ha modificado" y muéstralo
    //Nuevo Div para contener el ej3
   const nuevoDiv3 = document.createElement('div');
   document.body.appendChild(nuevoDiv3);
    //Entendemos que parrafo segundo se refiere al parrafo[1]
   parrafos[1].firstChild.nodeValue="Él párrafo segundo se ha modificado"; //Modificacion
    nuevoDiv3.appendChild(document.createTextNode(`Ej3: ${parrafos[1].firstChild.nodeValue}`));
   
// 4.- Crea un nuevo nodo tipo p con el valor 'Párrafo cuatro creado usando el DOM'
// Crea las variables necesarias para crear el párrafo (nuevoParrafo) y el texto (nuevoTexto)
   const nuevoParrafo4= document.createElement('p');
   const nuevoTexto4= document.createTextNode('Párrafo cuatro creado usando el DOM');
// Añade un hijo a nuevoParrafo con el valor de nuevoTexto, y añade el nuevoParrafo al body
nuevoParrafo4.appendChild(nuevoTexto4);
document.body.appendChild(nuevoParrafo4);
// Muestra un mensaje diciendo "Se ha añadido el párrafo 4 " y saca su valor

// Vuelve a sacar el número de párrafos del documento con el texto: "Ahora, el número de    párrafos es: " --> Debe salir 4
console.log(`Ej4 apartado 2: Ahora, el número de párrafos es: ${parrafos.length}`);
// 5.- Antes de borrarlo pon un pantallazo del resultado con el texto de los 4 párrafos para ver los 4 nodos "p"
    //Vamos a imprimirlo por el DOM mejor:
const nuevoDiv5 = document.createElement('div');
function joinHTMLCollectionOnlyTextValues(htmlCollection) { //La hemos creado para imprimir facilmente una htmlCollection (que no tenga nodos hijos de tipo elemento, solo texto)
    let str="";
    for (let i = 0; i < htmlCollection.length; i++) {
        str+=`[${htmlCollection[i].firstChild.nodeValue}]`;
    }
    return str;    
}

const nuevoTexto5 = document.createTextNode("Ej5: "+joinHTMLCollectionOnlyTextValues(parrafos));

nuevoDiv5.appendChild(nuevoTexto5);
document.body.appendChild(nuevoDiv5);

// 6.- Después realiza el proceso de borrado. Borra el párrafo creado anteriormente del body
document.body.removeChild(nuevoParrafo4);
// Vuelve a sacar el número de párrafos tras borrar con el texto: "Ahora, tras borrarlo, el número vuelve a ser 3"
//Lo contestamos por console.log () -> no especifica porque medio mostremos el mensaje
console.log(`Ej6: Ahora, el número de párrafos es: ${parrafos.length}`);
