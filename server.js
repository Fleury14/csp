const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const router = express.Router();

const index = require('./routes/index');
const safe = require('./routes/safe');

const app = express();

const port = 3000;

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));

// Set Static Folder
// app.use(express.static(path.join(__dirname, '/')));

//CORS Middleware
app.use(cors());


// Body Parser middle-ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/unsafe', function(req, res, next) {
    res.render('unsafe.html');
});

app.get('/', function(req, res, next) {
    res.header('Content-Security-Policy', `style-src localhost:3000/styles.css`);
    res.render('index.html');
});


app.listen(port, function() {
    console.log('Server started on port ' + port);
});