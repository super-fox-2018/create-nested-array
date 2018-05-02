function createNestedArr(row, col) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let array = [];
  for (var i = 0; i < row; i++) {
    array.push([]);
    for (var j = 0; j < col; j++) {
      array[i].push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }
  }
  return array;
}

console.log(createNestedArr(5, 3));
// console.log(createNestedArr(4,2));
