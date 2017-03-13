var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

// connect to mongo database named "game-hype-list"
mongoose.connect('mongodb://localhost/game-hype-list');

// Set what we are listening on.
app.set('port', 3000);

// Set up middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Set up requests
app.get('/', FILL_ME_IN);

app.post('/', FILL_ME_IN);

// Serve the client files
app.use(express.static(__dirname + '/../../client'));

// start listening to requests on port 3000
app.listen(3000);

// export our app for testing and flexibility, required by index.js
module.exports = app;