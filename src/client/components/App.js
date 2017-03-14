import React from 'react';
var gameData = require('../../data/exampleGamesData');
import GameList from './GameList';
import GameSubmit from './GameSubmit';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList: gameData.exampleGames
      value: '';
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A value was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
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


// set state of gameList
