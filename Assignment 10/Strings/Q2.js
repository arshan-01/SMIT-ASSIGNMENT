
// Write a js program to copy one string to another string

let s1 = ["My name is Arshan"];
let s2 = [];

copyFun(s1, s2);

function copyFun(s1, s2)
{    let index;
	for ( index = 0; index < s1.length; index++)
		s2[index] = s1[index];
        
}
//Here I have used join for convert any to string becasuse s2[s2] output from function  will be an array
console.log(s2.join());



// would work or
//Let S2 = S1.slice()
// let S2 = JSON.parse(JSON.stringify(S1));
// Or using the spread operator
// let S2=[…S1]
// This would have the best performance but that doesn’t really make a difference in your case.