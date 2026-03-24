// ❌ Ejemplo sin patrón Strategy
class Carrito {
  pagar(monto: number, metodo: string) {
    if (metodo === "tarjeta") {
      console.log(`💳 Pagando ${monto}€ con tarjeta.`);
    } else if (metodo === "paypal") {
      console.log(`💰 Pagando ${monto}€ con PayPal.`);
    } else if (metodo === "bitcoin") {
      console.log(`₿ Pagando ${monto}€ con Bitcoin.`);
    } else {
      console.log("Método no soportado ❌");
    }
  }
}

const carrito = new Carrito();
carrito.pagar(50, "tarjeta");
carrito.pagar(75, "paypal");
