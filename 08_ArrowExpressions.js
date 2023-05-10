let x = function (a) {
    return 5*a;
}

// ES6
let y = a => 5*a; 
console.log(y(5));

// map function that comes with arrow expressions
let arr = [5,10,20];
let newArr = arr.map(x => x*2);
console.log(newArr);

// varArgs in Java
let mid = [3,4];
let arr2 = [1,2,...mid,5,6];
console.log(arr2);

function howManyElements(...theArgs) {
    console.log(theArgs.length);
}

howManyElements();
howManyElements(5);
howManyElements(3,4,7,8,9);

function multiply(multiplier,...theArgs) {
    return theArgs.map(element => multiplier * element);
}

console.log(multiply(5,1,2,3,4,5)); // [ 5, 10, 15, 20, 25 ]

let str = 'CYDEO';
let chars = [...str];
console.log(chars); // [ 'C', 'Y', 'D', 'E', 'O' ]