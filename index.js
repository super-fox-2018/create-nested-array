'use strict'
function createNestedArr(jumlahRow, jumlahCol){
    let arrColumn = [];
    for (let i=0; i < jumlahRow; i++){
        let arrRow = [];
        for (let j=0; j < jumlahCol; j++){
            arrRow.push(randomGenerator());
        }
        arrColumn.push(arrRow);
    }
    return arrColumn;
}

function randomGenerator(){
    const rand = 'abcdefghijklmnopqrstuvwxyz';
    return rand.charAt(Math.floor(Math.random()*(rand.length/2))); 
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
console.log(createNestedArr(10,5));