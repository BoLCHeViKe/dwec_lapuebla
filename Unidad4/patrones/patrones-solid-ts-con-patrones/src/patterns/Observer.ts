interface Observador { //este es el que obliga a tener le metodo actualizar
  actualizar(mensaje: string): void;
}

class Canal { //Controla el array de suscriptores
  private observadores: Observador[] = [];

  suscribir(obs: Observador) {
    this.observadores.push(obs);
  }

  notificar(mensaje: string) {
    for (const obs of this.observadores) {
      obs.actualizar(mensaje);
    }
  }
}
//Crear otro suscriptor
class Invitado implements Observador {
  constructor(private registroIP: string){}
    actualizar(mensaje: string): void {
      console.log(`📢 ${this.registroIP} ha recibido la promoción: ${mensaje}`);
    }

}


class Usuario implements Observador {
  constructor(private nombre: string) {}
  actualizar(mensaje: string): void {
    console.log(`📢 ${this.nombre} ha recibido: ${mensaje}`);
  }
}

const canal = new Canal();
const ana = new Usuario("Ana");
const luis = new Usuario("Luis");

canal.suscribir(ana);
canal.suscribir(luis);

const guest1 = new Invitado("77.200.20.20");
const guest2 = new Invitado("78.201.90.90");

canal.suscribir(guest1);
canal.suscribir(guest2);

canal.notificar("¡Nuevo vídeo disponible!");
