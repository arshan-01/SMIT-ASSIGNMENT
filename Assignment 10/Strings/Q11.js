// Write a js program to find reverse of a string


function reverseString(str) {

    // convert string to an array
    const arrayValues = str.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');
    return reverseString;
}
console.log(reverseString("Learning JavaScript"));






//reverse a string without using any variables or native methods
// recursive method for fututre I will understand it

// function reverseString(str) {
//     return str === '' ? '' : reverseString(str.slice(1)) + str[0];
// }





