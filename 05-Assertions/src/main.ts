/* 
  Channel: Dave Gray
  Video: TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
  Link: https://www.youtube.com/watch?v=gieEQFIfgYc&t=6097s
  */

type One = string;
type Two = string | number;
type Three = "hello";

// Convert to more or less specific
let a: One = "hello";
let b = a as Two; // Less specific
let c = a as Three; // More specific

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
}

let myVal: string = addOrConcat(2, 2, "concat") as string;
console.log(myVal);

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "add") as number;
console.log(nextVal);

// 10 as string;
(10 as unknown) as string;

// The DOM
const img = document.querySelector("img")!; // ! Non null assertion
const myImg = document.querySelector("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.querySelector("#img");

img.src
// myImg.scr