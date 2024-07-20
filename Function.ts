// the `: number` here specifies that this function returns a number
function getDate(): number {
    return new Date().getDate();
  }

  console.log(getDate());

  /*****************/
  function printHello(): void {
    console.log('Hello!');
  }

  printHello();

  /********************/
  function multiply(a: number, b: number) {
    return a * b;
  }

  console.log(multiply(55,10));

  /************************/
  // the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }

  console.log(add(11,22));
  console.log(add(11,22,22));

/**************************/
function pow(value: number, exponent: number = 2) {
    return value ** exponent;
  }  
  
  console.log(pow(15));
  
/*************************/
//Named Parameters
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}

console.log(550/5)

/***********************/
//Rest Parameters
function add1(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

let arr = [33,33]

console.log(add1(1,1,...arr))

//Type Alias
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

console.log(negateFunction(12));

  