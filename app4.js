//Building a web server using Node js

var fs = require('fs');
var os = require('os');
var http = require('http');

var app = http.createServer(function(req, res) {
    fs.createReadStream('Index.html').pipe(res);
    // var str = fs.readFileSync('test.txt').toString()
    // res.end(str);

}).listen(9040, os.hostname());

console.log('Server is running');

var socketio = require('socket.io');
var ion = socketio.listen(app);

ion.sockets.on('connection', function(list) {
    setInterval(function() {
        list.emit('dateEmit', Date.now())
    }, 5000)

    list.on('submitData', function(data)
    {
        console.log("Got data on server"+data);
    })

})