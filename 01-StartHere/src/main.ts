/* 
  Channel: Dave Gray
  Video: TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
  Link: https://www.youtube.com/watch?v=gieEQFIfgYc&t=38s
*/

// TypeScript infiere el tipo de una variable por su valor asignado
let username = "ALfred";
console.log(username);

let a: number = 12;
let b: number = 6;
let c: number = 2;

console.log(a / b);
console.log(c * b);

/*
  Ejemplos de documentación.
  Link: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
*/

const message = "Hello, World!";
// Accediendo a la propiedad 'toLowerCase' en 'message' y luego invocarla
message.toLowerCase();
// Invocando 'message'
//message(); // Error de signaturas de llamada

const user = {
  name: "Daniel",
  age: 26,
}
// Accediendo a una propiedad de objeto
//console.log(user.location); // Error propiedad no definida

const announcement = "Hello World!";
// Identificar errores de digitación
//announcement.toLocaleLowercase();
//announcement.toLocalLowerCase();
// Forma deseada
announcement.toLocaleLowerCase();

function flipCoin() {
  // Debería ser Math.random()
  //return Math.random < 0.5; // Error de invocación de función
}

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} //else if (value === "b") {
  // Nunca se ejecutará
//}

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

//greet("Jalenna"); // Argumento faltante
//greet("Joseph", Date()); // Tipo de argumento no coincidente
greet("Yadira", new Date());