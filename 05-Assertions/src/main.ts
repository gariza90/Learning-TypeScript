/* 
  Channel: Dave Gray
  Video: TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
  Link: https://www.youtube.com/watch?v=gieEQFIfgYc&t=6097s
*/

type One = string;
type Two = string | number;
type Three = "hello";

// Convertir a más o menos específico
let a: One = "hello";
let b = a as Two; // Menos específico
let c = a as Three; // Más específico

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
}

let myVal: string = addOrConcat(2, 2, "concat") as string;
console.log(myVal);

// Tener cuidado! TS no encuentra el problema - retorna una cadena cuando se 
// espera un número
let nextVal: number = addOrConcat(2, 2, "add") as number;
console.log(nextVal);

//10 as string;
(10 as unknown) as string;

// El DOM
const img = document.querySelector("img")!; // ! Non null assertion
const myImg = document.querySelector("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.querySelector("#img");

img.src
// myImg.scr