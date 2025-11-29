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
  getById() {
    console.log(`Simulando consulta usuario ${this.id}`);
    console.log(`Hago log de getById`);
  }

  saveUser() {
    console.log(`Simulando salvar usuario ${this.id}`);
    console.log(`Hago log de saveUser`);
  }

}

const user: User = new User(1, "Angel");
user.saveUser();
user.getById();
