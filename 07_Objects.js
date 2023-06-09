let person = {
    firstName : "Joe",
    lastName : 'Doe'
}

console.log(typeof person);             // object
console.log(person);                    // { firstName: 'Joe', lastName: 'Doe' }
console.log(person.firstName);          // Joe


console.log("----------------------------------");


// add new property to object
person.age = 30;
console.log(person);                    // { firstName: 'Joe', lastName: 'Doe', age: 30 }


console.log("----------------------------------");


// delete a property
delete person.age;
console.log(person);                        // { firstName: 'Joe', lastName: 'Doe' }


console.log("----------------------------------");


let address = {
    'building no' : 5555,
    street : 'Keowee',
    state : 'Kentucky'
}

console.log(address);                       // { 'building no': 5555, street: 'Keowee', state: 'Kentucky' }
console.log(address['building no']);        // 5555
console.log(address['street']);             // Keowee
console.log(address.state);                 // Kentucky

// check a property if it exists
console.log('street' in address);           // true


console.log("----------------------------------");


// you can put arrays inside objects
let course = {
    name : 'JS',
    url : 'www.cydeo.com',
    subjects : ['Objects','Arrays','Functions','Live Server']
}
console.log(course);
/*
        {
        name: 'JS',
        url: 'www.cydeo.com',
        subjects: [ 'Objects', 'Arrays', 'Functions', 'Live Server' ]
        }
*/


console.log("----------------------------------");


// loop using keys of the object
for (let key in course) {           // forin loop
   console.log(key + " : " + course[key]);
}

/*
        name : JS
        url : www.cydeo.com
        subjects : Objects,Arrays,Functions,Live Server
*/

console.log("----------------------------------");


console.log("URL : " + course.url + " & " + "SUBJECT : " + course.subjects);    // URL : www.cydeo.com & SUBJECT : Objects,Arrays,Functions,Live Server
 

console.log("----------------------------------");


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

// like in JAVA
myCar.drive();                      // Running on LPG

// you are familiar with this from API testing
console.log(myCar.extras);          // [ 'AC', 'Cruise Control', 'Sound Sytem' ]
console.log(myCar.extras[1]);       // Cruise Control
console.log(myCar.make);            // Dacia
