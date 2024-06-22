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

async function runFunctions() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
    console.log('All functions complete');
}

runFunctions();

// Output:
// First function complete
// Second function complete
// Third function complete
// All functions complete
