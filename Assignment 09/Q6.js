let array= [2,3,4,1,5,98,8];
let even=0;
let odd=0;
// odd number in array
function findEven(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index]%2===0) {
            even++;
            
        }   
    }
    return even;
}
// even number in array
function findOdd(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index]%2!==0) {
            odd++;
            
        }   
    }
    return odd;
}

console.log("Number of Even value in an array is ",findEven(array));
console.log("Number of Odd value in an array is ",findOdd(array));