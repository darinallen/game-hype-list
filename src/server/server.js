var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var gameController = require('./games/gameController.js');
var Game = require('./games/gameModel.js');
var gameData = require('../data/exampleGamesData.js');
var app = express();

// Create a sample game
Game.create({
  id: 6,
  title: 'Xenoblade Chronicles 2',
  date: 'Fall, 2017',
  platform: 'switch',
  platformImg: 'https://dl.dropboxusercontent.com/u/6695849/mvp/switch.png'
}, function (err, game) {
  if (err) {
    console.log('err: ', err)
  } else {
    console.log('game: ', game)
  }
});


// Mongo ahoy!
// connect to mongo database named "game-hype-list"
if(app.get('env') === 'development') {
  mongoose.connect('mongodb://localhost/game-hype-list');
  var db = mongoose.connection;
}

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

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

// app.get('api/games', function(req, res) {
//   console.log('Successful GET request!');
//   // gameController.allGames(req, res);
// });

app.post('/', function(req, res, next) {
  // console.log('request: ', req.body);
  // if(req.body.platform === 'pc') {
  //   req.body.platformImg = 'https://dl.dropboxusercontent.com/u/6695849/mvp/pc.png';
  // } else if (req.body.platform === 'playstation') {
  //   req.body.platformImg = 'https://dl.dropboxusercontent.com/u/6695849/mvp/playstation.png';
  // } else if (req.body.platform === 'xbox') {
  //   req.body.platformImg = 'https://dl.dropboxusercontent.com/u/6695849/mvp/xbox.png';
  // } else if (req.body.platform === 'switch') {
  //   req.body.platformImg = 'https://dl.dropboxusercontent.com/u/6695849/mvp/switch.png';
  // }
  // gameData.exampleGames.push(req.body);
  // console.log('gameData: ', gameData.exampleGames);

  gameController.addGame(req, res, function() {
    gameController.allGames(req, res, function() {
      console.log('req.body: ', req.body);
    });
  });

  // post game then run the get request
});

// start listening to requests on port 3000
app.listen(app.get('port'), function() {
    console.info('Express server started at ' + app.get('ip') + ':' + app.get('port'));
});

// export our app for testing and flexibility, required by index.js
module.exports = app;
