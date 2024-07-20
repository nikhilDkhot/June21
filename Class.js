var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
person.name = "osho";
console.log(person.name);
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    return Person1;
}());
var person1 = new Person1("osho  ccc");
console.log(person1.getName()); // person.name isn't accessible from outside the class since it's private
/****************************/
var Person2 = /** @class */ (function () {
    // name is a private member variable
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    return Person2;
}());
var person2 = new Person2("rajanish");
console.log(person2.getName());
/************************/
var Person3 = /** @class */ (function () {
    function Person3(name) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }
    Person3.prototype.getName = function () {
        return this.name;
    };
    return Person3;
}());
var person3 = new Person3("sachidanand");
console.log(person3.getName());
