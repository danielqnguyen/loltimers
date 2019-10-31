import React, { Component } from "react";
import "./App.css";
import Time from "./components/GameTimer/GameTime";
import Lanes from "./components/Lanes/Lanes";
import Desc from "./components/Lanes/Description";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBegun: false,
      gameSec: 0,
      gameMin: 0,
      gameStart: 0,
      tSS1: ""
    };
  }

  gameStart = () => {
    // if (!this.state.gameBegun) {
    this.setState({ gameBegun: true });
    // this.countUp();
    // }
    if (this.state.gameSec === 59) {
      let minutes = this.state.gameMin;
      let plusMin = (minutes += 1);
      this.setState({ gameSec: -1, gameMin: plusMin });
    }
    let time = this.state.gameSec;
    let trueTime = (time += 1);
    this.timer = this.setState({ gameSec: trueTime });
    window.setTimeout(this.countUp, 1000);

    // this.setState({
    //   gameBegun: true,
    //   gameTime: this.state.gameTime,
    //   gameStart: Date.now() - this.state.gameTime
    // });
    // this.timer = setInterval(() => {
    //   this.setState({
    //     gameTime: Date.now() - this.state.gameStart
    //   });
    // }, 1000);
  };

  countUp = () => {
    if (this.state.gameSec === 59) {
      let minutes = this.state.gameMin;
      let plusMin = (minutes += 1);
      this.setState({ gameSec: -1, gameMin: plusMin });
    }
    let time = this.state.gameSec;
    let trueTime = (time += 1);
    this.timer = this.setState({ gameSec: trueTime });
    window.setTimeout(this.countUp, 1000);
  };

  gameEnd = () => {
    this.setState({ gameMin: 0, gameSec: 0, gameBegun: false });
  };

  render() {
    return (
      <div className="App">
        <h1> LOL Timers </h1>
        <Time
          gameSec={this.state.gameSec}
          gameStart={this.gameStart}
          gameEnd={this.gameEnd}
          gameMin={this.state.gameMin}
        />
        <Lanes lane={"Top"} />
        <Lanes lane={"Jungle"} />
        <Lanes lane={"Middle"} />
        <Lanes lane={"Bottom"} />
        <Desc />
        <Lanes lane={"Support"} />
      </div>
    );
  }
}

export default App;
