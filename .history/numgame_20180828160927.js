var n = 4;
var arr = [1, 2, 5];
console.log(select(n, arr));



function select(n, arr){
    if(arr.indexOf(n) !== -1)
        return true;
    else if(arr[0] > n)
        return false;
    else{
            for(var i=0; i<arr.length; i++){
                if(arr[i] > n)
                    break;
            }

            return(select( (n-arr[i-1]), arr.slice(0, i-1)) || select( n, arr.slice(0, i-1)) )
        }
}