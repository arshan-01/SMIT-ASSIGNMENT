var array = ["JavaScript","Search","Element","In","Array"];
var num = "Element";
            var loc = 1;
            function search(array,num)
            {
                for (let index = 0; index < array.length; index++) {
                    if (array[index]===num) {
                        loc = loc + 1;
                    }
                    
                }
                if(loc != 1)
                {
                    console.log('Exist');
                }else{
                    console.log('Not Exist');
                }
                
            }
            
search(array,num);
        