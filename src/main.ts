let myName1 = "Em"; // implicitly stated type
let myName2 : string = "Em" // explicitly stated type
let myName3: string;

// myName1 = 42; // compiler does not like it

let meaningOfLife : number;
let isLoading : boolean;
let album: any; // any datatype is ok
let postId : string | number; // union type : string or number is ok
let regex: RegExp = /\w+/g;

myName1 = "John";
meaningOfLife = 42;
isLoading = true;
album = "Van Halen"

// const sum1 = (a,b) => { // parameter a and b implictly has 'any' type
//     return a + b;
// }

const sum2 = (a:number, b:number) => { // sum2 returns number
    return a + b;
}

const sum3 = (a:number, b:string) => { // sum3 returns string
    return a + b;
}
