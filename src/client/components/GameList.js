var GameList = ({games}) => (
  <div className="game-list">
    {games.map(game =>
      <GameListEntry
        game={game}
      />
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
GameList.propTypes = {
  games: React.PropTypes.array.isRequired
};
