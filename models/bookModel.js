var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookModel = new Schema({});

module.exports = mongoose.model('book', bookModel);
var bookModel = new Schema({
    "title": { type: String },
    "genre": { type: String },
    "author": { type: String },
    "read": { type: Boolean, default: false }
})

module.exports = mongoose.model('Book', bookModel)
    // var bookModel = new Schema({
    //     "title" : {type: String},
    //     "genre" : {type: String},
    //     "author" : {type: String},
    //     "read" : {type: Boolean, default: false}
    // })

// module.exports = mongoose.model('Book', bookModel)
//var db = mongoose.connect('mongodb://vinothkalimuthu:pass1430@ds053194.mlab.com:53194/booksapi');