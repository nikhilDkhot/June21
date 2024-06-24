function firstTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("First task completed!");
        }, 1000);
    });
}

function secondTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Second task completed!");
        }, 1000);
    });
}

firstTask()
    .then((message) => {
        console.log(message);
        return secondTask();
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
