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
    var newGame = {
      title: req.body.title,
      date: req.body.releaseDate,
      platform: req.body.platform
    }
    createGame(newGame)
      .then(function(createdGame) {
        if(game) {
          res.json(createdGame);
        }
      })
      .fail(function(error) {
        next(error);
      });
  }

};
