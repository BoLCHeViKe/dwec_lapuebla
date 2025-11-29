// ❌ Ejemplo sin aplicar ISP
interface Animal {
  nadar(): void;
  volar(): void;
}

class Pato implements Animal {
  nadar(): void {
    console.log("🦆 Nadando...");
  }
  volar(): void {
    console.log("🦆 Volando...");
  }
}

class Pez implements Animal {
  nadar(): void {
    console.log("🐠 Nadando...");
  }
  volar(): void {
    throw new Error("Los peces no vuelan ❌");
  }
}

const pato = new Pato();
const pez = new Pez();

pato.volar();
pez.nadar();
