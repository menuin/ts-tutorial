let username = 'EM';
console.log(username);

// let a = 12;
// let b = '6';
// let c = 2;

// console.log(a/b); 
// console.log(c*b); 
// // typescript defined b as string (without us telling) but still compiles to js
// // ts파일에 오류가 있을 경우 컴파일을 원하지 않으면 emitOnError:"true" (tsconfig.json)

let a : number = 12;
let b : number = 6;
let c : number = 2;

console.log(a/b); // no warning in ts file!
console.log(c*b); 
