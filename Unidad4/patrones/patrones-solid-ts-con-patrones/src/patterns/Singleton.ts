class Configuracion {
  private static instancia: Configuracion;
  private constructor(public readonly apiUrl: string) {}

  static getInstancia(): Configuracion {
    if (!Configuracion.instancia) {
      Configuracion.instancia = new Configuracion("https://api.miapp.com");
    }
    return Configuracion.instancia;
  }
}

const conf1 = Configuracion.getInstancia();
const conf2 = Configuracion.getInstancia();

console.log(conf1 === conf2); // true ✅
