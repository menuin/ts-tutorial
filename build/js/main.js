"use strict";
/*                           */
/*                           */
/*      TYPE ASSERTIONS      */
/*                           */
/*                           */
let a = "hello";
let b = a; // assign a to less specific type (Two)
let c = a; // assign a to more specific type (Three)
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
// let myVal: string = addOrConcat(2,2,'concat'); // ts doesn't like this!
let myVal = addOrConcat(2, 2, "concat");
let myNumber = addOrConcat(2, 2, "concat"); // ts sees no problem here, but a string is returned.
// 10 as string // wrong!
10; // double casting (forced casting) - not recommended
// The DOM
// Let's see what typescript infers
const elem = document.querySelector("#myID"); // returns Element | null
// const myImg = document.getElementById('#img') // returns HTMLElement | null
const img = document.querySelector("img"); // returns HTMLImageElement | null
const obviouslyImg = document.querySelector("img");
obviouslyImg.src;
// non-null assertion
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
