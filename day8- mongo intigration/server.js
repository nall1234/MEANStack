const { response } = require('express');
const express = require ('express');
const mongoose = require ('mongoose');
const path  = require ('path');

const {PORT: port = 8000} = process.env;
const {Schema} = mongoose;
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));


app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/authors_books');
mongoose.connection.on('connected', ()=>console.log('connected to mongo'))

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Author name is required'],
        trim: true,
    },
    age: Number,
    isAlive: {
        type: Boolean,
        default: true
    },
    books: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Book'
        }
    ]
});

const BookSchema = new Schema({
    title: {
        type: String,
        required: [true, ' Title is required'],
        trim: true
    },
    year: Number,
    pages: {
        type: Number,
        required: [true, 'please supply number of pages'],
        min: [1, "must have at least one page"]
    },
    publisher: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    }
})


const Author = mongoose.model('Author', AuthorSchema);
const Book = mongoose.model('Book', BookSchema);



app.get('/', function(req, res){
    res.render('index');
});

app.get('/authors', function(req, res){
    Author.find({})
        .populate('books')
        .then(authors=> res.render('authors/index', {authors}))
        .catch(console.log())
})

app.post('/authors', function(req, res){
    Author.create(req.body)
        .then(author => {
            res.redirect('/authors');
        });
})

app.get('/authors/new', function(req, res){
    res.render('authors/new');
});

app.get('/authors/:author_id', function(req, res){
    const { author_id: authorId } = req.params
    Author.findById(authorId)
        .then(author=> res.send(author))
})

app.get('/books', function(req, res){
    Book.find({})
        .populate('author')
        .then(books=> res.render('books/index', {books}))
        .catch(console.log)
});

app.get('/books/new', function(req, res){
    Author.find({})
        .then(authors=> res.render('books/new', { authors}));
});

app.post('/books', function(req, res){
    Book.create(req.body)
        .then(book=>{
            return Author.findById(book.author)
                .then(author=> {
                    author.books.push(book._id)

                    return author.save()
                })
                .then(()=> {
                    res.redirect('/books')
            })            
        })
})





app.listen(port, ()=>console.log(`Express listening on port ${port}`));