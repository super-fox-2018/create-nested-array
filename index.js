function generateRandomAlp(num1, num2){

    function randomAlp(){
        
        var alp = 'abcdefghijklmnopqrstuvwxyz';
        var alpRandom = Math.round(Math.random() * alp.length-1);
        return alp[alpRandom];
    }
    
    var row = num1;
    var col = num2;
    var arr = [];
    
    for(let a=0; a<=row; a++){
        arr.push([]) ;
        for(let b = 0; b<=col-1; b++){
          arr[a].push(randomAlp());
        }
    }
    
    return(arr);

}

console.log(generateRandomAlp(2,2))
console.log(generateRandomAlp(5,3))