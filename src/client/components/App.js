var React = require('react');
var exampleGames = require('../../data/exampleGameData');
console.log(exampleGames);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList: exampleGames
    };
    this.name = 'Darin';
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Video Game Hype List</h1>
        {/* <GameList games={this.state.gameList} /> */}
      </div>
    );
  }
}

module.exports = App;
