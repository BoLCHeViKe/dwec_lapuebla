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

//1B DIP: Crea un tipo de notificador más. Crea un array de controladores, recórrelo y ejecuta el método registrarUsuario() de cada uno de ellos
class SmsService implements Notificador {
  enviar(mensaje: string): void {
    console.log(`SMS enviado: ${mensaje}`);      
  }
}

const controladores = [controller1, controller2, new UserController(new SmsService)]; //Array que contiene un controlador de cada tipo
controladores.forEach((element,i) => {element.registrarUsuario(`${"Usuario 0"+(i+1)}`)
});






