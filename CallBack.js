/*A callback is a function passed into another function as an argument, which is then invoked 
inside the outer function to complete some kind of routine or action.
 */
function greet(name, callback) {
    console.log('Hello, ' + name);
    callback();
}
function sayGoodbye() {
    console.log('Goodbye!');
}
greet('Alice', sayGoodbye);
// Output:
// Hello, Alice
// Goodbye!

//Synchronous Callbacks
function calculate(num1, num2, callback) {
    let result = callback(num1, num2);
    console.log('Result:', result);
}

function add(a, b) {
    return a + b;
}

calculate(5, 3, add); // Output: Result: 8

// Asynchronous Callbacks
console.log('Start');

function fetchData(callback) {
    setTimeout(() => {
        console.log('Data fetched');
        callback();
    }, 2000);
}

function processData() {
    console.log('Processing data');
}

fetchData(processData);

console.log('End');

// Output:
// Start
// End
// Data fetched
// Processing data

//Nested Callbacks (Callback Hell)




