// Write a js program to find total number of alphabets, digits or special character in a string
let str = "program @ 03";


  function myString(str) {
    var ch=num=special=0;

      for (let index = 0; index < str.length; index++) {
        if ( (str[index] >= 'a' && str[index] <= 'z') ||(str[index] >= 'A' && str[index] <= 'Z') )
        {
            ch++;
            
        }
          else if (str[index] >= '0' && str[index] <= '9'){
              num++;
          }
          else{
              special++;
          }
      }
      console.log(`The number of alphabets in string( ${str}) is ${ch}`);
      console.log(`The number of digits in string( ${str}) is ${num}`);
      console.log(`The number of special in string( ${str}) is ${special}`);
  }

   
  myString(str);