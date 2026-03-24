interface Notificador {
  enviar(mensaje: string): void;
}

class EmailService implements Notificador {
  enviar(mensaje: string) {
    console.log(`📧 Email enviado: ${mensaje}`);
  }
}

class PushService implements Notificador {
  enviar(mensaje: string) {
    console.log(`🔔 Push enviado: ${mensaje}`);
  }
}

class UserController {
  constructor(private notificador: Notificador) {}

  registrarUsuario(nombre: string) {
    console.log(`👤 Usuario ${nombre} registrado`);
    this.notificador.enviar(`Bienvenido, ${nombre}`);
  }
}

const email = new EmailService();
const push = new PushService();

const controller1 = new UserController(email);
controller1.registrarUsuario("Carlos");

const controller2 = new UserController(push);
controller2.registrarUsuario("Laura");
