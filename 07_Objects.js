let person = {
    firstName : "Joe",
    lastName : 'Doe'
}

console.log(typeof person);
console.log(person);
console.log(person.firstName);

let address = {
    'building no' : 5555,
    street : 'Keowee',
    state : 'Kentucky'
}

console.log(address);
console.log(address['building no']);
console.log(address['street']);

// add new property to object
person.age = 30;
console.log(person);// { firstName: 'Joe', lastName: 'Doe', age: 30 }

// delete a property
delete person.age;
console.log(person);// { firstName: 'Joe', lastName: 'Doe' }

// check a property if it exists
console.log('street' in address); // true

// you can put arrays inside objects
let course = {
    name : 'JS',
    url : 'www.cydeo.com',
    subjects : ['Objects','Arrays','Functions','Live Server']
}
console.log(course);


// loop using keys of the object
for (let key in course) {
   console.log(key+" : "+course[key]);
}

// value which was array turned into string = Objects,Arrays,Functions,Live Server

/**
 * We will have fixtures folder in Cypress Tool, we store JSON files
 */

// let's create an object with function, array, object in it
let myCar = {
    make : 'Dacia',
    color : 'orange',
    year : 2022,
    engine : {
        cylinders : 3,
        size : 1.0
    },
    extras : ['AC','Cruise Control','Sound Sytem'],
    drive : function () {
        console.log("Running on LPG");
    }
}

myCar.drive(); // like in JAVA

console.log(myCar.extras[1]); // you are familiar with this from API testing