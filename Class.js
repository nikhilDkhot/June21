/*Classes in JavaScript are a blueprint for creating objects, introduced in ES6. 
-They encapsulate data and behavior by defining properties and methods, enabling object-oriented 
programming. 
-Classes simplify the creation of objects and inheritance, making code more organized and 
reusable.
Classes are similar to functions. 
Here, a class keyword is used instead of a function keyword. 
##Unlike functions classes in JavaScript are not hoisted.## 
The constructor method is used to initialize. 
The class name is user-defined.
*/
class classname {
    constructor(parameter) {
      this.classname = parameter;
    }
  }

class Player {
    constructor(name,age,role){
        this.name = name;
        this.age = age;
        this.role = role;
    }
}  

let abc = new Player("virat","36","batsman")
console.log(abc);
console.log(abc.name+` ${abc.age}  ${abc.role} `);
let abc1 = new Player("rohit","38","batsman")
console.log(abc1.name+` ${abc1.age}  ${abc1.role} `);

/*Classes in JavaScript provide blueprints for creating objects with similar properties and methods. 
Objects are instances of classes. 
Classes encapsulate data and behavior, promoting code reusability and organization. 
Objects created from classes can have unique data but share the same methods defined in the
class blueprint.
*/

