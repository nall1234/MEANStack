const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.search('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());







app.listen(port, () => console.log(`express server listening on port ${port}`))