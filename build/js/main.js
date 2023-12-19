"use strict";
// mouseover the variables!
let stringArray = ["one", "hey", "EM"]; // string[]
let guitars = ["Strat", "Les Paul", 5150]; // (string | number)[]
let mixedData = ["EVH", 1984, true]; // (string | number | boolean)[]
// stringArr[0] = 42;
// stringArray.push(42);
guitars[0] = 1984;
guitars.unshift("Jim"); // add at the beginning
// guitars.unshift(true);
// stringArray = guitars;
guitars = stringArray;
// guitars = mixedData;
let test = []; // any[]
let bands = [];
bands.push("Van Halen");
// bands.push(true);
/*                       */
/*         TUPLE         */
/*                       */
let myTuple = ["Em", 42, true]; // more strict than array
let mixed = ["John", 1, false];
mixed = myTuple; // no problem
// myTuple = mixed;
// myTuple[3] = 42 // type of 4th element of myTuple is not defined
myTuple[1] = 42;
/*                        */
/*         OBJECT         */
/*                        */
let myObj;
myObj = [];
console.log(typeof myObj); // object
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Em",
    prop2: true,
};
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    albums: ["I", "II", "IV"],
};
evh = jp;
// evh.years = 40; // wrong
const greetGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`; // guitarist.name could possibly be 'undefined'
    }
    return "Hello!";
};
console.log(greetGuitarist(jp)); // Hello Jimmy!
/*                       */
/*          enum         */
/*                       */
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    // U = 1,  // 1부터 시작
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); // 0
