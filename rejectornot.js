let promise = new Promise(function(resolve, reject){
	resolve('I FIRED');

	reject(new Error('I DID NOT FIRE'));

});

function onRejected(error){
	console.log(error);
}
promise.then(console.log, onRejected);