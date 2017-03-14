import React from 'react';
import exampleGames from '../../data/exampleGamesData';
import GameList from './GameList';
import GameSubmit from './GameSubmit';

console.log('GameList Component: ', GameList);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList: exampleGames
    };
  }
  render() {
    console.log('gameList: ', this.state.gameList);
    return (
      <div>
        <h1>Video Game Hype List</h1>
        <GameSubmit />
        <GameList games={this.state.gameList} />
      </div>
    );
  }
}
export default App;
