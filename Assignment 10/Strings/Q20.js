
function frequent(str) {
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

//Checking the occurence of all characters
for (let i = 0; i < str.length; i++) {
    if (arr[str[i].charCodeAt(0)]) {
       console.log (`${str[i]}:${arr[str[i].charCodeAt(0)]}`);
       //After displaying occurence value one time the value will be 0 to avoid again display with repeating character 
       arr[str[i].charCodeAt(0)]=0;
    }   
}

}
// Here we have made a string and pass it to function
let str ="arshan";      
 (frequent(str));



























// const counter = s => [...s].reduce((a, c) => (a[c] = a[c] + 1 || 1) && a, {})

// console.log(
//   counter("hello") // {h: 1, e: 1, l: 2, o: 1}
// )  