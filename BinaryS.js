function binarySearch(arr,target){
    let left = 0;
    let right= arr.length - 1;

    while(left <= right){
        const mid = Math.floor((right+left)/2);
       
            if(arr[mid] === target ){
                return mid;
            }
            else if(arr[mid] < target){
                left = mid + 1 
            }
            else{
                right = mid - 1
            }
        
    }
    return -1;

}
const array = ["mkko", "mmm", "nnn", "lll", "kkk", "pppp"];
const targetValue = "nnn";
const index = binarySearch(array, targetValue);

if (index !== -1) {
    console.log(`Found ${targetValue} at index ${index}`);
} else {
    console.log(`${targetValue} not found in the array`);
}
