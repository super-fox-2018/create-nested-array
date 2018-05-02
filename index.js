function randomLetter(){
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var letter = letters[Math.floor(Math.random() * letters.length)];
  return letter;
}


function createNestedArr(jumblahRow, jumblahCol){
  var arr = [];

  for(var i = 0; i < jumblahRow; i++){
    arr.push([]);
  }

  for(var k = 0; k < jumblahRow; k++){
    for(var j = 0; j < jumblahCol; j++){
      arr[k].push(randomLetter());
    }
  }
  return arr;
}


console.log(createNestedArr(4,4));
console.log(createNestedArr(5,2));
console.log(createNestedArr(3,1));
