import Q from 'q';
import mongoose from 'mongoose';

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

export { gamesSchema };
