/*
 * Abstracción, simplemente es la forma de decir que no se conoce como se compone algo,
 *, pero se conoce cuál es su funcionalidad.
 * 
 */


class User {
  #name // -> declaración de campo privado
  constructor(name) {
    this.#name = name;
  }

  login() {
    // Hacer algo con las credenciales (en este caso, #name) y retornar un resultado
    console.log('login')
  }

  logout() {
    // Hacer algo con las credenciales (en este caso, #name) y retornar un resultado
    console.log('logout')
  }
}


let user = new User("John");


export default function abstraction() {
  console.log(user.login())
  console.log(user.logout())
}