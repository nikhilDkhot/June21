//ArrayMethod
//JavaScript Array delete Operator
let emp = {
    firstName : "nikhil",
    lastName : "khot",
    age : 25
}

//console.log(delete emp.age);
//console.log(emp)


// Declare three arrays
let arr1 = [11, 12, 13];
let arr2 = ['k', 'n', 'm',1,2,88,99];
let arr3 = [null, false, true];

let arr = arr1.concat(arr2,arr3)

//console.log(arr)
const arr4 = [['1', '2'], ['3', '4', '5',['6'], '7']];

let arrflat = arr4.flat(Infinity) 
//console.log(arrflat)

//Array.push(item1, item2 …)

//Array.unshift(item1, item2 …)

/*JavaScript Array.splice() Method
The splice() method is used to Insert and Remove elements in between the Array
Array.splice (start, deleteCount, item 1, item 2….) 
*/

//arr3.splice(0,3,"mm","ll")
//console.log(arr3)

/*The slice() method returns a new array containing a portion of the original array, based on the start and 
end index provided as arguments */

let case1 = arr2.slice(0,2) 
console.log(case1)

let case2 = arr2.slice(-2) 
console.log(case2)








