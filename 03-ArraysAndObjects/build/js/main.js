"use strict";
let strArray = ["Hey", "One", "Giovanny"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
let test = [];
strArray[0] = "John";
strArray.push("Hello");
guitars.unshift("Jim");
let anything;
let bands = [];
let bass;
bands.push("Van Halen");
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
mixed = myTuple;
myTuple[1] = 56;
console.log(myTuple);
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "Jim";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"]
};
evh = jp;
console.log(evh);
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return "Hello!";
};
console.log(greetGuitarist(jp));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
const customer = {
    name: "Giovanny",
    age: 45,
};
var colors;
(function (colors) {
    colors["red"] = "#ff0000";
    colors["green"] = "#00ff00";
    colors["blue"] = "#0000ff";
})(colors || (colors = {}));
console.log(colors.blue);
