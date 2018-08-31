var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr = [],
    result;
rl.on("line", function (line) {
    arr.push(line.trim().split(" ").map(item => parseInt(item)));
    if (arr.length == 1) {
        console.log(fib(arr[0][0]));
    }
})

function fib(n){
    console.log(n);
    var result = [0, 1];
    var i = 2;
    while(result[result.length -1] < n){
        result.push(arr[i-1] + arr[i-2]);
        i++;
    }
    var steps = (result[result.length - 1] - n) < (n - result[result.length - 2]) ? 
                    (result[result.length - 1] - n) : 
                    (n - result[result.length - 2]);
    return steps;
}