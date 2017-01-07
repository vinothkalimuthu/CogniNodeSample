var EventEmitter = require('events').EventEmitter;

var getEvents = function(input){
    var e = new EventEmitter();
    process.nextTick(function(){
        var count = 0;
        e.emit('start');
        var t = setInterval(function(){
            e.emit('data', count++)
            if(count === input){
                clearInterval(t);
            }

        }, 10);
    })
    return e;
}

var ab = getEvents(3);

ab.on('start', function(){
    console.log('start');
})

ab.on('data', function(d){
    console.log(d);
})