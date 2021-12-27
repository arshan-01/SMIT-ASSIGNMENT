
function minfrequent(str) {
    // we give size 256 because ascii value of all characters includes and make a array and assign it.
    let arr = new Array(256);
   // characters and initialize the array as 0 because we will store at thier index its occurence value
for (let i = 0; i < arr.length; i++) {
      arr[i] = 0;
}
for (let i = 0; i < str.length; i++) {
    // charCodeAt() take last value of string and convert it to unicode like ascii code so it will 
    // if a is at index i then charCodeAt() will convert it to its asci code 97.
    // then it will be converted to arr[97].so we know that at all index value zero already,
    //so when we find occurence then we will incresae value by 1 at this index.
            arr[str[i].charCodeAt(0)] +=1;
}
let min =arr[str[0].charCodeAt(0)];
let ch;
//here we find min occurence to chech value all index,which will be smaller,will be min
for (let i = 0; i < str.length; i++) {
        if (min>arr[str[i].charCodeAt(0)]) {
            min=arr[str[i].charCodeAt(0)];
            // Here we pass str[i] to ch because we want character
            ch = str[i];  
        }
    }
    return ch;
}
// Here we have made a string and pass it to function
let str ="aaabccb";      
 console.log(minfrequent(str));