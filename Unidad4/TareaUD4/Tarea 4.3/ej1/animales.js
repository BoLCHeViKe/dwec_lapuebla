//1.- Realiza un programa de animales utilizando sólo funciones constructoras y prototipos. (5 puntos)

//A. Crea una “superclase” animal que tenga como atributo su nombre y tenga una función llamada hacerRuido() que imprima por consola “Soy (nombre) y soy un animal y hago…”.. (1 pto)

function Animal(nombre){
        this.nombre=nombre;
    // __proto__:{
    //     this.nombre=nombre;

    // }
};

Animal.prototype.hacerRuido = function(){ //Nunca arrow function
    return `Soy ${this.nombre} y soy un animal y hago…`;
}

//B. Luego crea dos clases de animales a tu elección que “hereden” de la “superclase” anterior y tengan un atributo específico cada una y un metodo hacerRuido() que imprima “Soy (nombre) y soy un animal y hago… y tengo (atributo) y hago guaauuu” (por ejemplo, si has definido un perro). (2 pto)


function Gato(nombre,pelaje){
    //__proto__ : Animal; //Manera 2
    Animal.call(this, nombre); //Establece el nombre haciendo referencia al prototipo
    this.pelaje=pelaje;

};

Object.setPrototypeOf(Gato.prototype, Animal.prototype); //Como señalar que Gato es un prototipo de Animal
Gato.prototype.hacerRuido = function(){
    //return Animal.prototype.hacerRuido()+`y tengo ${this.pelaje} y hago Miauu`;
    return `Soy ${this.nombre} y soy un animal, tengo el pelaje ${this.pelaje} y hago Miauu`;
    //return `${Animal.prototype.hacerRuido.call(this)} texto adicional`
};

//Llamando al super o algo de Animal, luego sale como undefined
// Gato.prototype.hacerRuido = function(){
//     Animal.prototype.hacerRuido();
//     console.log(`y tengo ${this.pelaje} y hago Miauu`);
// };

console.log(Animal.prototype);
console.log(Gato.prototype);
//Gato().__proto__ = Animal; //Manera 1
// Gato.prototype.hacerRuido = function(){
//     super.hacerRuido()+console.log(`y tengo ${this.pelaje} y hago miauuu”`)
// };


function Perro(nombre,colmillos){
    Animal.call(this, nombre);
    this.colmillos=colmillos;

};

Object.setPrototypeOf(Perro.prototype, Animal.prototype); 
Perro.prototype.hacerRuido = function(){
    return `Soy ${this.nombre} y soy un animal, tengo ${this.colmillos} colmillos y hago guauuuu`;
};

console.log(Perro.prototype);

//C. Haz ejemplos de usos de las “clases” anteriores. (1 pto)

let miGato = new Gato("Yuffie","marrón");
console.log(miGato.hacerRuido());

//Mutamos miGato
miGato.nombre="Mizifu";
miGato.pelaje="blanco";
console.log(miGato.hacerRuido());


let miPerro = new Perro("Bobbie",8);
console.log(miPerro.hacerRuido());

//Mutamos objeto miPerro
miPerro.nombre = "AyudanteSantaClaus";
miPerro.colmillos = 14;

console.log(miPerro.hacerRuido());


//D. ¿Dónde ves más adecuado definir los métodos en las funciones constructoras o en los prototipos? Justifica tu respuesta. (1 pto)

//Considero que en la mayoria de los casos será mas beneficioso definir los metodos en los prototipos, por el ahorro de memoria frente a crearlo en las funciones contructoras, que invocará ese mismo metodo cada vez que cree un objeto via funcion contructoras, mientras que creado en los prototipos, solo ocupara un solo espacio en memoria e irá directamente vinculado al prototipo, no al objeto una vez sea instanciado.

