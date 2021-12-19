let array= [1,2,-3,4,-5,67,-78,8];
let result = [];

function copy(array) {
    for (let index = 0; index < array.length; index++) {
            // we can use result.push(array[index]);
            result[index] = array[index];

        
    }
   
    return result;
}

console.log(copy(array));