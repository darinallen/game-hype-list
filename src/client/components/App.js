var React = require('react');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.name = 'Darin';
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <h1>This is {this.name}'s React app!</h1>
        </div>
      </div>
    );
  }
}

module.exports = App;
