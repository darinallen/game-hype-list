var Q = require('q');
var mongoose = require ('mongoose');

var GamesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },

  date: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  }
});

var gamesSchema = mongoose.model('games', GamesSchema);

modules.export = gamesSchema;
