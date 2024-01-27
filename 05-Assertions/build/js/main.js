"use strict";
let a = "hello";
let b = a;
let c = a;
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
console.log(myVal);
let nextVal = addOrConcat(2, 2, "add");
console.log(nextVal);
10;
const img = document.querySelector("img");
const myImg = document.querySelector("#img");
const nextImg = document.querySelector("#img");
img.src;
