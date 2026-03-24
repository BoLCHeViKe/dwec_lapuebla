// ❌ Ejemplo sin patrón Singleton
class Configuracion {
  constructor(public apiUrl: string) {}
}

const conf1 = new Configuracion("https://api.miapp.com");
const conf2 = new Configuracion("https://otro-api.com");

console.log(conf1 === conf2); // false ❌
