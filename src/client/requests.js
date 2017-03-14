var exampleGames = require('../data/exampleGamesData.js');
import App from './components/App.js'

var requestGames = function() {
  $.ajax({
    type: 'post',
    data: data,
    contentType: 'application/json',

    success: function() {
      App.state.gameList = gameList;
    },
    error: function (data) {
      console.error('Failed to receive games', data);
    }
  });
};
