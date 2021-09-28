const express = require ('express');
const path = require('path');

const logger = require("./middleware/logger")
const port = process.env.PORT||8000;


//creates serever below
const app = express();
console.log(logger)
//set our views using join and the dir name to create the full name
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//new bodyparser is now in express.urlencoded
app.use(express.urlencoded({ extended: true}));

// create own middleware below

app.use(function(request, response, next){
    console.log(next)
    next();
});

app.use(logger)

const names = ['evan', 'cadu', 'kurt']

//GET request
app.get('/', function(request, response){

    // console.log('hello from express')

    response.render('index');
});


//post request
app.post('/names', function(request, response){
    console.log('posting names', request.body);
    names.push(request.body.name);

    response.redirect('/');

});

app.get('/names/:id', function(request, response){
    response.send(names[request.params.id])
})


app.listen(port, ()=> console.log(`express server listening on port ${port}`));