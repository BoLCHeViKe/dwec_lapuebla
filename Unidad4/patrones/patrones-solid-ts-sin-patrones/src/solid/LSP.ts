// ❌ Ejemplo sin aplicar LSP
class AveVoladora {
  volar() {
    console.log("🕊️ Volando...");
  }
}

class Pinguino extends AveVoladora {
  volar() {
    throw new Error("🐧 Los pingüinos no vuelan");
  }
}

const ave = new AveVoladora();
const pinguino = new Pinguino();

ave.volar();
try {
  pinguino.volar();
} catch (e) {
  console.error((e as Error).message);
}
