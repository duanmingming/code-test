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
        var result = [0,1];
        console.log(data[10])
    }
})

function fib(n, data){
    if(data[n])
        return data[n];
    else
        return fib(n-1) + fib(n-2);
}