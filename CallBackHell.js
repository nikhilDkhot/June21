function firstFunction(callback) {
    setTimeout(() => {
        console.log('First function complete');
        callback();
    }, 1000);
}

function secondFunction(callback) {
    setTimeout(() => {
        console.log('Second function complete');
        callback();
    }, 1000);
}

function thirdFunction(callback) {
    setTimeout(() => {
        console.log('Third function complete');
        callback();
    }, 1000);
}

firstFunction(() => {
    secondFunction(() => {
        thirdFunction(() => {
            console.log('All functions complete');
        });
    });
});

// Output:
// First function complete
// Second function complete
// Third function complete
// All functions complete
