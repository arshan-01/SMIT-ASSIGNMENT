let array= [2,3,4,1,5,98,167,8];
let min = array[0];
let max = array[0];

// Maximum number in array
function findMax(array,max) {
    for (let index = 0; index < array.length; index++) {
        if (max<array[index]) {
            max = array[index];
            
        }   
    }
    return max;
}
// Minimum number in array
function findMin(array,min) {
    for (let index = 0; index < array.length; index++) {
        if (min>array[index]) {
            min = array[index];
            
        }   
    }
    return min;
}





console.log("Maximum value in an array is ",findMax(array, max));
console.log("Miniimum value in an array is ",findMin(array, min));