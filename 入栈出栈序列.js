function IsPopOrder(pushV, popV){
	if(pushV.length == 0)
		return false;
	let stack = [];
	for(let i = 0, j = 0; i < pushV.length; i++){
		stack.push(pushV[i]);
		while(j < popV.length  && stack[stack.length-1] == popV[j]){
			stack.pop();
			j++;
		}
	}

	return (stack.length == 0 ? true : false)

}

var readline = require("readline");
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
var arr = [],
	result;
rl.on("line", function(line){
	arr.push(line.trim().split(" ").map( item => parseInt(item)));
	if(arr.length == 2){
		console.log(IsPopOrder(arr[0], arr[1]));
	}
})