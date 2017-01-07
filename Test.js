
   var evenMultiplier = function(input, callback) {
    if (input % 2) {
        callback(new Error('Odd Input'));
    } else {
        callback(null, input * 2);
    }

}

// var processResult = function(err, result) {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log('My result is ' + result);
//     }
// }
// for( var i=0; i < 10; i++){
//     evenMultiplier(i, processResult);
// }

module.exports.evenMultiplier = evenMultiplier;

// for( var i=0; i < 10; i++){
//     evenMultiplier(i, function(err, result) {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log('My result is ' + result);
//     }
// });

// }