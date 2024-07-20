var x = 'hello';
console.log(x.length);
var x1 = 4;
console.log(x1.length); // prints undefined since numbers don't have a length
//console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be 
//a mistake because neither type sufficiently overlaps with the other. If this was intentional,
//convert the expression to 'unknown' first.
var x2 = 'zeroness is aim';
console.log(x2.length);
var x3 = 'hello0000';
console.log(x3.length); // x is not actually a number so this will return undefined
