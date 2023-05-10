/**
 * There is no Collection in JS.
 * In JS we only have Arrays and Map
 * NOT fixed size
 * There are two important brackets  in JS,
 * 1. []    ==> creates an Array
 * 2. {}    ==> creates an Object
 */

let scores = new Array();       // creates an empty Array
let emptyArray = [];            // creates an empty Array
let numbers = new Array(10);    // creates an Array with size 10
let myNumbers = new Array (1,2,3,5,8,13);
let colors = ['red', 'green', 'blue'];

console.log(scores);        // []
console.log(emptyArray);    // []
console.log(numbers);       // [ <10 empty items> ]
console.log(myNumbers);     // [ 1, 2, 3, 5, 8, 13 ]
console.log(colors);        // [ 'red', 'green', 'blue' ]

console.log('---------------------------');

console.log(typeof(scores));        // object
console.log(typeof(numbers));       // object
console.log(typeof(emptyArray));    // object
console.log(typeof(myNumbers));     // object
console.log(typeof(colors));        // object

console.log('---------------------------');

// print second element in an Array
console.log(colors[1]);     // indexed based ==> green

// add element in an Array
colors.push('white');
console.log(colors);    // [ 'red', 'green', 'blue', 'white' ]

// add element to beginning of the Array
colors.unshift('orange');   
console.log(colors);        // [ 'orange', 'red', 'green', 'blue', 'white' ]

console.log('---------------------------');

console.log(colors.pop());  // giving the last element and removing at the same time ==> white

console.log('---------------------------');

console.log(colors);        // [ 'orange', 'red', 'green', 'blue' ]

console.log('---------------------------');

// the size of the Array
console.log(colors.length);     // 4

console.log('---------------------------');

for(let i = 0; i < colors.length; i++){
    console.log(colors[i]);         // 1. orange   2.red     3.green   4.blue
}

console.log('---------------------------');

// loop with values of Array (for of)
for(let value of colors){
    console.log(value);             // 1. orange   2.red     3.green   4.blue
}

console.log('---------------------------');

colors.forEach(element => {         // (for each)
    console.log(element);           // 1. orange   2.red     3.green   4.blue
});

console.log('---------------------------');

// can we add multiple type of data? YES
let soupOfData = [5, 'oscar', true, undefined];     // you can also put Map, Object, Functions inside Array
console.log(typeof soupOfData)      // object

console.log('---------------------------');

soupOfData.forEach(element => {
    console.log(typeof element)     // 1. number   2.string    3.boolean   4.undefined
});