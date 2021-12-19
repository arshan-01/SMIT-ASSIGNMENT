let array = [1,2,3,4,5,6,7];
let k= 3;                      // right rotation k should be positive

let start=0;
let n = array.length;                 //array.length tells us about total element in an array
let end=n-1;                          // end point will be array.length-1, because array index start from zero
                               // temporary variable to store 
let result =[];
// reverse code
function reverse(array,start,end){
    while(start<end) {
        let temp; 
        temp=array[start];
        array[start]=array[end];
        array[end]=temp;
        start++;
        end--;
      }
}
function rotate(array, n, end,k) {
      k=k%n;
    reverse(array,n-k,end);       //n-k means from number 5 index 4
    reverse(array,0,n-k-1);        // n-k-1 means till number 4 index 3
    reverse(array,0,end);
}
function display(array,n) {
    for (let index = 0; index < n; index++) {
       result.push(array[index]);    
    }
    return result;
}
rotate(array, n, end,k);
console.log(display(array,n));