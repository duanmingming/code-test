var readline = require("readline");
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
var arr = [],
	result;
rl.on("line", function(line){
	arr.push(line.trim().split(" ").map( item => parseInt(item)));
	if(arr.length == 4){
		result = printMatrix(arr);
		result.map(item => console.log(item))
	}
})

function printMatrix(matrix){
	if(matrix == null || matrix.length == 0){
		return;
	}

	let r = matrix.length,
		c = matrix[0].length,
		result = [],
		start = 0;

	while(r>2*start && c>2*start){
		var endx = c - start,
			endy = r - start;

		for(var i =start; i<endx; i++){
			result.push(matrix[start][i])
		}
		if(start < endy-1){
			for(var j=start + 1; j < endy; j++){
				result.push(matrix[j][endx-1]);
			}
		}
		if(start<(endx-1)&&start<(endy-1)){
                for (var  m = endx-2; m >= start; m--) {
                    result.push(matrix[endy-1][m])
                }
            }
            if(start<(endx-1)&&start<endy){
                for (var n = endy - 2; n >= start+1; n--) {
                    result.push(matrix[n][start])
                }
            }
            start++
	}
	return result;
}

