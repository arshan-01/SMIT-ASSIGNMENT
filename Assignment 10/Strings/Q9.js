var vowels = "aeiou";
var cons = "bcdfghjklmnpqrstvwxyz";
var string = "I'm very happy to complete it".toLocaleLowerCase();
vowel = 0;
consonants = 0;

for (let x = 0; x < string.length; x++) {
    //The includes() method returns true if a string contains a specified string, otherwise false
  if(vowels.includes(string[x])){
    vowel++;
  }
  else if(cons.includes(string[x])){
    consonants++;
  }
  
}
console.log(vowel);
  console.log(consonants);