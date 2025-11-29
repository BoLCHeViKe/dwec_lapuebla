interface Nadador {
  nadar(): void;
}

interface Volador {
  volar(): void;
}

class Pato implements Nadador, Volador {
  nadar(): void {
    console.log("🦆 Nadando...");
  }
  volar(): void {
    console.log("🦆 Volando...");
  }
}

class Pez implements Nadador {
  nadar(): void {
    console.log("🐠 Nadando...");
  }
}

const pato = new Pato();
const pez = new Pez();

pato.nadar();
pato.volar();
pez.nadar();
