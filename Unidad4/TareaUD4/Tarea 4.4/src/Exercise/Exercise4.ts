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


//4.- Quiero cambiar la forma en que hago log de los métodos de persistencia y flexibilizarla pudiendo tener varios tipos de logs. Por ejemplo, uno que escriba “Hago log de saveUser por console log” y otro que ponga “Hago log de saveUser por alert” (Aunque no uses alert porque en node no funciona). 
//A.	¿Qué principio aplicarías y explica por qué? 
// Sin duda alguna, aplicaría el patrón de Strategy (centrado en el tipo de comportamiento), el cual se basa plenamente en el principio DIP (Dependency Inversion Principle), el cual nos especifica que nuestras entidades de alto nivel deben depender de las abstracciones de las entidades de bajo nivel (Logger en nuestro caso, lo transformaremos de clase a interfaz), no de estas ultimas directamente (sus diferentes implementaciones).

// 

interface Logger{
  log(mensaje: string): void;
}

class LogConsole implements Logger{
  log(mensaje: string): void{
    console.log(`CONSOLE log: ${mensaje}`);
  }
}

class LogAlert implements Logger{
  log(mensaje: string): void{
    console.log(`ALERT Log: ${mensaje}`);
  }
}

const consoleLog: Logger = new LogConsole();
const alertLog: Logger = new LogAlert();

//Combinamos los testeoss de los ejercicios anteriores:

//Elegimos crear a un usuario empleado
const empleado1 = UserFactory.crear("empleado",1,"Luis"); //Hace saveUser()

consoleLog.log(`Hago log de saveUser tipo empleado`); //Utilizamos nuestro log por consola

//Lo saludamos
const saludo: Saludo = new Saludo();
saludo.saludo(empleado1,"¿Como se encuentra nuestro empleado?");

//Elegimos crear a un usuario Jefe
const jefe1 = UserFactory.crear("jefe",2,"Francisco"); //Hace saveUser()
alertLog.log(`Hago log de saveUser tipo jefe`);

//Lo saludamos
saludo.saludo(jefe1,"¿Como se encuentra nuestro Jefe?");


