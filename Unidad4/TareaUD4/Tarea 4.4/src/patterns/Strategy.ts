interface MetodoPago {
  pagar(monto: number): void;
}

class PagoTarjeta implements MetodoPago {
  pagar(monto: number): void {
    console.log(`💳 Pagando ${monto}€ con tarjeta.`);
  }
}

class PagoPayPal implements MetodoPago {
  pagar(monto: number): void {
    console.log(`💰 Pagando ${monto}€ con PayPal.`);
  }
}

class PagoBitcoin implements MetodoPago {
  pagar(monto: number): void {
    console.log(`₿ Pagando ${monto}€ con Bitcoin.`);
  }
}

class Carrito {
  constructor(private metodoPago: MetodoPago) {}

  setMetodoPago(metodo: MetodoPago) {
    this.metodoPago = metodo;
  }

  pagar(monto: number) {
    this.metodoPago.pagar(monto);
  }
}

const carrito = new Carrito(new PagoTarjeta());
carrito.pagar(50);
carrito.setMetodoPago(new PagoPayPal());
carrito.pagar(75);

//E.	Strategy: Añadir un nuevo método de pago. 
class PagoBizum implements MetodoPago{
  pagar(monto: number):void {
    console.log(`Pagando ${monto}€ vía Bizum`);
  }
}

//aprovechamos el carrito (suponiendo que cambiemos el metodo de pago con el mismo carrito)

carrito.setMetodoPago(new PagoBizum()); //instanciamos el objeto PagoBizum sin declararlo previamente
carrito.pagar(150);

//o declarando un objeto y luego señalandolo
const bizum = new PagoBizum();
carrito.setMetodoPago(bizum);
carrito.pagar(150);