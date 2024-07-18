const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };

  const car1 = {
    type: "Toyota",
  };
  car1.type = "Ford"; // no error
 // car1.type = 2; // Error: Type 'number' is not assignable to type 'string'


/*  const car2: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
car2.mileage = 2000; */

const car3: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
car3.mileage = 2000;

//Index Signatures
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'

// Define an interface with an index signature
interface StringArray {
  [index: number]: string; // index signature: key is a number, value is a string
}

// Example usage
let myArray: StringArray = {
  1: 'hello',
  2: 'hii'
}
let firstItem: string = myArray[2]; // Okay, returns "Hello"

console.log(firstItem)
