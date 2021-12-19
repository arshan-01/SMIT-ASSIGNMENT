let array= [1,2,-3,4,-5,67,-78,8];
let result = [];
let noofelement=0;
function findnegative(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index]<0) {
            result.push(array[index]);
            noofelement++;
        }
        
    }
    console.log(`Number of negative element : ${noofelement}`);
    return result;
}

console.log(findnegative(array));