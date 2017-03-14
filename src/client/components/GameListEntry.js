import React from 'react';
var GameListEntry = ({game}) => (
  <div className="game-list-entry">
    {game.title}
  </div>
);

// Show warnings in the console when the defined props are not included
GameListEntry.propTypes = {
  game: React.PropTypes.object.isRequired
};

export default GameListEntry;
