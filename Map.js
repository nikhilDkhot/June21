/*A map is another data structure/container used to store key-value pairs
of data of any kind and length.
*/
let book1 = new Map()
//console.log(book1) //Map(0) {}

/* You can also create a map using a constructor initialized with an array of arrays. Each array
in the array is one key-value pair, and the key can be of any type */

let book = new Map([['hash','sidharth'],['amish','mahua'],['jordon','12rule'],['james','atomic']])
//console.log(book)
/* Map(4) {
  'hash' => 'sidharth',
  'amish' => 'mahua',
  'jordon' => '12rule',
  'james' => 'atomic'
} */

let author = {name:'jordon',age:'55'}

let book2 = new Set([[author,[{date:"3-6-1999",price:'350'}]]])

//console.log(book2)

let work = new Map()

work.set('farming','farmer')
work.set('driving','driver')
work.set('fishing','fisher')
work.set('coding','coder')


//Get Values from the Map Object
//console.log(work.get('farming'))  //farmer
//console.log(work.get('driving'))  //driver

//Search an Element with the has Method
//console.log(work.has('coding'))

//Delete an Element with the delete Method
//Delete works if the searched term matches a key in an element. 
work.delete('coding')
//console.log(work)

//clear all elements of a map, we'll use the clear method.
//work.clear()
//console.log(work)

//console.log(work.entries())
/* [Map Entries] {
  [ 'farming', 'farmer' ],
  [ 'driving', 'driver' ],
  [ 'fishing', 'fisher' ]
} */

/* for(let works of work.entries()){
    console.log(works)
} */

//keys method, you can get all the keys of a map, and it also runs a for or for-of loop
/* for(let works of work.keys()){
    console.log(works)
} */

/* for(let works of work.values()){
    console.log(works)
} */

//Enumerate Over a Map
work.forEach((key, value) =>{
  const message = `the work is ${key} and person who do that work is ${value}`;
    console.log(message)
})

//Use Size Property in Map












