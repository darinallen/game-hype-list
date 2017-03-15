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

  handleSubmit: function(event) {
    event.preventDefault();
    axios.post('/')
      .then(function(result) {
        alert('Working!');
        console.log(result);
        this.setState({gameList: result});
  });
  }

  render() {
    return (
      <div>
        <h1>Video Game Hype List</h1>
        <GameSubmit onSubmit={this.handleSubmit.bind(this)}/>
        <GameList games={this.state.gameList} />
      </div>
    );
  }
}
export default App;


// set state of gameList




// import React from 'react';
// var gameData = require('../../data/exampleGamesData');
// import GameList from './GameList';
// import GameSubmit from './GameSubmit';
//
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       gameList: gameData.exampleGames,
//     };
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Video Game Hype List</h1>
//         <GameSubmit />
//         <GameList games={this.state.gameList} />
//       </div>
//     );
//   }
// }
// export default App;
