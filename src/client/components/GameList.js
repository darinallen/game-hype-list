import React from 'react';

var GameList = ({games}) => (
  <div className="game-list">
    {games.map(game =>
      <GameListEntry
        game={game}
      />
    )}
  </div>
);

// Show warnings in the console when the defined props are not included
GameList.propTypes = {
  games: React.PropTypes.array.isRequired
};
