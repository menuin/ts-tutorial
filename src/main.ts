/*                    */
/*    Type Aliases    */
/*                    */
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active?: boolean;
  albums: (string | number)[];
};

type UserId = stringOrNumber;
// interface PostId = stringOrNumber // this doesn't work
// interface is more like an object

/*                    */
/*    Literal Types   */
/*                    */
let myName: "Dave";
let userName: "Dave" | "John" | "Amy";
// userName = 'Rachel' // wrong!
userName = "Amy";

/*                    */
/*      Functions     */
/*                    */
const add = (a: number, b: number): number => {
  // returns number
  return a + b;
};

const logMsg = (message: any): void => {
  // do not return anything
  console.log(message);
};

logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number; // returns number
// interface로 작성할 경우
// interface mathFunction {
//   (a: number, b: number) : number
// }
let multiply: mathFunction = function (c, d) {
  return c * d;
};
logMsg(multiply(2, 2));

const addAll = (a: number, b: number, c?: number): number => {
  // parameter c is optional (possibly undefined)
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
// Default Param Value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  // parameter a is default 10
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3)); // a의 default value를 그대로 쓰려면 a 자리에 undefined를 적어줘야 함

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4)); // a = 10, ...nums = 2, 3, 4

const createError = (errMsg: string): never => {
  // never : this function explicitly throws error
  throw new Error(errMsg);
};

// never : this function has infinite loop within it
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break; // return type 확인해보기 (never | void)
  }
};

// custom type guards
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of never type
const numberOrString = (value: number | string): string => {
  // type guards
  if (typeof value === "string") return "string";
  // if (typeof value === 'number') return 'number';
  if (isNumber(value)) return "number";
  // typeof value === 'undefined' 일 경우(which should not happen)의 리턴값을 포함해야 함(typescript needs it)
  return createError("This should never happen"); // returning 'never' type
};
