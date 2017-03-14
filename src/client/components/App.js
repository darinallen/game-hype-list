import React from 'react';
import exampleGames from '../../data/exampleGamesData';
import GameList from './GameList.js';

console.log('exampleGames: ', exampleGames);
console.log('GameList: ', GameList);

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

export default App;
