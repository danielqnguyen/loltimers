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
      gameSec: 25,
      gameMin: 7,
      gameStart: 0,
      tSS1: "",
      tSS2: "",
      tCon: false,
      tSt1: 0,
      tSt2: 0,
      jSS1: "",
      jSS2: "",
      jCon: false,
      jSt1: 0,
      jSt2: 0,
      mSS1: "",
      mSS2: "",
      mCon: false,
      mSt1: 0,
      mSt2: 0,
      bSS1: "",
      bSS2: "",
      bCon: false,
      bSt1: 0,
      bSt2: 0,
      sSS1: "",
      sSS2: "",
      sCon: false,
      sSt1: 0,
      sSt2: 0
    };
  }

  gameStart = () => {
    if (this.state.gameBegun === true) {
      console.log("NO");
    } else {
      this.setState({ gameBegun: true });
      this.gameTimer = setInterval(this.countUp, 1000);
    }
  };

  countUp = () => {
    if (this.state.gameSec === 59) {
      let minutes = this.state.gameMin;
      let plusMin = (minutes += 1);
      this.setState({ gameSec: -1, gameMin: plusMin });
    }
    let time = this.state.gameSec;
    console.log(time);
    let trueTime = (time += 1);
    console.log(trueTime);
    this.setState({ gameSec: trueTime });
  };

  gameEnd = () => {
    this.setState({ gameMin: 0, gameSec: 0, gameBegun: false });
    clearInterval(this.gameTimer);
  };

  onChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    this.setState({ [key]: val });
    console.log(key, val);
  };

  onConfirm = evt => {
    const key = evt.target.name;
    switch (key) {
      case "Top":
        this.state.tSS1 !== this.state.tSS2 &&
        this.state.tSS1 !== "" &&
        this.state.tSS2 !== ""
          ? this.setState({ tCon: true })
          : alert("select different summoners");
        break;
      case "Jungle":
        this.state.jSS1 !== this.state.jSS2 &&
        this.state.jSS1 !== "" &&
        this.state.jSS2 !== ""
          ? this.setState({ jCon: true })
          : alert("select different summoners");
        break;
      case "Middle":
        this.state.mSS1 !== this.state.mSS2 &&
        this.state.mSS1 !== "" &&
        this.state.mSS2 !== ""
          ? this.setState({ mCon: true })
          : alert("select different summoners");
        break;
      case "Bottom":
        this.state.bSS1 !== this.state.bSS2 &&
        this.state.bSS1 !== "" &&
        this.state.bSS2 !== ""
          ? this.setState({ bCon: true })
          : alert("select different summoners");
        break;
      case "Support":
        this.state.sSS1 !== this.state.sSS2 &&
        this.state.sSS1 !== "" &&
        this.state.sSS2 !== ""
          ? this.setState({ sCon: true })
          : alert("select different summoners");
        break;
      default:
    }
  };

  timeSpell = evt => {
    let min = this.state.gameMin * 60;
    let sec = this.state.gameSec + min;
    const val = evt.target.value;

    const key = evt.target.name;
    console.log(key, val, sec, min);
    switch (val) {
      case "Teleport":
        this.setState({ tSt1: sec + 360 });
        break;
      case "Flash":
        this.setState({ tSt2: sec + 300 });
        break;
      case "Heal":
        this.setState({ tSt2: sec + 240 });
        break;
      case "Cleanse":
        this.setState({ tSt2: sec + 210 });
        break;
      case "Exhaust":
        this.setState({ tSt2: sec + 210 });
        break;
      case "Ghost":
        this.setState({ tSt2: sec + 180 });
        break;
      case "Ignite":
        this.setState({ tSt2: sec + 180 });
        break;
      case "Barrier":
        this.setState({ tSt2: sec + 180 });
        break;
      case "Smite":
        this.setState({ tSt2: sec + 5 });
        break;
      default:
    }
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
        <Lanes
          lane={"Top"}
          ss1={this.state.tSS1}
          ss2={this.state.tSS2}
          con={this.state.tCon}
          onConfirm={this.onConfirm}
          time={this.state.tSt1}
          time2={this.state.tSt2}
          timeSpell={this.timeSpell}
          name="tSS1"
          name2="tSS2"
          onChange={this.onChange}
        />
        <Lanes
          lane={"Jungle"}
          ss1={this.state.jSS1}
          ss2={this.state.jSS2}
          con={this.state.jCon}
          onConfirm={this.onConfirm}
          name="jSS1"
          name2="jSS2"
          onChange={this.onChange}
        />
        <Lanes
          lane={"Middle"}
          ss1={this.state.mSS1}
          ss2={this.state.mSS2}
          con={this.state.mCon}
          onConfirm={this.onConfirm}
          name="mSS1"
          name2="mSS2"
          onChange={this.onChange}
        />
        <Lanes
          lane={"Bottom"}
          ss1={this.state.bSS1}
          ss2={this.state.bSS2}
          con={this.state.bCon}
          onConfirm={this.onConfirm}
          name="bSS1"
          name2="bSS2"
          onChange={this.onChange}
        />
        <Desc onConfirm={this.onConfirm} />
        <Lanes
          lane={"Support"}
          ss1={this.state.sSS1}
          ss2={this.state.sSS2}
          con={this.state.sCon}
          onConfirm={this.onConfirm}
          name="sSS1"
          name2="sSS2"
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default App;
