export interface Notificacion {
  enviar(mensaje: string): void;
}

class NotificacionEmail implements Notificacion {
  enviar(mensaje: string): void {
    console.log(`📧 Enviando email: ${mensaje}`);
  }
}

class NotificacionSMS implements Notificacion {
  enviar(mensaje: string): void {
    console.log(`📱 Enviando SMS: ${mensaje}`);
  }
}

class NotificacionPush implements Notificacion {
  enviar(mensaje: string): void {
    console.log(`🔔 Enviando notificación push: ${mensaje}`);
  }
}

export class NotificacionFactory {
  static crear(tipo: string): Notificacion {
    switch (tipo) {
      case "email":
        return new NotificacionEmail();
      case "sms":
        return new NotificacionSMS();
      case "push":
        return new NotificacionPush();
      default:
        throw new Error("Tipo de notificación no soportado");
    }
  }
}

const notificacion = NotificacionFactory.crear("email");
notificacion.enviar("Hola desde Factory Pattern 👋");
