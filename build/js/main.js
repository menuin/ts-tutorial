"use strict";
let myName1 = "Em"; // implicitly stated type
let myName2 = "Em"; // explicitly stated type
let myName3;
// myName1 = 42; // compiler does not like it
let meaningOfLife;
let isLoading;
let album; // any datatype is ok
let postId; // union type : string or number is ok
let regex = /\w+/g;
myName1 = "John";
meaningOfLife = 42;
isLoading = true;
album = "Van Halen";
// const sum1 = (a,b) => { // parameter a and b implictly has 'any' type
//     return a + b;
// }
const sum2 = (a, b) => {
    return a + b;
};
const sum3 = (a, b) => {
    return a + b;
};
