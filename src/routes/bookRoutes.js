var express =  require('express');
var bookRouter = express.Router();

var books = [{
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayevich Tolstoy',
    read: false
}, {
    title: 'The Wind up Bird Chronicle',
    genre: 'Fantasy/Magic Realism',
    author: 'Haruki Murakami',
    read: true
}];

bookRouter.route('/')
    .get(function(req, res) {
        res.render('books', {
            title: 'Books',
            nav: [{
                Link: '/Books',
                Text: 'Books'
            }, {
                Link: '/Authors',
                Text: 'Authors'
            }],
            books: books
        });
    });

bookRouter.route('/:id')
    .get(function(req, res) {
        var id = req.params.id;
        res.render('books', {
            title: 'Books',
            nav: [{
                Link: '/Books',
                Text: 'Books'
            }, {
                Link: '/Authors',
                Text: 'Authors'
            }],
            books: books
        });

    });

module.exports = bookRouter;