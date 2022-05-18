/*
 * Herencia, es una forma de crear una nueva clase a partir de los datos de una clase existente. 
 * 
 * una clase que hereda data a una clase hijo, se le conoce como -> superclass
 * una clase que recibe una herencia (clase hijo), se le conoce como -> subclass
 */


class User {
  constructor(name) {
    this.name = name;
  }
}


class Gamer extends User {
  super(name) {
    this.name = name;
  }


  greet() {
    console.log(`Hello ${this.name}, you are a gamer!`)
  }
}


class Profesional extends User {
  super(name) {
    this.name = name;
  }


  greet() {
    console.log(`Hello ${this.name}, you are a profesional!`)
  }
}


let userIsGamer = new Gamer("John")
let userIsProfesional = new Profesional("John")


export default function abstraction() {
  console.log(userIsGamer.greet())
  console.log(userIsProfesional.greet())
}