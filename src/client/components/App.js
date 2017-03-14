import React from 'react';
var gameData = require('../../data/exampleGamesData');
import GameList from './GameList';
import GameSubmit from './GameSubmit';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList: gameData.exampleGames,
      // title: '',
      // date: '',
      // platform: ''
    };
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   var gameList = this.state.gameList;
  //   var title = this.state.title;
  //   var date = this.state.date;
  //   var platform = this.state.platform;
  //
  //   this.props.onGameSubmit({title: title, date: date, platform: platform});
  //
  //   this.setState({
  //     title: '',
  //     date: '',
  //     platform: ''
  //   });
  // }
  //
  // setValue: function(field, event) {
  //   var object = {};
  //   object[field] = event.target.value;
  //   this.setState()
  // }
  //
  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

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
