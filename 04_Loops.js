// loops are same with Java : for loop, while loop, do while
for (let i = 0; i < 5; i++){        // local scope
    console.log(i);
}
// console.log(i); it gives error

console.log();

// old type of declaring variables before ES6 : side topic
for (var j = 0; j < 5; j++){
    console.log(j);
}
console.log(j); // this ype is global and function scope

console.log();

let n1 = 0;
while (n1 < 3){
    console.log(n1);
    n1++;
}

console.log();

let n2 = 0;
do {
    console.log(n2);
    n2++;
} while (n2 < 3);

