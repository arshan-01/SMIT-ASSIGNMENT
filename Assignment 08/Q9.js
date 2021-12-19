var lastday = function(y,m){
    let dt = new Date(y, m +1, 0);
    return  dt.getDate();
    }
    console.log(lastday(2014,0));
    console.log(lastday(2014,1));
    console.log(lastday(2014,11));