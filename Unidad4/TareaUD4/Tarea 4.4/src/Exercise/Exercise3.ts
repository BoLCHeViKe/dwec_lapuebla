abstract class User {

  private _id: number | null = null;  
  private _name: string = '';  

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  public get id(): number | null {
    return this._id;
  }

  public set id(value: number | null) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }  
}

class GestorUsuario{
  constructor(private usuario: User){}
  saveUser(){
        console.log(`Simulando salvar usuario ${this.usuario.id}`); //Simula un INSERT
  }
  getById(){
    console.log(`Simulando consulta usuario ${this.usuario.id}`); //No es un console.log como tal, sería un SELECT
  }
}

class Logger{
  log(mensaje: string){
    console.log(`Log: ${mensaje}`)
  }
}


//3.	Convierte la clase User en abstract y un método saludar y añade dos clases a Exercise.ts, Employee y Boss que hereden de User. Pide por teclado el tipo de clase a crear y crea la adecuada y haz un saludo.
//A. ¿Qué patrón aplicarías y explica por qué?
//Para contestar a esta pregunta, al referirse estrictamente a un patrón, utilizaría el patron de Factory Method, para encapsular la creación de objetos (User abstracto como UserFactory y en un switch UserEmployee y UserBoss) pero al hablar el enunciado de "herencia", aunque la pregunta se ciña a un patrón, es inevitable en pensar en el principio de LISKOV para crear dicha herencia, principio que tiene como objetivo salvaguardar la funcionalidad del programa evitando que afecte a su integridad (por resultados erróneos o no esperados) de manera que User pueda ser sustituido por cualquiera de sus hijos (Employee y Boss) y continue funcionando con normalidad nuestro programa


//B. Propón una modificación del código que lo aplique. 
class Employee extends User{
  constructor(id: number, name: string){
    super(id, name);
  }
}

class Boss extends User{
  constructor(id: number, name: string){
    super(id, name);
  }  
}

export class UserFactory {
  static crear(tipo: string, id: number, name: string): User {
    switch (tipo) {
      case "empleado":
        const nuevoEmpleado = new Employee(id, name); //Creamos el objeto de tipo User
        (new GestorUsuario(nuevoEmpleado)).saveUser(); //Utilizamos el GestorUsuario para realmente crear el usuario (empleado en este caso)
        return nuevoEmpleado; //Devolvemos el empleado ya creado
      case "jefe":
        const nuevoJefe = new Boss(id, name);
        (new GestorUsuario(nuevoJefe)).saveUser(); //Utilizamos el GestorUsuario para realmente crear el usuario (jefe en este caso)
        return nuevoJefe;
      default:
        throw new Error("Tipo de usuario no encontrado");
    }
  }
}

class Saludo{
  saludo(usuario: User,mensaje: string): void{
    console.log(`Saludo para ${usuario.name}: ${mensaje}`)
  }
}


//Elegimos crear a un usuario empleado
const empleado1 = UserFactory.crear("empleado",1,"Luis"); //Hace saveUser()
const log: Logger = new Logger();
log.log(`Hago log de saveUser tipo empleado`);

//Lo saludamos
const saludo: Saludo = new Saludo();
saludo.saludo(empleado1,"¿Como se encuentra nuestro empleado?");

//Elegimos crear a un usuario Jefe
const jefe1 = UserFactory.crear("jefe",2,"Francisco"); //Hace saveUser()
log.log(`Hago log de saveUser tipo jefe`);

//Lo saludamos
saludo.saludo(jefe1,"¿Como se encuentra nuestro Jefe?");


