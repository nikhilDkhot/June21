function selectionSort(arr){
    let n = arr.length
    
    for(let i=0; i<n-1 ; i++){
        let minValue = i;

        for(let j=i+1 ; j< n ;j++){

            if(arr[j] < arr[minValue]){
                minValue = j;
            }
        }

        if(minValue !== i){
            let temp = arr[i];
            arr[i] = arr[minValue];
            arr[minValue] = temp;
        }
    }

    return arr;
}

let array = [64, 25, 12, 22, 11];
console.log("Original Array: ", array);
//console.log("Sorted Array: ", selectionSort(array.slice()));

console.log("Sorted Array: " , selectionSort(array));