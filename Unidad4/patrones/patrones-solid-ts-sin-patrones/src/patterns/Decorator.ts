// ❌ Ejemplo sin patrón Decorator
class Cafe {
  constructor(private conLeche: boolean, private conChocolate: boolean) {}

  costo(): number {
    let total = 2;
    if (this.conLeche) total += 0.5;
    if (this.conChocolate) total += 0.7;
    return total;
  }

  descripcion(): string {
    let desc = "☕ Café simple";
    if (this.conLeche) desc += " + 🥛 leche";
    if (this.conChocolate) desc += " + 🍫 chocolate";
    return desc;
  }
}

const cafe = new Cafe(true, true);
console.log(`${cafe.descripcion()} cuesta ${cafe.costo()}€`);
