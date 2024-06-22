/*A closure is a feature in JavaScript where an inner function has access to the outer 
(enclosing) function’s variables. The closure has three scope chains
*/

function outerFunction() {
    let outerVar = "I am from outer function";

    function innerFunction() {
        //console.log("I am innerfunction")
        console.log(outerVar); // Accessing outer function's variable
    }

    innerFunction();
}

outerFunction(); // Output: I am from outer function

/* ---------------------------------------------------------*/
//Returning Functions from Functions
function outerFunction1() {
    let outerVar = "I am from outer1 function";
    //console.log("i am here")
    return function innerFunction() {
        console.log(outerVar); // Accessing outer function's variable
    };
}

const myInnerFunction = outerFunction1();
myInnerFunction(); // Output: I am from outer function
//outerFunction1();

/*Closures are useful for creating private variables or functions. */
function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        }
    };
}

const counter = createCounter();
//console.log(counter.count)      //not abble to access //O/p-undefined
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1

console.log('/*------------------------ */')

//Closures can also be used to maintain state across function calls.


function createAdder(x) {
    console.log(x +" x")
    return function(y) {
        console.log(y+" y")
        console.log("i visited")
        return x + y;
    };
}

const add5 = createAdder(5);
console.log(add5(2)); // Output: 7
console.log(add5(10)); // Output: 15
/*
const add10 = createAdder(10);
console.log(add10(5)); // Output: 15
console.log(add10(20)); // Output: 30 */
