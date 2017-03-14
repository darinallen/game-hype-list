import React from 'react';
import GameListEntry from './GameListEntry.js';

var GameList = ({games}) => (
  <div className="game-list">
    {games.map(game =>
      <GameListEntry
        game={game}
        key={game.id}
      />
    )}
  </div>
);

// Show warnings in the console when the defined props are not included
GameList.propTypes = {
  games: React.PropTypes.array.isRequired
};

export default GameList;
