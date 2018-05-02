'use strict'

var createNestedArr = (Row,Col) => {
    var output = []
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for(var i = 0 ; i < Row ; i++){
        output[i] = []
        for(var j = 0; j < Col ; j++){
            output[i].push(alphabet[parseInt(Math.random()*alphabet.length-1)])
        }
    }
    return output
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))