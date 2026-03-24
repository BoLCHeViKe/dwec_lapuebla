interface Cafe {
  costo(): number;
  descripcion(): string;
}

class CafeSimple implements Cafe {
  costo(): number {
    return 2;
  }
  descripcion(): string {
    return "☕ Café simple";
  }
}

class DecoradorLeche implements Cafe {
  constructor(private cafe: Cafe) {}
  costo(): number {
    return this.cafe.costo() + 0.5;
  }
  descripcion(): string {
    return this.cafe.descripcion() + " + 🥛 leche";
  }
}

class DecoradorChocolate implements Cafe {
  constructor(private cafe: Cafe) {}
  costo(): number {
    return this.cafe.costo() + 0.7;
  }
  descripcion(): string {
    return this.cafe.descripcion() + " + 🍫 chocolate";
  }
}

let miCafe: Cafe = new CafeSimple();
miCafe = new DecoradorLeche(miCafe);
miCafe = new DecoradorChocolate(miCafe);

console.log(`${miCafe.descripcion()} cuesta ${miCafe.costo()}€`);
