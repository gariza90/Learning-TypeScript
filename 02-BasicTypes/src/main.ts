/* 
  Channel: Dave Gray
  Video: TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
  Link: https://www.youtube.com/watch?v=gieEQFIfgYc&t=1539s
  */

/*
 - TypeScript => Strongly Typed Language
 - JavaScript => Loosely Typed Language, aka Weakly Typed
 - Static Typing != Strongly Typed, Dynamic Typing != Loosely Typed
 - A language that is strongly typed can be either statically or dynamically typed!
 - TypeScript is a statically typed language. This means types are checked at compile time
 - JavaScript is a dynamically typed language. This means types are checked at run time
 - Benefits of TypeScript: Self documenting, Catch errors in dev, Great for teams
 */

let myName: string;
let meaningOfLife: number;
let isLoading: boolean;
let anyType: any;
let album: string | number; // Un tipo u otro

//myName = 56; // Error de tipo
myName = "Giovanny";
meaningOfLife = 42;
isLoading = true;
anyType: true; // Cualquier tipo de dato
album = "Van Halen";

const sum = (a: number, b: string) => {
  return a + b;
}

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;