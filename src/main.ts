/*                           */
/*                           */
/*      TYPE ASSERTIONS      */
/*                           */
/*                           */

// type aliases
type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "hello";
let b = a as Two; // assign a to less specific type (Two)
let c = a as Three; // assign a to more specific type (Three)

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

// let myVal: string = addOrConcat(2,2,'concat'); // ts doesn't like this!
let myVal: string = addOrConcat(2, 2, "concat") as string;
let myNumber: number = addOrConcat(2, 2, "concat") as number; // ts sees no problem here, but a string is returned.

// 10 as string // wrong!
10 as unknown as string; // double casting (forced casting) - not recommended

// The DOM
// Let's see what typescript infers
const elem = document.querySelector("#myID"); // returns Element | null
// const myImg = document.getElementById('#img') // returns HTMLElement | null
const img = document.querySelector("img"); // returns HTMLImageElement | null

const obviouslyImg = document.querySelector("img") as HTMLImageElement;
obviouslyImg.src;

// non-null assertion
const myImg = document.getElementById("#img")!;
const nextImg = <HTMLImageElement>document.getElementById("#img");
