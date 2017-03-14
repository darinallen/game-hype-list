var mongoose = require ('mongoose');

var GameSchema = new mongoose.Schema({
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

var Game = mongoose.model('game', GameSchema);

modules.export = Game;
