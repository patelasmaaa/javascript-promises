 'use strict';
    
    var promise = new Promise(function (resolve, reject) {
      // Your solution here
      setTimeout(function() {
      	resolve('FULFILLED!');
      }, 300)
    });
    
    // Your solution here
promise.then(console.log);