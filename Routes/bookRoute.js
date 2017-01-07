var express = require('express');
var routes = function(bookModel) {

    var bookRouter = express.Router();

    bookRouter.route('/books')
        .get(function(req, res) {
            bookModel.find(function(err, books) {
                res.json(books);
            })
        })
        .post(function(req, res) {
            var book = new bookModel(req.body);
            book.save();
            res.send(book);
        })

    bookRouter.route('/books/:id')
        .get(function(req, res) {
            var query = bookModel.findById(req.params.id).select({ "title": 1, "genre": 1 })
            query.exec(function(err, book) {
                res.json(book);
            })
        })

    bookRouter.route('/books/titles/:title')
        .get(function(req, res) {
            bookModel.find({ "title": req.params.title }, function(err, books) {
                res.json(books);
            })
        })

    bookRouter.route('/books/delete/:id')
        .delete(function(req, res) {
            var query = bookModel.findById(req.params.id); //.select({"title":1,"genre":1});
            query.exec(function(err, book) {
                book.remove(function(err, book) {
                    if (err) {
                        return console.error(err);
                    } else {
                        //Returning success messages saying it was deleted
                        console.log('DELETE removing ID: ' + book._id);
                        res.json({
                            message: 'deleted',
                            item: book
                        });
                    }
                })
            })
        })

    bookRouter.route('/books/update/:id')
        .get(function(req, res) {
            var query = bookModel.findById(req.params.id); //.select({ "title": 1, "genre": 1 })
            query.exec(function(err, book) {
                res.json(book);
            })
        })
        .put(function(req, res) {
            var query = bookModel.findById(req.params.id);
            query.exec(function(err, book) {
                book.title = req.body.title;
                book.genre = req.body.genre;
                book.author = req.body.author;
                book.read = req.body.read;
                book.save();
                res.json(book);
            })
        })



    return bookRouter;
}

module.exports = routes;