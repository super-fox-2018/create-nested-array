function createNestedArr(row, col) {
  var output = [];
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < row; i++) {
    var column = [];
    for (var j = 0; j < col; j++) {
      let randomize = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      // console.log(`random: ${randomize}`)
      column.push(randomize);
    }

    output.push(column);
  }
  console.log(output);
}

createNestedArr(5, 3);
createNestedArr(4, 2);
