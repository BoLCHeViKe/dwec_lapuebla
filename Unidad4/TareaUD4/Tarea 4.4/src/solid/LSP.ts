interface Animal {
  mover(): void;
}

class AveVoladora implements Animal {
  mover(): void {
    console.log("🕊️ Volando...");
  }
}

class AveNoVoladora implements Animal {
  mover(): void {
    console.log("🚶 Caminando...");
  }
}

const gorrion = new AveVoladora();
const pinguino = new AveNoVoladora();

gorrion.mover();
pinguino.mover();
