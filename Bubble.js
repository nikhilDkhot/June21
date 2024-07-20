function bubbleSort(arr){
    const n = arr.length;
    let swapped;
    do{
        swapped=false;
        for(let i=0; i<n-1 ; i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1]=temp;
                swapped = true
            }
        }

    }while(swapped)

    return arr
}
let array = [64, 25, 12, 22, 11];
console.log("Original Array: ", array);
//console.log("Sorted Array: ", bubbleSort(array.slice())); // Output: [11, 12, 22, 25, 64]
console.log("Sorted Array: " , bubbleSort(array));