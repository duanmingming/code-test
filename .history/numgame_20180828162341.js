var n = 4;
var arr = [1, 2, 5];
console.log(select(arr));



function select(arr){
    var miss = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] > miss+1)
            break;
        miss+=arr[i];
    }
    return miss+1;
}