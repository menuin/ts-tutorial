// Original JS Code and Typescript doesn't like it
// const year = document.getElementById('year');
// const thisYear = new Date().getFullYear();
// year.setAttribute('datetime', thisYear);
// year.textContent = thisYear;

// 1st variation
// always look for what ts infers (it wants to help you!)
// let year : HTMLElement | null; // year is possibly null
// year = document.getElementById('year');
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if (year){ // type guard since year is possibly null
//     year.setAttribute('datetime', thisYear);
//     year.textContent = thisYear;
// }

// 2nd variation
// using assertions
const year = document.getElementById("year") as HTMLSpanElement;
let thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
