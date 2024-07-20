/*Immediately Invoked Function Expressions (IIFE) in JavaScript
*/
//Syntax
(function (){ 
    // Function Logic Here. 
    })();

(function(){
    var localVar = "I am trying to understand iife"
    console.log(localVar);
})();

var sum=(function(){
    var x = 10;
    var y = 20;
    return x + y;

})();
console.log(sum)

/*IIFEs are commonly used to create private scope in JavaScript, allowing variables and functions
to be encapsulated and inaccessible from outside the function */
var counter = (function() {
	var count = 0;

	return count //{
		// increment: function() {
		// 	count++;
		// },
		// decrement: function() {
		// 	count--;
		// },
		// getCount: function() {
		// 	return count;
		// },
		// count
	//};
})();
console.log(typeof counter)
// // Increment the counter
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(counter.getCount()); // Output: 3

// Trying to access the private count variable directly
// console.log(counter.count); // Output: undefined (cannot access private variable)

/*
Use Cases Of IIFE
-Avoid polluting the global namespace.
-To create closures in JavaScript.
-IIFE is used to create private and public variables and methods.
-It is used to execute the async and await function.
-It is used to work with require function.
*/
