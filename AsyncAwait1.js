const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(error){
            resolve({username:"vaibhav",passward:"123"})
        }
        else{
            reject('error:something went wrong')
        }
    },2000)
});

async function consumepromise(){
    try {
        const response = await promise;
        console.log(response.username);
    } catch (error) {
        console.log(error)
    }
}