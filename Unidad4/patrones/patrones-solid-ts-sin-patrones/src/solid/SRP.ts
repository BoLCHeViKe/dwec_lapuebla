// ❌ Ejemplo sin aplicar SRP
class GestorUsuarios {
  crearUsuario(nombre: string) {
    console.log(`👤 Usuario ${nombre} creado.`);
    this.log(`Usuario ${nombre} creado correctamente.`);
  }

  log(mensaje: string) {
    console.log(`📝 Log interno: ${mensaje}`);
  }
}

const gestor = new GestorUsuarios();
gestor.crearUsuario("Ana");
