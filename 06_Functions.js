// no access modifier, no method overloading

// NO return type function
function add(a,b) {  // parameters of function
    console.log("Total is : " + (a+b));  
}

// call a function -- argument we are passing
add(10,20); // Total is : 30

// return type functions
function multiply(a,b) { 
    return (a*b);
}

console.log(multiply(10,20));   // 200

// no overloading
add(10,20,30,200); // ignores after the second parameter

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 * They call functions as first class citizens of Javascript
 * 1. you can pass a function as an argument to other functions
 * 2. you can return a function from a function
 * 3. you can store a function into a varible
 */

let divide = function (a,b) {  // you can pass arguments to other functions
    return a/b;  // you can return a function from a function
}

console.log(divide(30,5));      // 6

// 3. store a function into a varible
let anyFunction = divide;       

console.log(anyFunction(30,5)); // 6

// 1. pass a function as an argument to other functions

function sum(a,b) {
    return a+b;
}

function average(a,b,fn) {
    return fn(a,b)/2;   
}

let aveResult = average(10,20,sum);
console.log("average result from sum : " + aveResult);              // average result from sum : 15  (10+20/2)

aveResult = average(10,20,multiply);
console.log("average result from multiplication : " + aveResult);   // average result from multiplication : 100 (10*20/2)
