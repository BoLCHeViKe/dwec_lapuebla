// ❌ Ejemplo sin aplicar OCP
class Carrito {
  calcularPrecio(precioBase: number, tipo: string): number {
    if (tipo === "normal") {
      return precioBase;
    } else if (tipo === "navidad") {
      return precioBase * 0.9;
    } else if (tipo === "blackfriday") {
      return precioBase * 0.8;
    }
    return precioBase;
  }
}

const carrito = new Carrito();
console.log(carrito.calcularPrecio(100, "navidad"));
