var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [{
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayevich Tolstoy',
    bookId: 656,
    read: false
}, {
    title: 'The Wind up Bird Chronicle',
    genre: 'Fantasy/Magic Realism',
    author: 'Haruki Murakami',
    bookId: 11275,
    read: true
}, {
    title: 'Tom Sawyer',
    genre: 'Japes',
    author: 'Mark Twain',
    read: true
}];

var router = function(nav) {

    adminRouter.route('/addBooks')
        .get(function(req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function(err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function(err, results) {
                    res.send(results);
                    db.close();
                });
            });

            // res.send('inserting books');
        });

    return adminRouter;
};

module.exports = router;