function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);
  printStatusCode('hhhhhh');

  /************************/
 /*  function printStatusCode1(code: string | number) {
    console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
    Property 'toUpperCase' does not exist on type 'number'
  } */