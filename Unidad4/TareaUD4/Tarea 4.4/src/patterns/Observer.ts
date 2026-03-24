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
//Crear otro tipo de suscriptor
class Invitado implements Observador {
  constructor(private ip: string){}
    actualizar(mensaje: string): void {
      console.log(`📢 ${this.ip} ha recibido la promoción: ${mensaje}`);
    }
}


class Usuario implements Observador {
  constructor(private nombre: string) {}
  actualizar(mensaje: string): void {
    console.log(`📢 ${this.nombre} ha recibido: ${mensaje}`);
  }
}

const canalUser = new Canal();
const ana = new Usuario("Ana");
const luis = new Usuario("Luis");

canalUser.suscribir(ana);
canalUser.suscribir(luis);

//1C Observer: Añadir un nuevo descuento al carrito sin modificar código existente. ¿¿??

const canalGuest = new Canal();
const guest1 = new Invitado("77.200.20.20");
const guest2 = new Invitado("78.201.90.90");

canalGuest.suscribir(guest1);
canalGuest.suscribir(guest2);

canalUser.notificar("¡Nuevo vídeo disponible solo para usuarios!"); //Enviamos info por el canal de usuarios
canalGuest.notificar("¡Nueva información disponible solo para invitados!"); //Enviamos info por el canal de invitados


const canalesAll = [canalGuest,canalUser];
canalesAll.forEach(element => {element.notificar("¡Nuevo descuento Halloween del 20% para todos! ¡Estes registrado o no!") //Enviamos info por todos los canales
  
});

