//they are functions without a name and are not bound by an identifier
//do not return any value and can be declared without the function keyword.
//Arrow functions do not have the prototype property like this, arguments, or super.
//Arrow functions cannot be used with the new keyword.
//Arrow functions cannot be used as constructors.

let function_name = argument1 => expression

let function_name1 = (argument1, argument2 , ) => expression

// Arrow function for multiplying two numbers
value = (a, b) => a * b;
console.log(value(3, 5));

// Arrow function with no parameters
const string = () => "India";
console.log(string);  //o/p [Function: string]

// Initializing an array of strings
let array = ["sam", "sarah", "john"];

// Map function in that we have arrow function
let len = array.map((string) => string+" welcome");

console.log(len); // [ 'sam welcome', 'sarah welcome', 'john welcome' ]

//this..
function NormalFunction(){
    this.value = 33

    setTimeout(function(){
        console.log("normal function: ",this.value);
    },2000);

    setTimeout(()=>{
        console.log("arrow function: ",this.value);
    },2000);
}

const intance = NormalFunction();

