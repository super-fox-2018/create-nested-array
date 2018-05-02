function createNestedArr(numOfRows, numOfCols) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const result = [];
  for (let i = 0; i < numOfRows; i += 1) {
    result.push([]);
    for (let j = 0; j < numOfCols; j += 1) {
      let letter = letters[Math.floor(Math.random() * letters.length)];
      result[i].push(letter);
    }
  }
  return result;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));