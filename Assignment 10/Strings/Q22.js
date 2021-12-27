function removelastOcc(s, ch) {
    for (let index = s.length; index > 0; index--) {
        if (s[index] === ch){
            s=s.substr(0, index)+s.substr(index+1);
            break;
        }
        
    }
    return s;
}

var s = "hello world";
	var ch = "l";

	console.log(removelastOcc(s, ch));