class JugadorGuerraNieve {
  constructor(nombre, vidas, daño) {
    this.nombre = nombre;
    this.vidas = vidas;
    this.daño = daño;
  }

  lanzarBola() {
    if (this.vidas > 0) {
      console.log(`${this.nombre} lanzó una bola de nieve causando ${this.daño} de daño.`);
    } else {
      console.log(`${this.nombre} no puede lanzar más bolas de nieve, ya no tiene vidas.`);
    }
  }
}

class Guerrero extends JugadorGuerraNieve {
  constructor(nombre) {
    super(nombre, 3, 1);
  }
}

class Mago extends JugadorGuerraNieve {
  constructor(nombre) {
    super(nombre, 2, 2);
  }
}

class EquipoGuerraNieve {
  constructor() {
    this.jugadores = [];
  }

  agregarJugador(jugador) {
    this.jugadores.push(jugador);
  }

  equipoPerdió() {
    return this.jugadores.every(jugador => jugador.vidas === 0);
  }
}

const equipo = new EquipoGuerraNieve();

const jugador1 = new JugadorGuerraNieve("Jugador1", 3, 10);
const guerrero1 = new Guerrero("Guerrero1");
const mago1 = new Mago("Mago1");

equipo.agregarJugador(jugador1);
console.log(jugador1)
equipo.agregarJugador(guerrero1);
console.log(guerrero1)

equipo.agregarJugador(mago1);
console.log(mago1)

console.log(equipo)