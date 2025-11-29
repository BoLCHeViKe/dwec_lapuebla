class User {

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

  // Datos de persistencia
  // getById() {
  //   console.log(`Simulando consulta usuario ${this.id}`); //No es un console.log como tal, sería un SELECT
  //   console.log(`Hago log de getById`); //Esta función en la clase User es lo que rompe el SRP
  // }

  // saveUser() {
  //   console.log(`Simulando salvar usuario ${this.id}`); //Simula un INSERT
  //   console.log(`Hago log de saveUser`);
  // }

}

const user1: User = new User(1, "Angel");
// user.saveUser();
// user.getById();


//2.A.	El ejemplo Exercise.ts viola un principio SOLID ¿Cuál es y explica por qué? 
//Viola el principio SRP (Single Responsability Principle)el cual dice que cada entidad debe tener una responsabilidad unica, sin embargo, la clase User tiene varias responsabilidades: almacena al user (la propia clase), lo crea (saveUser()), lo muestra (getById())y tambien contiene la función de hacer log (tanto del getById como del saveUser)
// Por lo que la solucion que proponemos es externalizar todas esas funciones fuera de la clase User: la función de hacer log (en una clase Logger o posteriormente una abstracción de este) y la función de gestionar usuario (En otra clase, GestorUsuario para poder crear y obtener user), dejando al "POJO" solo como "POJO"

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

const gestor1: GestorUsuario = new GestorUsuario(user1);
const log: Logger = new Logger();

gestor1.saveUser();
log.log(`Hago log de saveUser`);


gestor1.getById();
log.log(`Hago log de getById`);
