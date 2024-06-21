//Declaring a JavaScript Variable
var x;
let y;

//assign 
x="nikhil"
y="sohan"

//One Statement, Many Variables
let a=54,b=89,c="new";

//undefined
 let n;
 console.log(n)

 //You cannot re-declare a variable declared with let or const.
let m =5
//let m;  error

let num = 5 + 2 + 3;

let text ="mm"+" "+"jj"

let nutext ="5"+ 2 + 5;
//If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

let nutext1 = 2 + 3 + "5";

console.log(nutext1)
console.log(num)

/* What is Good?
let and const have block scope.

let and const can not be redeclared.

let and const must be declared before use.

let and const does not bind to this.

let and const are not hoisted. */


let num2 = 5;
// Here x is 5

{
let num2 = 6;
// Here x is 6
}

// Here x is 5

/* Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope */
/*---------------------------------------------------*/
//Must be Assigned

const PI = 3.141;

const num5 = 40;
// Here x is 40

{
const num5 = 20;
// Here x is 20
}

// Here x is 40

//SyntaxError: Missing initializer in const declaration
//carName = "Volvo";
//const carName;

//ReferenceError: Cannot access 'carName' before initialization
//carName = "Volvo";
//let carName;

carName = "volvo"
var carName;
console.log(carName)

