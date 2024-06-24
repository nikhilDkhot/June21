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

//Asynchronous opertion
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //let dataFetched = true; // Simulating successful data fetch
              let dataFetched = false;  
            if (dataFetched) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000); 
    });
}

fetchData()
    .then((message) => {
        console.log(message); // Logs "Data fetched successfully!" after 2 seconds
    })
    .catch((error) => {
        console.error(error); // If dataFetched was false, it would log "Failed to fetch data."
    });



