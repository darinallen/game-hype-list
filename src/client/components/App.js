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

    $.ajax({
      type: "POST",
      url: '/',
      success: function(error, result) {
        console.log('client post response: ', result);
        this.setState({gameList: result})
      },
      failure: function(error, result) {
        console.log('error: ', error);
      }
    });

    // axios.post('/')
    //   .then(function(result) {
    //     alert('Working!');
    //     console.log(result);
    //     this.setState({gameList: result});
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
