// Write a js program to count total number of words in a string

var str = "I live in pakistan";
var word=1;
for (let i = 0; i < str.length; i++) {
    if (str[i] == " " || str[i] == "\n"||
    str[i] == "\t") {
        word++;
    }
    
}
console.log(word);
