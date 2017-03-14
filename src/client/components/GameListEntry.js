import React from 'react';

var GameListEntry = ({game}) => (
  <div className="game-list-entry">
    <div className="game-title">{game.title}</div>
    <div className="game-release-date">{game.releaseDate}</div>
    <div className="game-platform">
      <img className="game-platform-img" src={game.platformUrl} alt="" />
    </div>
  </div>
);

// Show warnings in the console when the defined props are not included
GameList.propTypes = {
  game: React.PropTypes.array.isRequired
};

export default GameListEntry;
