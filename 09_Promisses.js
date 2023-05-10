// we are using new Promise(function(resolve,reject))

let stateOfTheWebPage = function (state) {
    return new Promise(function (resolve,reject) {
        if(state){
            resolve('Page is loaded')
        }else{
            reject('Page is NOT loaded yet')
        }
    })
}

console.log(stateOfTheWebPage(true).then(function(result) {
    console.log(result);
}));
console.log(stateOfTheWebPage(true).then((result) => {
    console.log(result);
}));

console.log(stateOfTheWebPage(false).catch(function(errorMsg) {
    console.log(errorMsg);
}
));
console.log(stateOfTheWebPage(false).catch((errorMsg) => {
    console.log(errorMsg);
}
));

/**
 * new Promise(function(resolve,reject) {

})
 */

new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(1)
    }, 3000);
}).then((result) => {
    console.log(result);  // 1
    return result*2;
}).then((result2) => {
    console.log(result2); // 2
    return result2*2;
}).then((result3) => {
    console.log(result3); // 4
    return result3 * 2; // the value increased to 8 but we did not use it to log
})