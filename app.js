var evenFunc = require('./Test');

var processResult = function(err, result) {
     if (err) {
        console.log(err.message);
    } else {
        console.log('My result is ' + result);
    }
}

evenFunc.evenMultiplier(2, processResult);