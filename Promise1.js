let myPromise = new Promise((resolve, reject) => {

   // let success = true;
    let success = false;


    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed!");
    }
});

myPromise
    .then((message) => {
        console.log(message); // This will run if the promise is resolved
    })
    .catch((error) => {
        console.error(error); // This will run if the promise is rejected
    });


