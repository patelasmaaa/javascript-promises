var one = first();
var two = one.then(function(value){
	return second(value);
});

two.then(console.log);