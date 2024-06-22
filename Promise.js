function firstFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('First function complete');
            resolve();
        }, 1000);
    });
}

function secondFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Second function complete');
            resolve();
        }, 1000);
    });
}

function thirdFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Third function complete');
            resolve();
        }, 1000);
    });
}

firstFunction()
    .then(secondFunction)
    .then(thirdFunction)
    .then(() => {
        console.log('All functions complete');
    });

// Output:
// First function complete
// Second function complete
// Third function complete
// All functions complete
