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

// const p = new Promise( (resolve, reject) => {
// 	setTimeout( () => console.log('111'), 10000);
// 	//resolve(100)
// });

// p.then( data => console.log(data))


const getJSON = function(url){
	const promise = new Promise(function(resolve, reject){
		const handler = function(){
			if(this.readyState !== 4){
				return;
			}
			if(this.status === 200){
				resolve(this.response);
			}else{
				reject(new Error(this.statusText));
			}
		};

		const client = new XMLHttpRequest();
		client.open("GET", url);
		client.onreadystatechange = handler;
		client.responseType = "json";
		client.setRequestHeader("Accept", "application/json");
		client.send();

	});

	return promise;
};

// getJSON("http://posts.json").then(function(json){
// 	console.log(json);
// }, function(error){
// 	console.error(error);
// })

// const timeout = ms => new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve();
// 	}, ms);
// 	console.log('123')
// });

// const ajax1 = () => timeout(2000).then(() => {
// 	console.log('1');
// 	return 1;
// });

// ajax1()

// value => P.resolve(2).then(() => {}, () => {})


// Promise.reject(1)
// 	.then( (res) => {console.log(res); return 2;} )
// 	.catch( (err) => { return 3 })
// 	.then ( (res) => console.log(res) )

//值穿透
// Promise.resolve(1)
// 	.then(2)
// 	.then(Promise.resolve(3))
// 	.then(console.log)

// const promise = new Promise((resolve, reject) => {
// setTimeout(() => {
// console.log('开始');
// resolve('success');
// }, 5000);
// });
 
// const start = Date.now();
// promise.then((res) => {
// console.log(res, Date.now() - start);
// });
 
// promise.then((res) => {
// console.log(res, Date.now() - start);
// });


var x=1;
if(function f(){}){
	x += typeof f;
}


function test(){}




