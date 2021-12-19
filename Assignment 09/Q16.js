let array= [1,2,3,4,5,67,78,8];
// console.log(array.reverse());
let start=0;
let n = array.length;                 //array.length tells us about total element in an array
let end=n-1;                          // end point will be array.length-1, because array index start from zero
let temp;                                // temporary variable to store 
let result=[];                         // a variable to store the result as array

// reverse code
for(;start<end;start++,end--) {
  temp=array[start];
  array[start]=array[end];
  array[end]=temp;
}
// display array after reverse code
function display(array,n) {
    for (let index = 0; index < n; index++) {
       result.push(array[index]);    
    }
    return result;
}
console.log(display(array,n));