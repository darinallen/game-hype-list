import React from 'react';
var GameListEntry = ({game}) => (
  <div className="container">
    <div className="game-list-entry">
      <div className="game-platform-img">
        <img src= {game.platformImg}/>
      </div>
      <div className="game-title">{game.title}</div>
      <div className="game-release-date">{game.releaseDate}</div>
    </div>
  </div>
);

// Show warnings in the console when the defined props are not included
GameListEntry.propTypes = {
  game: React.PropTypes.object.isRequired
};

export default GameListEntry;
