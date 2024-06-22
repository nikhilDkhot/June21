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

obj.regularFunction(); // undefined (or error in strict mode)
obj.arrowFunction();   // 42
