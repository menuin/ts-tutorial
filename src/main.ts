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
let bands: string[] = [];
bands.push("Van Halen");
// bands.push(true);

/*                       */
/*         TUPLE         */
/*                       */
let myTuple: [string, number, boolean] = ["Em", 42, true]; // more strict than array
let mixed = ["John", 1, false];

mixed = myTuple; // no problem
// myTuple = mixed;

// myTuple[3] = 42 // type of 4th element of myTuple is not defined
myTuple[1] = 42;

/*                        */
/*         OBJECT         */
/*                        */
let myObj: object;
myObj = [];
console.log(typeof myObj); // object
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Em",
  prop2: true,
};

// exampleObj.prop2 = 42;

type Guitarist = {
  // or 'interface Guitarist'
  name?: string;
  active?: boolean; // 'active' property is optional (boolean | undefined)
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
  name: "Jimmy",
  albums: ["I", "II", "IV"],
};

evh = jp;
// evh.years = 40; // wrong

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name?.toUpperCase()}!`; // guitarist.name could possibly be 'undefined'
  }
  return "Hello!";
};

console.log(greetGuitarist(jp)); // Hello Jimmy!

/*                       */
/*          enum         */
/*                       */
enum Grade {
  U,
  // U = 1,  // 1부터 시작
  D,
  C,
  B,
  A,
}

console.log(Grade.U); // 0
