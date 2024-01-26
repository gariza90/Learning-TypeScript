/* 
  Channel: Dave Gray
  Video: TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
  Link: https://www.youtube.com/watch?v=gieEQFIfgYc&t=4199s
  */

// Type alisases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string, // ?: propiedad opcional
  active: boolean,
  albums: stringOrNumberArray,
}

type UserId = stringOrNumber;

// Literal types, asignación con :
let myName: "Dave";
// myName = "John";

let userName: "Dave" | "John" | "Amy";
userName = "Amy";

// Functions
const add = (a: number, b: number): number => {
  return a + b;
}

const logMsg = (message: any): void => {
  console.log(message);
}

logMsg("Hello");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
}

logMsg(subtract(7, 4));

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
}

logMsg(multiply(2, 2));

// Optional parameters ?:
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;  
};

logMsg(addAll(5, 3, 2));
logMsg(addAll(5, 2));

// Default parameters
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;  
};

logMsg(sumAll(5, 3, 2));

// Rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4, 5));

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

// Custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number"
    ? true
    : false;
}

// Use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
}