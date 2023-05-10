function waitingForSomeServerToAct(myCallback) {
    let dataNeeded;
    setTimeout(() => {
        console.log("BackEnd Information Have Just Been Received");
        dataNeeded = "Cydeo";
       myCallback(dataNeeded)
    }, 5000);
    return dataNeeded;
}

function functionThatNeedsBackEndData(info) {
    console.log("I need to use BackEnd Data "+info);
}

waitingForSomeServerToAct(functionThatNeedsBackEndData);


/**
 * The first solution JS developers came up with was this callBack situation
 * ES6 -- promises handles async nature of JS
 * 2017 --- async functions, await keyword
 * What is a callBack Hell?
 * What is async code what is sync code?
 */

// alert("This is a JS alert");
/**
 * There are some JS commands like alert, prompt : these will work only in browsers with Live Server
 */

let userName = prompt("Enter your username");
console.log(userName);