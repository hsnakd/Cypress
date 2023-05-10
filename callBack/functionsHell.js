/***
 * in Java: make Database connection and get some data, then you use this data inside your code
 * --- Connect DB
 * --- gets data
 * --- is waiting until the data is received 
 * --- then executes rest of the code
 * in JS: 
 *  --- while trying to connect DB
 *  --- the rest of the functions does not wait -- async code
 */

function waitingForSomeServerToAct() {
    let dataNeeded;
    setTimeout(() => {
        console.log("BackEnd Information Have Just Been Received");
        dataNeeded = "Cydeo";
        console.log(dataNeeded);
    }, 5000);
    return dataNeeded;
}

function functionThatNeedsBackEndData(info) {
    console.log("I need to use BackEnd Data "+info);
}

let data = waitingForSomeServerToAct(); // calling server connection, getting the data and storing it to a variable
functionThatNeedsBackEndData(data); // this function does not wait for the result of previous action