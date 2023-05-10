console.log("Hello JavaScript Learners");

//Single Commet Line

/**
 * Multiple Comment Line
 */

// Declaring variables

/**
 * JS is dynamic typing language
 */

let a; //infers that a is undefined
console.log(typeof a);      // undefined

a=5; //infers that a is number
console.log(typeof a);      // number

a='BootCamp'; //infers that a is string
console.log(typeof a);      // string

a= true; //infers that a is boolean
console.log(typeof a);      // boolean

let x =5, y='Oscar';
console.log(x+y);           // concatination ==> 5Oscar
console.log(x*y);           // NaN

// Naming Rules : same with JAVA naming rules

// Constant Variables

const number = 35;
// TypeError: Assignment to constant variable.
// number = 45;
console.log(number);    // 35

let username = null;
console.log(username);  // null