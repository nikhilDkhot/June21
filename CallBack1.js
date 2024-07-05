/*passed as an argument to another function, which gets invoked after 
the main function completes its execution.*/ 

/*Callbacks are essential for managing the outcomes of asynchronous tasks
 without blocking the program’s execution.*/

/*Callbacks allow for non-blocking programming, which means that the program
does not stop and wait for an operation to complete before continuing to
execute*/ 

//Higher-order functions
/*A higher-order function is a function that takes one or more functions as
 arguments, or returns a function as a result.*/

//Real-Life Examples
/*Loading images on a website
*/
function mainFunction(callback) {
    console.log("Performing operation...");
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(function() {
        console.log("i was here")
      callback("Operation complete");
    }, 1000);
  }
  
  // Define the callback function
  function callbackFunction(result) {
    console.log("Result: " + result);
 }
  
  // Call the main function with the callback function
  mainFunction(callbackFunction);
  //
  
