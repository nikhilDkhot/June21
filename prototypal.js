let person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};

//console.log(person.name)
person.greet(); // Output: Hello, John

let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    
};

rabbit.__proto__ = animal;

console.log(rabbit.eats); // Output: true
console.log(rabbit.jumps); // Output: true
console.log(animal.jumps) //o/p : undefined

/*When trying to access a property or method, JavaScript first looks for it in the object itself. 
If it’s not found, it looks in the prototype of the object, then in the prototype’s prototype, and so on. 
This is known as the prototype chain.
 */
let animal1 = {
    eats: true
};

let rabbit2 = {
    jumps: true,
    __proto__: animal1
};

let longEar = {
    earLength: 10,
    __proto__: rabbit2
};

console.log(longEar.eats);      // Output: true
console.log(longEar.jumps);     // Output: true
console.log(longEar.earLength); // Output: 10

