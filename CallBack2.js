let number = [1,2,4,6,8];

function mainFunction(callback){
    console.log("performing operation..");

    number.forEach(callback)
}

function callbackFunction(number){
    console.log("hi")
    console.log("result: "+number)
}

mainFunction(callbackFunction);