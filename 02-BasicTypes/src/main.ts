/* 
  Channel: Dave Gray
  Video: TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
  Link: https://www.youtube.com/watch?v=gieEQFIfgYc&t=1539s
*/

/*
  - TypeScript => Lenguaje fuertemente tipado
  - JavaScript => Lenguaje debilmente tipado
  - Tipado estático != Tipado fuerte, y el Tipado dinámico != Tipado debil
  - Un lenguaje que es fuertemente tipado puede ser de tipado estático como dinámico!
  - TypeScript es un lenguaje de tipado estático. Significa que los tipos son analizados en tiempo de compilación
  - JavaScript es un lenguaje de tipado dinámico. Significa que los tipos son analizados en tiempo de ejecución
  - Beneficios de TypeScript: Auto documentado, Captura de errores en el desarrollo, Ideal para equipos de desarrollo
*/

let myName: string;
let meaningOfLife: number;
let isLoading: boolean;
let anyType: any;  // Cualquier tipo de dato
// Operador de unión | o pipe
// Union de tipos, similar a OR lógico
let album: string | number;

myName = "Giovanny";
meaningOfLife = 42;
isLoading = true;
anyType: true;
album = "Van Halen";

// TypeScript infiere el tipo retornado por la función
const sum = (a: number, b: string) => {
  return a + b;
}

// Union de tipos, similar a OR lógico
let postId: string | number;
let isActive: number | boolean;

// Tipo de dato RegExp
let re: RegExp = /\w+/g;

/*
  Channel: El Camino Dev
  Video: Curso de TypeScript Gratis - Aprende los conceptos básicos de TypeScript
  Link: https://youtu.be/ll80pcKPJ2Y?si=rLRGNy3xPxGfI011
*/

// Otros tipos numéricos
const color: number = 0xff00;
const bin: number = 0b00110011;