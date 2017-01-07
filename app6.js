var express = require('express');
var app = express();

var port = process.env.port || 3000;

var mongoose = require('mongoose');
mongoose.connect('mongodb://vinothkalimuthu:pass1430@ds053194.mlab.com:53194/booksapi');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

var bookModel = require('./models/bookModel');
var bookRouter = require('./Routes/bookRoute')(bookModel);

app.use('/api', bookRouter);

app.get('/', function(req, res) {
    res.send('Hello World');
})

app.listen(port, function() {
    console.log('Server Running');
})