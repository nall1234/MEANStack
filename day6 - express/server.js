const express = require ('express');
const path = require('path');


const port = process.env.PORT||8000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true}));

const names = ['evan', 'cadu', 'kurt']


app.get('/', function(request, response){

    // console.log('hello from express')

    response.render('index');
});

app.post('/names', function(request, response){
    console.log('posting names', request.body);
    names.push(request.body.name);

    response.redirect('/');

});

app.get('/names/:id', function(request, response){
    response.send(names[request.params.id])
})



app.listen(port, ()=> console.log(`express server listening on port ${port}`));