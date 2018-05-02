'use strict'

function createNestedArr(jumlahRow, jumlahCol) {

    var baris = [];
    var str = 'abcdefghijklmnopqrstuvwxyz';

    for(let i = 0; i < jumlahRow; i++) {
        baris.push([]);
        for(let j = 0; j < jumlahCol; j++) {
            baris[i].push(str.charAt(Math.floor(Math.random() * str.length)));
        }
    }
    console.log(baris);
}

createNestedArr(5, 3);
/*[ [ 'm', 'b', 'f' ],
  [ 'c', 't', 'i' ],
  [ 'b', 'g', 'w' ],
  [ 'f', 'n', 'i' ],
  [ 't', 'j', 's' ] ]
*/

createNestedArr(4,2);
/*[ [ 's', 'g' ], 
[ 'u', 'p' ], 
[ 'z', 'q' ], 
[ 'q', 'u' ] ]
*/