function createNestedArr(jumlahRow, jumlahCol) {
  var abjad = 'abcdefghijklmnopqrstuvwxyz';

  var isi = Math.floor(Math.random() * abjad.length);

  var dalam = [];
  var luar = [];

  for (let k = 0; k < jumlahRow; k++) {
    dalam = [];
    for (let l = 0; l < jumlahCol; l++) {
      dalam.push(abjad[Math.floor(Math.random() * abjad.length)]);
    }

    luar.push(dalam);
  }

  return luar;
}
console.log(createNestedArr(5, 3)); //
// [ ['p', 's', 'w'],
//  ['r', 'a', 'i'],
// ['q','x','c'],
// ['r', 'q', 'w'],
// ['m', 'o', 'y']]
