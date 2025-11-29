// ❌ Ejemplo sin patrón Observer
class Usuario {
  constructor(public nombre: string) {}
  recibir(mensaje: string) {
    console.log(`📢 ${this.nombre} ha recibido: ${mensaje}`);
  }
}

class Canal {
  constructor(public usuarios: Usuario[]) {}

  notificar(mensaje: string) {
    for (const usuario of this.usuarios) {
      usuario.recibir(mensaje);
    }
  }
}

const ana = new Usuario("Ana");
const luis = new Usuario("Luis");

const canal = new Canal([ana, luis]);
canal.notificar("¡Nuevo vídeo disponible!");
