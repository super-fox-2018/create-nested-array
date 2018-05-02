function createNestedArr(jumlahRow,jumlahCol) {
  var array = [];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < jumlahRow; i++) {
    var tampung = [];
    for (var j = 0; j < jumlahCol; j++) {
      tampung.push(alphabet[Math.floor(Math.random()*(alphabet.length-1))]);
    }
    array.push(tampung);
  }
  return array;
}
console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
