class Configuracion { //Objeto estatico
  private static instancia: Configuracion;
  private static apiUrl: string;
  private constructor(apiUrl: string) {
    Configuracion.apiUrl = apiUrl;

  } //Quitamos readonly 

  static getInstancia(): Configuracion {
    if (!Configuracion.instancia) {
      Configuracion.instancia = new Configuracion("https://api.miapp.com");
    }
    return Configuracion.instancia;
  }

  static setInstancia(nuevaInstancia: string): boolean { //Creamos manera de settear la instancia
    Configuracion.instancia = new Configuracion(nuevaInstancia);
    if (!Configuracion.instancia){
      throw new Error("La instancia no ha sido inicializada");
    }
    //Si entramos aquí, instancia ya esta inicializada
    Configuracion.instancia = new Configuracion(nuevaInstancia); //Cambiará el atributo privado instancia 
    //pero no el objeto
    return true;
  }
  getInstanciaName(): string{ //get de la nueva propiedad
    return Configuracion.apiUrl;
  }
  setInstanciaName(instance: string): void{ //Set de la nueva propiedad
    Configuracion.apiUrl=instance;
  }
}

const conf1 = Configuracion.getInstancia();
const conf2 = Configuracion.getInstancia();
console.log(conf1.getInstanciaName());
console.log(conf2.getInstanciaName());

console.log(conf1 === conf2); // true ✅

//1D.	Singleton: Añade setter y getter para una propiedad privada nueva y probar que varios objetos tienen los mismos valores

console.log(conf1.getInstanciaName());
Configuracion.setInstancia("https://api.mimaravillosaapi.com");
console.log(conf1.getInstanciaName());
console.log(conf2.getInstanciaName());
console.log(conf1 === conf2); // Vemos que sigue siendo True ✅ y la instancia modificada sigue siendo siendo la misma

conf1.setInstanciaName("https://api.mynewweb.com"); //Solo modificamos el objeto conf1
console.log(conf1.getInstanciaName());
console.log(conf2.getInstanciaName()); //Los dos objetos dan el mismo valor solo modificando uno de los objetos
console.log(conf1 === conf2); // Sigue siendo True ✅


  //¿Viola algún principio? ¿Por qué?
  //El patrón Singleton viola el principio SRP (Single responsability Principle), eya que este principio establece que una entidad solo debe de tener una unica responsabilidad (es decir, cumplir unicamente con el objetivo por la cual fue creada) pero sin embargo el patron Singleton, dado que tiene como objetivo resolver dos problemas (Garantizar que una clase tenga una unica instancia y proporcionar un punto de acceso global a dicha instancia), tiene doble objetivo realmente (instanciar/crear el objeto de tipo de si mismo y función para retornar dicha instancia), al tener dos funcionalidades diferentes, viola el SRP, que establece que solo debe de tener una por cada instancia.  
