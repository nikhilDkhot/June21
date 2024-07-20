let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

/* // define our tuple
let ourTuple1: [number, boolean, string];

// initialized incorrectly which throws an error
ourTuple1 = [false, 'Coding God was mistaken', 5]; */

// define our tuple
let ourTuple2: [number, boolean, string];
// initialize correctly
ourTuple2 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple2.push('Something new and wrong');
console.log(ourTuple2);
// o/p [ 5, false, 'Coding God was here', 'Something new and wrong' ]

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');