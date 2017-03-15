var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var gameController = require('./games/gameController.js');
var Game = require('./games/gameModel.js');
var gameData = require('../data/exampleGamesData.js');
var app = express();

// Game.create({
//   title: 'Super Mario Odyssey',
//   date: 'Fall 2017',
//   platform: 'Switch',
//   platformImg: 'https://dl.dropboxusercontent.com/u/6695849/mvp/switch.png'
// });

// connect to mongo database named "game-hype-list"
if(app.get('env') === 'development') {
  mongoose.connect('mongodb://localhost/game-hype-list');
  var db = mongoose.connection;
}

// Set what we are listening on.
app.set('port', process.env.PORT || 3000);
app.set('ip', process.env.IP || 'http://localhost');

// Set up middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Serve the client files
app.use(express.static(path.join(__dirname, '/../../build')));

// Set up requests
app.get('/', function(req, res) {
  console.log('Successful GET request!');
  res.sendFile(path.join(__dirname, '/../../build/index.html'));
});

app.get('/games', function(req, res, next) {
  Game.find({}, function(err, result) {
    console.log('findAll result: ', result);
    res.send(result);
  });
});

app.post('/', function(req, res, next) {

  Game.create({
    title: req.body.title,
    date: req.body.date,
    platform: req.body.platform,
    platformImg: (function() {
      if(req.body.platform === 'pc') {
        return 'https://dl.dropboxusercontent.com/u/6695849/mvp/pc.png';
      } else if (req.body.platform === 'playstation') {
        return 'https://dl.dropboxusercontent.com/u/6695849/mvp/playstation.png';
      } else if (req.body.platform === 'xbox') {
        return 'https://dl.dropboxusercontent.com/u/6695849/mvp/xbox.png';
      } else if (req.body.platform === 'switch') {
        return 'https://dl.dropboxusercontent.com/u/6695849/mvp/switch.png';
      }
    })()
  }, function (err, game) {
    if (err) {
      console.log('err: ', err);
    } else {
      console.log('game added: ', game);
      Game.find({}, function(err, result) {
        console.log('findAll result: ', result);
        res.send(result);
      });
    }
  });

});

// start listening to requests on port 3000
app.listen(app.get('port'), function() {
    console.info('Express server started at ' + app.get('ip') + ':' + app.get('port'));
});

// export our app for testing and flexibility, required by index.js
module.exports = app;
