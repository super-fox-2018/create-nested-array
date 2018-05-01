function nestedArray(row,col){
let board = []
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
	for(var i=0;i<row;i++){
		board.push([])
		for(var j=0;j<col;j++){
			board[i].push(alphabet[Math.floor(Math.random()*26)])
		}
	}
	console.log(board)

}

nestedArray(5,3)
nestedArray(4,2)