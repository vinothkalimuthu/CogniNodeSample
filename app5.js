var express = require('express');
var app = express();

var port = process.env.port || 3000;

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://vinothkalimuthu:pass1430@ds053194.mlab.com:53194/booksapi');
var Book = require('./models/bookModel');

Book.find(function(err, books){
    console.log(books);
})

var bookRouter = express.Router();
bookRouter.route('/Books')
    .get(function(req, res){
        // res.json({
        //     title:'This is book app'
        // })
        Book.find(function(err, books){
            res.json(books);
        })
    })

    bookRouter.route('/Books/:id')
    .get(function(req, res){
        // res.json({
        //     title:'This is book app'
        // })
        Book.findById(req.params.id, function(err, books){
            res.json(books);
        })
    })

    app.use('/api', bookRouter);

app.get('/', function(req, res){
    res.send('Hello World 123');

})

app.listen(port, function(){
    console.log('Server Running');
})