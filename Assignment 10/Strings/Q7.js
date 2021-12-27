function toggleChars(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z')
         //The String.fromCharCode() method converts Unicode values to characters
     //The charCodeAt(0) method converts character values to Unicode
         str[i] = String.fromCharCode(str[i].charCodeAt(0)+32);
        
        else if (str[i] >= 'a' && str[i] <= 'z')
            str[i] = String.fromCharCode(str[i].charCodeAt(0)-32);
        
        
    }
}


let str = "ARShaN NaWaZ".split("");
toggleChars(str);
console.log("String after toggle ");
console.log((str).join(""));