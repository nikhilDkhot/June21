let x: unknown = 'hello';
console.log((x as string).length);

let x1: unknown = 4;
console.log((x1 as string).length); // prints undefined since numbers don't have a length

//console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be 
//a mistake because neither type sufficiently overlaps with the other. If this was intentional,
//convert the expression to 'unknown' first.

let x2: unknown = 'zeroness is aim';
console.log((<string>x2).length);

let x3 = 'hello0000';
//console.log(((x3 as unknown) as number).length); //x is not actually a number so this will return undefined
//console.log(((x3 as unknown) as string).length);


