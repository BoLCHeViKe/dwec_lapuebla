class GestorUsuarios {
  crearUsuario(nombre: string) {
    console.log(`👤 Usuario ${nombre} creado.`);
  }
}

class Logger {
  log(mensaje: string) {
    console.log(`📝 Log: ${mensaje}`);
  }
}

const gestor = new GestorUsuarios();
const logger = new Logger();

gestor.crearUsuario("Ana");
logger.log("Usuario creado correctamente");
