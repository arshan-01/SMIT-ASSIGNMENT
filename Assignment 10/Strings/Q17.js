// Write a js program to count occurrences of a character in given string
let str = "Hi I'm Arshan Nawaz Arshan";
var result = 0;
for (let index = 0; index < str.length; index++) {
    if (str[index]==='Arshan') {
        //when str[index] will be equal then we will increement result by 1 
        result++;

    }
    
}
console.log(result)