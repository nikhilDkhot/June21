const obj = {
    value: 42,
    regularFunction: function() {
        setTimeout(function() {
            console.log(this.value); // `this` refers to the global object
        }, 1000);
    },
    arrowFunction: function() {
        setTimeout(() => {
            console.log(this.value); // `this` refers to `obj`
        }, 1000);
    }
};

//obj.regularFunction(); // undefined (or error in strict mode)
//obj.arrowFunction();   // 42

//Arrow functions do not have their own arguments object. They inherit 
//arguments from the enclosing scope.
function regularFunction() {
    console.log(arguments); // [1, 2, 3]
}

const arrowFunction = () => {
    console.log(arguments); // ReferenceError: arguments is not defined
};

regularFunction(1, 2, 3);
//arrowFunction(1, 2, 3); // Error

//To use arguments in an arrow function, you can use rest parameters
const arrowFunction1 = (...args) => {
    console.log(args); // [1, 2, 3]
};
arrowFunction1(1, 2, 3);


//Arrow functions cannot be used as constructors and will throw an error 
//if used with the new keyword.
const ArrowConst = () => {
    this.value = 42;
};
//new ArrowConst(); // TypeError: ArrowConstructor is not a constructor







