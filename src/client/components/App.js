class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData
    };
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <h1>This is {name}'s React app!</h1>
        </div>
      </div>
    );
  }
}

module.exports = App;
