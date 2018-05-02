function createNestedArr(jumlahRow , jumlahCol){
    var panjang = jumlahRow * jumlahCol

   

    var alpha='abcdefghijklmnopqrstuvwxyz'
    var hasil=[]
    for(let i=0;i<jumlahRow;i++){
        let tampung=[]
        for(let j=0;j<jumlahCol;j++){
            
            var acak =alpha.charAt(Math.round(Math.random() * alpha.length))
            tampung.push(acak)
        }
        hasil.push(tampung)
    }
   console.log(hasil)



}
createNestedArr(5,3)
createNestedArr(4,2)