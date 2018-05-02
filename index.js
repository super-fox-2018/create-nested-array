function createNestedArr(row,col) {
	var finalArray=[];
	for(var i=0;i<row;i++) {
		var subArray=[]
		for(var j=0;j<col;j++) {
			var tempRow=String.fromCharCode(Math.floor(Math.random()*(122-97+1))+97)
			subArray.push(tempRow)
		}
	finalArray.push(subArray)			
	}
return finalArray 	
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))