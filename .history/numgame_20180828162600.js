var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr = [],
    result;
rl.on("line", function (line) {
    arr.push(line.trim().split(" ").map(item => parseInt(item)));
    if (arr.length == 2) {
        console.log(select(arr[1]));
    }
})



function select(arr){
    var miss = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] > miss+1)
            break;
        miss+=arr[i];
    }
    return miss+1;
}