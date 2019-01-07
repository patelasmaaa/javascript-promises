let http = require("q-io/http");

http.read('http://localhost:7000').then(function(json){
	//let str = JSON.parse(json);

	return http.read('http://localhost:7001/' + json.toString());
	
}).then(function(value){
	console.log(JSON.parse(value.toString()));
})
.then(null, console.error);