/*call is a function that you use to change the value of this inside a 
function and execute it with the arguments provided.
*/
/*func.call(thisObj, args1, args2, ...){

}*/
let userDetail={
    name : "Nikhil khot",
    age:28,
    Designation:"full stack",
    printDetails:function(){
        console.log(this.name)
    } 

}
//userDetail.printDetails();

let userDetail2={
    name : "Vaibhav Kate",
    age:25,
    Designation:"testing",
    /*printDetails:function(){
        console.log(this.name)
    } */

}
//function borrowing
userDetail.printDetails.call(userDetail2);
//userDetail.printDetails()


