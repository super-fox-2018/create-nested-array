function createnestedArr(jumlahRow, jumlahCol){
    var result=[]
    var arrKecil=[]
        for (var i=0; i<arr.length; i++){
          arrKecil.push(arr[i])
          if(arrKecil.length===jumlahCol){
            result.push(arrKecil)
            arrKecil=[]
          }
        }
        console.log(result)
    }
    
    var arr="pswraiqxcrqwmoy"
    createnestedArr(5,3)
    /*
    [["p", "s", "w"],
    ["r", "a", "i"]
    ["q", "x", "c"]
    ["r", "q", "w"]
    ["m", "o", "y"]]
    */
    
    var arr="brhucvii"
    createnestedArr(4,2)
    /*
    [["b", "r"],
    ["h", "u"]
    ["c", "v"]
    ["i", "i"]]
    */
    