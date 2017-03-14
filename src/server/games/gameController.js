var Q = require ('q');
var Game = require ('./gameModel.js');

var createGame = Q.nbind(Game.create, Game);
var findAllGames = Q.nbind(Game.find, Game);

module.exports = {

  allGames: function(req, res, next) {
    findAllGames({})
      .then(function(games) {
        res.json(games);
      }).fail(function(error) {
        next(error);
      });
  },

  addGame: function(req, res, next) {
    console.log('req.body: ', req.body);
    var newGame = {
      title: req.body.title,
      date: req.body.date,
      platform: req.body.platform,
      platformImg: 'https://dl.dropboxusercontent.com/u/6695849/mvp/switch.png'
    }
    createGame(newGame)
      .then(function(createdGame) {
        if(createdGame) {
          console.log('createGame: ', createdGame);
          res.json(createdGame);
        }
      })
      .fail(function(error) {
        next(error);
      });
  }

};
