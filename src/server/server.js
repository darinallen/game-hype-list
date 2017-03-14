var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

// connect to mongo database named "game-hype-list"
// mongoose.connect('mongodb://localhost/game-hype-list');

// Set what we are listening on.
app.set('port', process.env.PORT || 3000);

// Set up middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Serve the client files
app.use(express.static(path.join(__dirname, '/../../build/transformed.js')));

// Set up requests
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/../../build/index.html'));
});

// app.post('/', function(req, res) {
//
// });

// start listening to requests on port 3000
app.listen(app.get('port'), function() {
    console.info('Express server started at http://localhost:' + app.get('port'));
});

// export our app for testing and flexibility, required by index.js
module.exports = app;
