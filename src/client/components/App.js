import React from 'react';
var gameData = require('../../data/exampleGamesData');
import GameList from './GameList';
import GameSubmit from './GameSubmit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList: gameData.exampleGames,
    };
  }

  componentDidMount() {
    var _this = this;
    this.serverRequest =
      axios
        .get('/games')
        .then(function(result) {
          console.log('componentDidMount result.data: ', result.data);
          _this.setState({
            gameList: result.data
          });
        })
  }

  // componentWillUnmount() {
  //   this.serverRequest.abort();
  // }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post('/')
      .then(function(result) {
        console.log('handleSubmit result.data: ', result.data);
        _this.setState({
          gameList: result.data
        });
      })
  }

  render() {
    return (
      <div>
        <h1>Video Game Hype List</h1>
        <GameSubmit handleSubmit={this.handleSubmit.bind(this)}/>
        <GameList games={this.state.gameList} />
      </div>
    );
  }
}
export default App;
