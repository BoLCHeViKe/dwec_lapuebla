//2.- Haz el ejercicio anterior, pero usando sólo clases ES6 con las siguientes modificaciones. (5 puntos)
class Animal {
    constructor(nombre){
        this._nombre=nombre;
    }
    hacerRuido(){
        return `Soy ${this._nombre}, soy un animal, hago `;
    }

//	El nombre de la clase animal debe establecerse con setter y getter. 
    //Setter

    
    set nombre(nombre){
        //En el setter del nombre del animal se deberá comprobar que si se introduce un número lanza una excepción.
        if (!isNaN(nombre)) {
            throw new Error ("El nombre no puede ser un número");
        }
        this._nombre=nombre;
    }
    get nombre(){
        return this._nombre;
    }
};

class Gato extends Animal{
    constructor (nombre, pelaje){
        super(nombre);
        this._pelaje=pelaje;

    }
    hacerRuido(){
        return super.hacerRuido() + `miauuuuu y tengo el pelo ${this._pelaje}`; 
    }
    
        //set
    set pelaje(pelaje){
        this._pelaje=pelaje;
        }
    get pelaje(){
        return this._pelaje;
    }
}

//Haz ejemplos de uso de las clases anteriores.

let miGato=new Gato("Yuffie","Marron");
console.log(miGato);// Vemos la propiedades el objeto

miGato.pelaje = "blanco y gris";

//Probamos a introducir un number como nombre en set nombre() en vez de string para ver como nos muestra el resultado de la excepción
try {
    miGato.nombre= 5;
} catch (error) {
    console.warn(error); //Lo gestionamos como warning
}
miGato.nombre = "Isidoro"

//Imprimimos el objeto ya mutado y su funcion
console.log(miGato);
console.log(miGato.hacerRuido());

let miGato2=new Gato("GatoLoco","negro");

console.log(`Los gatos ${miGato.nombre} y ${miGato2.nombre} ${miGato===miGato2?"":"NO"} son iguales`);




class Flamenco extends Animal{
    constructor (nombre, alas){
        super(nombre);
        this._alas=alas; 

    }
    hacerRuido(){
        return super.hacerRuido() + `mmmeeewwwww y tengo tengo ${this._alas} alas`;
    }
    
        //set
    set alas(alas){
        if (isNaN(alas)) {
            throw new Error("Las alas deben de ser numero");            
        }
        this._alas=Math.trunc(alas);
        }
    get alas(){
        return this._alas;
    }
}

//Haz ejemplos de uso de las clases anteriores.


let miFlamenco = new Flamenco("Farruquito",2);
console.log(miFlamenco);
console.log(miFlamenco.hacerRuido());
//Nos trunca las alas, pero lo admite al ser number
miFlamenco.nombre="Fenix el flamenco";
miFlamenco.alas= 4.5;
//Vemos el objeto ya mutado
console.log(miFlamenco);
console.log(miFlamenco.hacerRuido());

//Probamos a introducir un string en el set alas() en vez de numero para ver como nos muestra el error
try {
    miFlamenco.alas= "cuatro";
} catch (error) {
    console.warn(error); //Gestionado como warning
}

