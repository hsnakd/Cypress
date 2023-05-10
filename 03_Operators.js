/** 
    The following math operations are supported:
        Addition        +
        Subtraction     -
        Multiplication  *
        Division        /
        emainder        %
        Exponentiation  **

*/

// Order of operators in JS is same with JAVA
console.log(4+4*(-1)-8/2);      // -4

// assignment operators

let x = 5;
x += 5;
console.log(x);     // 10

// Comparison : Similar to JAVA with some difference

let one = 1;
let one_again = 1;
let one_string = '1';
let two_string = '2';

console.log(one == one_again);                  //true
console.log(one == one_string);                 //true  : ==  sign is looking for value equality
console.log(one === one_string);                //false : === looking for both value and dataType
console.log(one_string === two_string);         //false

// logical operators same like JAVA: you only short circuit && , ||
console.log((5<2)&&(2<5));      // false

// control flow statements : if/if else / swith / break / continue same with JAVA

let num1 = 100;
let num2 = 10;
if(num1>num2){
    console.log('number 1 is bigger');
}else{
    console.log('number 2 is bigger');
}


//ternary operator
let age = 25;
let isEligible = age > 18 ? true : false;
console.log(isEligible);        // true

//swith operator
let month = 2;
let dayCount;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        dayCount = 31;
        break;
    case 4: case 6: case 9: case 11:
        dayCount = 30;
        break;
    case 2:
        dayCount = 28;
        break;
    default:
        dayCount = -1;
        break;
}

console.log(dayCount);
