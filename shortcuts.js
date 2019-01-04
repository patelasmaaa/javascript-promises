let promise = new Promise(function(resolve, reject){
	throw 'Lalalala';
	resolve('Ahoy!');

	reject(new Error('K bye!'));
});

promise.catch(function(error){
	console.log(error);
})

let pr = Promise.resolve('Ahoy!');
let prej = Promise.reject('K bye');