/* 
  Channel: Dave Gray
  Video: TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
  Link: https://www.youtube.com/watch?v=gieEQFIfgYc&t=4199s
*/

// Alias de Tipos, type
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

// Definición de tipos en propiedades de un objeto
type Guitarist = {
  name?: string, // ?: propiedad opcional
  active: boolean,
  albums: stringOrNumberArray,
}

// Asignación de un alias de tipo a otro alias de tipo
type UserId = stringOrNumber;

// -------------------------------------------------------------------------
// Tipos literales
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types

// Asignación con :
let myName: "Dave";
//myName = "John"; // Error de tipo literal

// Union de tipos literales con | o pipe
let userName: "Dave" | "John" | "Amy";
userName = "Amy";

// -------------------------------------------------------------------------
// Funciones
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions

// Asignación explícita de tipo de dato de retorno de una función
const add = (a: number, b: number): number => {
  return a + b;
}

// Tipo de retorno void, para expresar no retorno de valor
const logMsg = (message: any): void => {
  console.log(message);
}

logMsg("Hello");
logMsg(add(2, 3));

// Asignación de declaración de una función a una variable
let subtract = function (c: number, d: number): number {
  return c - d;
}

logMsg(subtract(7, 4));

// Alias de tipo function
type MathFunction = (a: number, b: number) => number;

// Interface tipo function
// interface MathFunction {
  //   (a: number, b: number): number;
  // }
  
  let multiply: MathFunction = function (c, d) {
    return c * d;
  }
  
  logMsg(multiply(2, 2));
  
  // Parámetros opcionales ?:
  const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== "undefined") {
      return a + b + c;
    }
    return a + b;  
  };
  
  logMsg(addAll(5, 3, 2));
  logMsg(addAll(5, 2));
  
  // Parámetros por defecto
  const sumAll = (a: number, b: number, c: number = 2): number => {
    return a + b + c;  
  };
  
  logMsg(sumAll(5, 3, 2));
  
  // Parámetros Rest
  const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
  };
  
logMsg(total(1, 2, 3, 4, 5));

// El tipo never representa valores que nunca se observan. En un tipo de 
// valor devuelto, esto significa que la función produce una excepción o 
// finaliza la ejecución del programa
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
}

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
}

// Protección de tipo personalizado
const isNumber = (value: any): boolean => {
  return typeof value === "number"
  ? true
  : false;
}

// Uso del tipo never
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
}

/* 
Channel: El Camino Dev
Video: Curso de TypeScript Gratis - Aprende los conceptos básicos de TypeScript
Link: https://www.youtube.com/watch?v=ll80pcKPJ2Y&t=6010s
*/

function CalculateRectArea(base: number, height: number): number {
  return base * height;  
}

function printArea(result: number): void {
  console.log(`Result: ${result}`);
}

// Asignación de tipo Function (menos específico)
let calculator: Function;
// La variable sólo acepta funciones como valor
calculator = CalculateRectArea;
// TypeScript no genera error pero no es el comportamiento esperado
calculator = printArea;

console.log(calculator(2, 10));

// Asignación de la estructura de tipos de la función esperada (más 
// específico)
let scientificCalculator: (b: number, h: number) => number;

scientificCalculator = CalculateRectArea;
// scientificCalculator = printArea; // Error de tipo Function

console.log(scientificCalculator(4, 13));

// -------------------------------------------------------------------------
/* Link: https://www.youtube.com/watch?v=ll80pcKPJ2Y&t=6520s */

// Tipos Callback
// https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#callback-types

function process(n1: number, n2: number, callback: (result: number) => void): void {
  const result = n1 + n2;
  callback(result);
}

process(10, 10, (x) => console.log(x));

// -------------------------------------------------------------------------
/* Link: https://www.youtube.com/watch?v=ll80pcKPJ2Y&t=7006s */

// Tipo de dato unknown
// El tipo unknown representa cualquier valor. Esto es similar al tipo any, pero es más seguro porque no es legal hacer nada con un valor unknown:
// https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown

let userInput: unknown = 4;
userInput = true;

// No es asignable a otros tipo como si lo permite el tipo any
// const number1: number = userInput;

// Verificar el tipo de dato de una variable declarada como unknown
if(typeof userInput === "number") {
  const number1: number = userInput;
}