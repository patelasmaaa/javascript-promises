function alwaysThrows(){
	throw 'OH NOES';
}

function iterate(i){
	console.log(i);
	return i+1;
}

// no need:

function onReject(error){
	console.log(error.message);
}

/* incorrect:

for(let i=1; i<6; i++){
	Promise.resolve(i).then(iterate(i)).then(alwaysThrows).then(null, console.log);
}*/

Promise.resolve(1).then(iterate).then(iterate).then(iterate).then(iterate).then(iterate).then(alwaysThrows).then(null, console.log);
