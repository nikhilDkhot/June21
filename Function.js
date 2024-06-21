function myFunction(a1, a2) {
    return a1 * a2;
}
const value = myFunction(5, 2); // Calling the function
console.log(value);

//Syntax: The basic syntax to create a function in JavaScript is shown below.

/*function functionName(Parameter1, Parameter2, ...)
{
    // Function body
}*/

/*>Accessing the function with just the function name without () will 
return the function object instead of the function result.*/


/*------------------------------- */
//Function Expression:
//It is similar to a function declaration without the function name.
let demo= function(paramX, paramY) {
    // Set of statements
}

const cube = function (number) {
    return number * number * number;
};
const result = cube(3); // result gets the value 27
console.log(result);
/*------------------------*/

//Arrow Function:

//Syntax
let function_name = (argument1, argument2 ) => expression

//use
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
    return s.length;
});

console.log("Normal way ", a2); // [8, 6, 7, 9]

//arrow
const a3 = a.map((s) => s.length);

console.log("Using Arrow Function ", a3); // [8, 6, 7, 9]





