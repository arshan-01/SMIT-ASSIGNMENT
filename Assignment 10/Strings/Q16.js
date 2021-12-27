// Write a js program to search all occurrences of a character in given string
let str = "Hi I'm Arshan Nawaz Arshan";
var result = [];
for (let index = 0; index < str.length; index++) {
    if (str[index]=='A') {
        //when str[index] will be equal then we will push its index to result array 
        result.push(index);
    }
    
}
console.log(result)


