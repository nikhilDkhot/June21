/* Some of the characteristics of sets are that the order of elements is not
guaranteed, you can't access elements by index, and you can't have 
duplicate elements. Sets are a great choice when you want to store data 
without duplicates. */
let test = new Set()
//console.log(test)       //Set(0) {}
let test1 = new Set(["maha",'veer','gautam','budha'])
//console.log(test1)       //Set(4) { 'maha', 'veer', 'gautam', 'budha' }
// -add method in a set
test1.add('ramdas')
//console.log(test1)

// -has method in a set
//console.log(test1.has('maha')) //true
//console.log(test1.has('das'))  //false

//-delete method in a set
test1.delete('ramdas')
//console.log(test1)

//-to clear all the elements in the set
//test1.clear()
//console.log(test1)

/*retrieve all elements in a set using the "entries" method, 
which returns an iterable.*/
for(let name of test1.entries()){
    //console.log(name)
}/* [ 'maha', 'maha' ]
[ 'veer', 'veer' ]
[ 'gautam', 'gautam' ]
[ 'budha', 'budha' ] */

/* values in a set by using the "values" method, which returns an iterable. */
for(let name of test1.values()){
    //console.log(name)
}
/*maha
veer
gautam
budha */

//size property in a set
//console.log(test1.size)

/* test1.forEach((name1)=>{
    console.log(name1)
}) */

//Get Unique Value from an Array.
let num = [11,22,33,33,66,66,88,99,99]
let num1 = new Set(num)
console.log(num)





