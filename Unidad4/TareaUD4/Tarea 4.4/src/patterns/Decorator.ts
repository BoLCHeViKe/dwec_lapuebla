interface Cafe {
  costo(): number;
  descripcion(): string;
  toString(): string; //Le creamos el metodo no estatico para generar un toString completo
}

class CafeSimple implements Cafe {
  costo(): number {
    return 2;
  }
  descripcion(): string {
    return "☕ Café simple";
  }
  toString(): string { //Nuevo metodo creado
    return `${this.descripcion()} = ${this.costo().toFixed(2)} €`;
  }
}
//Por indicaciones de la práctica y del profesor, hemos editado Decorator.ts base para optar por la estructura con "Base Decorator" y que las clases "decorator" hereden de esta
class CafeDecorator implements Cafe {
  constructor(private cafe: Cafe){}
  costo(): number {
    return this.cafe.costo();
  }
  descripcion(): string {
    return this.cafe.descripcion(); 
  }
  toString(): string { //Nuevo metodo creado general para todos los Concrete Decorators
    return `${this.descripcion()} = ${this.costo().toFixed(2)} €`;
  }
}
//Modificamos estas clases: 
//Ya no implementa de Cafe, heredan de "Base Decorator"
// Le quitamos el constructor (ya esta en constructor en "Base Decorator") 
// Ya solo hace referencia al objeto cafe creado su padre "Base Decorator", ergo, super.
class DecoradorLeche extends CafeDecorator {

  costo(): number {
    return super.costo() + 0.5;
  }
  descripcion(): string {
    return super.descripcion() + " + 🥛 leche";
  }
}

class DecoradorChocolate extends CafeDecorator {
  costo(): number {
    return super.costo() + 0.7;
  }
  descripcion(): string {
    return super.descripcion() + " + 🍫 chocolate";
  }
}

let miCafe: Cafe = new CafeSimple();
miCafe = new DecoradorLeche(miCafe);
miCafe = new DecoradorChocolate(miCafe);

console.log(`${miCafe.descripcion()} cuesta ${miCafe.costo()}€`);


//F.	Decorator: i.	Modifica el ejercicio para que case con el diagrama UML de la bibliografía
//Realizado


//Testeamos que todo funciona correctamente con la nueva estructura de Decorator
let miNuevoCafe: Cafe = new DecoradorChocolate(new CafeSimple());
console.log(`${miNuevoCafe.descripcion()} cuesta ${miNuevoCafe.costo()}€`);


//ii.	Añade un nuevo topping a tu elección. Haz diferentes cafés con diferentes toppings. 
//nuevo topping, azucar (Via inheritance)
class DecoradorAzucar extends CafeDecorator{
  costo(): number {
      return super.costo() + 0.1;
  }
  descripcion(): string {
      return super.descripcion() + " + azucar";
  }
}

//nuevo topping, hielo (Via inheritance)
class DecoradorHielo extends CafeDecorator{
  costo(): number {
      return super.costo() + 0.2;
  }
  descripcion(): string {
      return super.descripcion() + " + hielo";
  }
}

//Cafe con leche con un azucar y dos hielos
let miSegundoCafe: Cafe = new DecoradorLeche(new CafeSimple); //Le echamos Leche
miSegundoCafe = new DecoradorHielo(new DecoradorHielo(new DecoradorAzucar(miSegundoCafe))) //Azucar y dos hielos
console.log(`${miSegundoCafe.descripcion()} cuesta ${miSegundoCafe.costo()}€`);

//aprovechamos nuestro nuevo metodo .toString() definido en BaseDecorator:
console.log(miSegundoCafe.toString());

//Cafe demasiado dulce
let miTercerCafe: Cafe = new DecoradorAzucar(new DecoradorChocolate(new CafeSimple));
console.log(miTercerCafe.toString());

//Cafe con un poco de todo
let miGranCafe: Cafe = new DecoradorChocolate(new DecoradorLeche(new DecoradorHielo(new DecoradorAzucar(new CafeSimple))));
console.log(miGranCafe.toString());