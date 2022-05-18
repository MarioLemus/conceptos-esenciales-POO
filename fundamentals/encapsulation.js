/*
 * Encapsulación, tal y como lo dice su nombre, es la idea de encerrar algo dentro de sí mismo. 
 * 
 * La encapsulación, se logra al vincular la función con la data dentro de una unidad, (clase) y al
 * hacer esto nos aseguramos de proteger la información de ser modificada en el mundo exterior 
 * y nos centramos en únicamente compartir la funcionalidad.
 * 
 * cuando la data no puede ser accedida directamente mediante una clase, entonces está bien encapsulada
 * 
*/


/*
 * El # simboliza que un campo o un método es privado en JS 
 *
 * Más info -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_With_Private_Class_Features 
*/
class User {
  // se debe incluir la declaración del campo antes de ser asignado, si no genera un error
  #name
  constructor(name) {
    this.#name = name;
  }

  greet() {
    return `Hello, how are you?, ${this.#name}`
  }
}


let user = new User('John')


/*
 * MAL [] -> Esta info está mal encapsulada, debido a que las variables internas, pueden ser accesidas y modificadas
 *
 * NOTA -> se permite el acceso y la modificación, sin inconvenientes
 * 
 * Ej:
 * 
 * user.name -> acceso a la data
*/


/*
 * BIEN [] -> Esta info está bien encapsulada, debido a que las variables internas, no pueden ser accedidas y modificadas
 *
 * NOTA -> al intentar acceder a una variable privada, se retorna undefined
 * 
 * Ej:
 * 
 * user.name -> retorna undefined
*/


export default function encapsulation() {
  console.log(user.name)
  console.log(user.greet())
  // al intentar modificar el valor de una propiedad privada, se retorna la modificación
  console.log(user.name = 'puppy') // -> retorna 'puppy'
}