let list = [1,2,1,5,78,8,3,4,5,67,78,8];

list = list.filter(function (currentValue, index, arr) { 
    return arr.indexOf(currentValue) === index; 
});

console.log(list);

