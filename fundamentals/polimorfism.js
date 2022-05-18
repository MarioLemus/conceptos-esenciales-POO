/*
 * Polimorfismo, está estrechamente relacionada con la herencia, debido a que las subclases, heredan un comportamiento
 * predeterminado de la clase padre, pero pueden sobreescribir ese comportamiento, para ser distinto según
 * la necesidad.
 *
 * Nota -> Polimorfismo se puede hacer de mejor manera usando interfaces
*/


class User {
  constructor(name) {
    this.name = name;
  }


  greet() {
    return ''
  }
}


class Gamer extends User {
  greet() {
    return `Hello ${this.name}, you have fortnite in your PC!`
  }
}


class Profesional extends User {
  greet() {
    return `Hello ${this.name}, you have office in your PC!`
  }
}


let userIsGamer = new Gamer("John")
let userIsProfesional = new Profesional("John")


export default function abstraction() {
  console.log(userIsGamer.greet())
  console.log(userIsProfesional.greet())
}