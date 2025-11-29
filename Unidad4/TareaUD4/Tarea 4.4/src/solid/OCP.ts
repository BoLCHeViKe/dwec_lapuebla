interface Descuento {
  aplicar(precio: number): number;
}

class DescuentoNormal implements Descuento {
  aplicar(precio: number): number {
    return precio;
  }
}

class DescuentoNavidad implements Descuento {
  aplicar(precio: number): number {
    return precio * 0.9;
  }
}

class CarritoOCP {
  constructor(private descuento: Descuento) {}

  calcularPrecio(precioBase: number): number {
    return this.descuento.aplicar(precioBase);
  }
}

const carritoNormal = new CarritoOCP(new DescuentoNormal());
const carritoNavidad = new CarritoOCP(new DescuentoNavidad());

console.log(carritoNormal.calcularPrecio(100));
console.log(carritoNavidad.calcularPrecio(100));

//1A OCP: Añadir un nuevo descuento al carrito sin modificar código existente. 
class DescuentoCliente implements Descuento{ //Creamos nuevo descuento para clientes del 20%
  aplicar(precio: number): number {
    return precio*0.8; 
  }
}
const carritoCliente = new CarritoOCP(new DescuentoCliente());

console.log(carritoCliente.calcularPrecio(100));