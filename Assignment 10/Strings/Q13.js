function reverse(str) {
    // split convert string to an array,reverse() reverse the array values,join convert array to string
    return str.split("").reverse().join("");
}

//take input
const string = "Arshan";

console.log(reverse(string));