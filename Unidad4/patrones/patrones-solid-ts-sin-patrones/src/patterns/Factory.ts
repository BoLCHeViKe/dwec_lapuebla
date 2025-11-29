// ❌ Ejemplo sin patrón Factory
class NotificacionEmail {
  enviar(mensaje: string) {
    console.log(`📧 Enviando email: ${mensaje}`);
  }
}

class NotificacionSMS {
  enviar(mensaje: string) {
    console.log(`📱 Enviando SMS: ${mensaje}`);
  }
}

class NotificacionPush {
  enviar(mensaje: string) {
    console.log(`🔔 Enviando notificación push: ${mensaje}`);
  }
}

const tipo = "email";
let notificacion;

if (tipo === "email") {
  notificacion = new NotificacionEmail();
} else if (tipo === "sms") {
  notificacion = new NotificacionSMS();
} else if (tipo === "push") {
  notificacion = new NotificacionPush();
}

notificacion.enviar("Hola desde el código sin Factory 👋");
