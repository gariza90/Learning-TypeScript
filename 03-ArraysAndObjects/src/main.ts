/* 
  Channel: Dave Gray
  Video: TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
  Link: https://www.youtube.com/watch?v=gieEQFIfgYc&t=2483s
*/

// Arreglos
// TypeScript infiere los tipos de datos de acuerdo al contenido del arreglo
let strArray = ["Hey", "One", "Giovanny"]; // Arreglo tipo string
let guitars = ["Strat", "Les Paul", 5150]; // Arreglo tipo string | number
let mixedData = ["EVH", 1984, true]; // Arreglo tipo string | number | boolean
let test = []; // Arreglo tipo any

//strArray[0] = 42; // Error de tipo
//strArray.push(56); // Error de tipo
strArray[0] = "John";
strArray.push("Hello");

//guitars[0] = true; // Error de tipo
guitars.unshift("Jim");

// Asignación explícita de tipos a un arreglo
let anything: any[]; // Arreglo tipo any
let bands: string[] = []; // Arreglo tipo string
let bass: (string | number)[]; // Arreglo tipo string | number

bands.push("Van Halen");

// -------------------------------------------------------------------------
// Tuplas
// La asignación de tipos en un tupla se hace por la posición del dato
let myTuple: [string, number, boolean] = ["Dave", 42, true];
let mixed = ["John", 1, false];

// Se puede asignar una tupla a una variable tipo any o que tenga la misma
// estructura de datos
//myTuple = mixed; // Error
mixed = myTuple;

// myTuple[0] = 56; // Error de tipo en posición de tupla
myTuple[1] = 56;

console.log(myTuple);

// -------------------------------------------------------------------------
// Objetos
let myObj: object;
myObj = [];

console.log(typeof myObj);

myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: true,
}

//exampleObj.prop1 = 42; // Error de tipo
exampleObj.prop1 = "Jim";

// Declaración de tipos en propiedades de objetos
type Guitarist2 = {
  name: string,
  active?: boolean, // ?: propiedad opcional
  albums: (string | number)[]
}

// Declaración de interface, equivalente a la declaración de tipo (Usado
// principalmente en la declaración de clases)
interface Guitarist {
  name?: string, // ?: propiedad opcional
  active: boolean,
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"]
}

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"]
}

// No se permite la asignación de propiedades no declaradas en type
//evh.years;
evh = jp;

console.log(evh);

const greetGuitarist = (guitarist: Guitarist) => {
  //return `Hello ${guitarist.name.toUpperCase()}`; // Error sobre undefined
  //return `Hello ${guitarist.name?.toUpperCase()}`; // ?: propiedad opcional
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}`
  }  
  return "Hello!"; 
};

console.log(greetGuitarist(jp));

// -------------------------------------------------------------------------
// Enumeraciones
// Las enumeraciones no es una adición a JavaScript, TypeScript simula el
// comportamiento de una enumeración en JavaScript
enum Grade {
  U = 1, 
  D, 
  C, 
  B, 
  A,
}

// Acceso al valor de una enumeración
console.log(Grade.A);

/*
  Channel: El Camino Dev
  Video: Curso de TypeScript Gratis - Aprende los conceptos básicos de TypeScript
  Link: https://youtu.be/ll80pcKPJ2Y?si=VJhOmb2mEuc54CVM&t=3405
*/

// Asignación de tipos a las propiedades de un objeto
const customer: {
  name: string,
  age: number,
} = {
  name: "Giovanny",
  age: 45,
};

/* Link: https://youtu.be/ll80pcKPJ2Y?si=eAuS2pSCwMR4ZZZ9&t=4692 */

// Modificación de cada clave de la enumeración
enum colors {
  red = "#ff0000",
  green = "#00ff00",
  blue = "#0000ff",
}

console.log(colors.blue);