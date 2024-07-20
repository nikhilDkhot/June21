/*call is a function that you use to change the value of this inside a 
function and execute it with the arguments provided.
*/
/*func.call(thisObj, args1, args2, ...){

}*/
let userDetail={
    name : "Nikhil khot",
    age:28,
    Designation:"full stack",
   
}

let printDetails = function(){
    console.log(this.name)
} 
printDetails.call(userDetail);

let userDetail2={
    name : "Vaibhav Kate",
    age:25,
    Designation:"testing",
    /*printDetails:function(){
        console.log(this.name)
    } */

}
//function borrowing
printDetails.call(userDetail2);



