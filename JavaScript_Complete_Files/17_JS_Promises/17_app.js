// JavaScript Promise Using Callback Functions
let doTask = (success,failure) => {
    // performing The Task
    let isDone = false;
    if(isDone){
        success('Task is Done');
    }
    else{
        failure('Task is NOT Done');
    }
};
doTask((message) => {
    console.log(message);
} , (message) => {
    console.log(message);
});

// Actual JavaScript Promise
// Promise Declaration
let getData = new Promise((resolve, reject) => {
    // Logic to get the data
    let gotData = false;
    if(gotData){
        resolve('Data is Received');
    }
    else{
        reject('Data not found');
    }
});

// Promise Call
getData.then((message) => {
    console.log(message);
}).catch((errorMsg) => {
    console.log(errorMsg);
});

// Dependent Promises
let doTechnicalRound = new Promise((resolve, reject) => {
    // performing the technical Round
    let isDone = true;
    if(isDone){
        resolve('Technical Round is Completed');
    }
    else{
        reject('Failed in Technical Round');
    }
});

let doManagerRound = new Promise((resolve, reject) => {
    // performing manager Round
    let isDone = true;
    if(isDone){
        resolve('Manager Round is Completed');
    }
    else{
        reject('Failed in Manager Round');
    }
});

let doHRRound = new Promise((resolve, reject) => {
    // Performing the HR Round
    let isDone = true;
    if(isDone){
        resolve('Got Selected for the JOB');
    }
    else{
        reject('Failed in HR Round');
    }
});

// Calling dependent promises
doTechnicalRound.then((message) => {
    let promiseMsg = `${message} -> `;
    doManagerRound.then((message) => {
        promiseMsg += `${message} -> `;
        doHRRound.then((message) => {
            promiseMsg += `${message}`;
            console.log(promiseMsg);
        }).catch((message) => {
            console.error(message);
        });
    }).catch((message) => {
        console.error(message);
    });
}).catch((message) => {
    console.error(message);
});