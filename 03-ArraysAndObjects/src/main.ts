/* 
  Channel: Dave Gray
  Video: TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
  Link: https://www.youtube.com/watch?v=gieEQFIfgYc&t=2483s
  */

let strArray = ["Hey", "One", "Giovanny"]; // Arreglo tipo string
let guitars = ["Strat", "Les Paul", 5150]; // Arrego tipo string | number
let mixedData = ["EVH", 1984, true]; // Arreglo tipo string | number | boolean

//strArray[0] = 42; // Error de tipo
//strArray.push(56); // Error de tipo
strArray[0] = "John";
strArray.push("Hello");

//guitars[0] = true; // Error de tipo
guitars.unshift("Jim");

let test = []; // Arreglo tipo any
let bands: string[] = []; // Arreglo tipo string
bands.push("Van Halen");

// Tuplas
let myTuple: [string, number, boolean] = ["Dave", 42, true];
let mixed = ["John", 1, false];

// myTuple = mixed;
mixed = myTuple;

// myTuple[0] = 56;
myTuple[1] = 56;

// Objects
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

// Declaración de tipos en propiedades de objetos. Interface
type Guitarist2 = {
  name: string,
  active?: boolean, // ?: propiedad opcional
  albums: (string | number)[]
}

// Equivalente a (Usado en la declaración de clases)
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

// Enums
// Las enumeraciones no es una adición a JavaScript, TypeScript simula el comportamiento
// de una enumeración en JavaScript
enum Grade {
  U = 1, 
  D, 
  C, 
  B, 
  A,
}

console.log(Grade.A);