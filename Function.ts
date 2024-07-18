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
  
  
  