const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(error){
            resolve({username:"nikhil",passward:"123"})
        }
        else{
            reject('error:something went wrong')
        }
    },2000)
})

promise
.then((user)=>{
    console.log(user);
    return user.username
})
.then((a)=>{
    console.log(a)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("i am going to excute everytime")
})