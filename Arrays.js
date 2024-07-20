/*1.hold various data type
    
 */
//Creating an Array using Array Literal
let array = ["nikhil",369,25,"developer"]
//console.log(array)
//console.log(array[3])


//Creating an Array using Array Constructor (JavaScript new Keyword)
let array1 = new Array();
//console.log(array1)

let array2 = new Array("vaibhav","rishi","nikhil");
//console.log(array2)

let array3 = new Array(3);
array3[0]="A"
array3[1]="B"
array3[2]="C"
//console.log(array3)

/*Note: Both the above methods do exactly the same. Use the array literal method for efficiency, readability, 
and speed.*/

// Adding Elements to the Array
array2.push("tejas"); //add at last
array2.unshift("ravi"); //add at start
console.log(array2)
//array2.pop()
//console.log("after removal of last element "+ array2)
//array2.shift()
//console.log("after removal of first element "+ array2)

//Array Length
//console.log(array2.length)

//Increase and Decrease the Array Length
/*array2.length = 7
console.log("after increasing length "+ array2)
console.log(array2) //[ 'ravi', 'vaibhav', 'rishi', 'nikhil', 'tejas', <2 empty items> ]
array2.length = 2
console.log("after decreasing length "+ array2)
console.log(array2)*/

/* array2.forEach(function adddev(element){
    console.log(element+" best human beings")
}) */

/* array2.forEach(function digit(element){
    console.log(element.length)
}) */

/* let arrayconcate = array2.concat(array3)

console.log(arrayconcate) */

console.log(array2.toString())

console.log(typeof array2);

let a = 45

console.log(Array.isArray(array2))
console.log(Array.isArray(a))

console.log(array2 instanceof Array)
console.log(a instanceof Array)

//JavaScript Array join() Method
/*creates and returns a new string by concatenating all elements of an array.
It uses a specified separator between each element in the resulting string.*/

//console.log(array2.join('/**--'))



















