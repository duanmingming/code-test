// const promise = new Promise(function(resolve, reject){
// 	if( 异步操作成功 ){
// 		resolve(value);
// 	}else{
// 		reject(error);
// 	}
// });

// function timeout(ms){
// 	return new Promise((resolve, reject) => {
// 		setTimeout(resolve, ms, 'done');
// 	});
// }

// timeout(100).then((value) => {
// 	console.log(value);
// });

const p = new Promise( (resolve, reject) => {
	setTimeout( () => console.log('111'), 10000);
	resolve(100)
});

p.then( data => console.log(data))
