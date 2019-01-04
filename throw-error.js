function parsePromised(path){
	return promise = new Promise(function(resolve, reject){
		try{
			resolve(JSON.parse(path));
		}
		catch(exception){
			reject(exception.message);
		}
	})
};
parsePromised(process.argv[2]).then(null, console.log);