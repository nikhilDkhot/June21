console.log("hi let do some hands on in typescript");


let fname: string = "osho";

//fname = 33; Type 'number' is not assignable to type 'string'.

let fname1 = "rajanish";

//fname1 = 33; Type 'number' is not assignable to type 'string'.

const json = JSON.parse("55");

console.log(typeof json);

let v: any = true;
//v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
console.log(typeof v);

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// You cannot assign unknown directly to another type without checking or asserting:
// userName = userInput; // This would result in a compilation error

// You need to assert or narrow the type first:
if (typeof userInput === 'string') {
    userName = userInput; // Now TypeScript knows userInput is a string
}