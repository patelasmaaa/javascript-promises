function all(promise1, promise2){
	
	let count = 0;
	let result = [];
	let promise = new Promise(function(resolve, reject){
		
		promise1.then(function(value){
			result[0]=(value);
			count++;
			
			if(count == 2)
				resolve(result);
		});

		promise2.then(function(value){
			result[1]=(value);
			count++;
			
			if(count == 2)
				resolve(result);
		});
	});
	return promise;
}
all(getPromise1(), getPromise2()).then(console.log);