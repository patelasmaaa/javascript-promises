function attachTitle(arg){
	return 'DR. ' + arg;
}

let promise = new Promise(function(resolve, reject){
	resolve('MANHATTAN');
});

promise.then(attachTitle).then(console.log);