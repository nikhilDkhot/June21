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


 Player.prototype.showDetail=function(){
 
    console.log(`${this.name} is ${this.age} old and he is ${this.role}`)
} 

/* Player.prototype.showDetail=() => {
 
    console.log(`${this.name} is ${this.age} old and he is ${this.role}`)
} */
let abc1 = new Player("rohit","38","batsman")

abc1.showDetail();

/*Classes in JavaScript provide blueprints for creating objects with similar properties and methods. 
Objects are instances of classes. 
Classes encapsulate data and behavior, promoting code reusability and organization. 
Objects created from classes can have unique data but share the same methods defined in the
class blueprint.
*/

