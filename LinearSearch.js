function linearSearch(arr,target){
   let n = arr.length;
    
    for(let i=0;i<n;i++){
        if(arr[i]==target){
            return i+1;
        }
    }
}

let a = [88,22,"mm",99,"lol",212,74,"l"]

let b = linearSearch(a,"lol")

console.log(b)