// ❌ Ejemplo sin aplicar DIP
class EmailService {
  enviar(mensaje: string) {
    console.log(`📧 Email enviado: ${mensaje}`);
  }
}

class UserController {
  private notificador: EmailService;

  constructor() {
    this.notificador = new EmailService();
  }

  registrarUsuario(nombre: string) {
    console.log(`👤 Usuario ${nombre} registrado`);
    this.notificador.enviar(`Bienvenido, ${nombre}`);
  }
}

const controller = new UserController();
controller.registrarUsuario("Carlos");
