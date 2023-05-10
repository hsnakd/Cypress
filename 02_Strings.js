let str1 = 'Java';
let str2 = 'Script';
let str3 = 'awesome';

let result;

result = "The result variable is: " + str1 + str2 + ' ' + str3;

console.log(result);        // The result variable is: JavaScript awesome

// Difference from Java :  Backticks for variable insertion

result =`the result variable is: ${str1}${str2} ${str3}`
console.log(result);
