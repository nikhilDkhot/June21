const names: string[] = [];
names.push("osho"); // no error
// names.push(3); 
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.

const names1: readonly string[] = ["rajanish"];
names.push("krishna"); // Error: Property 'push' does not exist on type 'readonly string[]'.
console.log(names1) //[ 'rajanish' ]

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error


// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'love is in giving'];
console.log(ourTuple)

/* let ourTuple1: [number, boolean, string];

// initialized incorrectly which throws an error
ourTuple1 = [false, 'Coding God was mistaken', 5]; */

//Type 'boolean' is not assignable to type 'number'.