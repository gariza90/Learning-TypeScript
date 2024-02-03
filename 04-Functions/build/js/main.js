"use strict";
let myName;
let userName;
userName = "Amy";
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
logMsg(subtract(7, 4));
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(5, 3, 2));
logMsg(addAll(5, 2));
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(5, 3, 2));
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 5));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNumber = (value) => {
    return typeof value === "number"
        ? true
        : false;
};
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
function CalculateRectArea(base, height) {
    return base * height;
}
function printArea(result) {
    console.log(`Result: ${result}`);
}
let calculator;
calculator = CalculateRectArea;
calculator = printArea;
console.log(calculator(2, 10));
let scientificCalculator;
scientificCalculator = CalculateRectArea;
console.log(scientificCalculator(4, 13));
function process(n1, n2, callback) {
    const result = n1 + n2;
    callback(result);
}
process(10, 10, (x) => console.log(x));
let userInput = 4;
userInput = true;
if (typeof userInput === "number") {
    const number1 = userInput;
}
