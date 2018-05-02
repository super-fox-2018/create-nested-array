function createNestedArray(jumlahRow,jumlahCol) {
var array = []
for (var i = 0; i < jumlahRow; i++) {
  var nestedArray = []
  for (var j = 0; j < jumlahCol; j++) {
    var random =String.fromCharCode(Math.floor(Math.random()*26)+95)
    nestedArray.push(random)
  }
  array.push(nestedArray)
}
console.log(array);
}
createNestedArray(5,3)
