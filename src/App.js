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
    let trueTime = (time += 1);
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
    switch (key) {
      case "Top":
        switch (val) {
          case "Teleport":
            if (this.state.tSS1 === "Teleport" && sec > this.state.tSt1) {
              this.setState({ tSt1: sec + 360 });
            }
            if (this.state.tSS2 === "Teleport" && sec > this.state.tSt2) {
              this.setState({ tSt2: sec + 360 });
            }
            break;
          case "Flash":
            if (this.state.tSS1 === "Flash" && sec > this.state.tSt1) {
              this.setState({ tSt1: sec + 300 });
            }
            if (this.state.tSS2 === "Flash" && sec > this.state.tSt2) {
              this.setState({ tSt2: sec + 300 });
            }
            break;
          case "Heal":
            if (this.state.tSS1 === "Heal" && sec > this.state.tSt1) {
              this.setState({ tSt1: sec + 240 });
            }
            if (this.state.tSS2 === "Heal" && sec > this.state.tSt2) {
              this.setState({ tSt2: sec + 240 });
            }
            break;
          case "Cleanse":
            if (this.state.tSS1 === "Cleanse" && sec > this.state.tSt1) {
              this.setState({ tSt1: sec + 210 });
            }
            if (this.state.tSS2 === "Cleanse" && sec > this.state.tSt2) {
              this.setState({ tSt2: sec + 210 });
            }
            break;
          case "Exhaust":
            if (this.state.tSS1 === "Exhaust" && sec > this.state.tSt1) {
              this.setState({ tSt1: sec + 210 });
            }
            if (this.state.tSS2 === "Exhaust" && sec > this.state.tSt2) {
              this.setState({ tSt2: sec + 210 });
            }
            break;
          case "Ghost":
            if (this.state.tSS1 === "Ghost" && sec > this.state.tSt1) {
              this.setState({ tSt1: sec + 180 });
            }
            if (this.state.tSS2 === "Ghost" && sec > this.state.tSt2) {
              this.setState({ tSt2: sec + 180 });
            }
            break;
          case "Ignite":
            if (this.state.tSS1 === "Ignite" && sec > this.state.tSt1) {
              this.setState({ tSt1: sec + 180 });
            }
            if (this.state.tSS2 === "Ignite" && sec > this.state.tSt2) {
              this.setState({ tSt2: sec + 180 });
            }
            break;
          case "Barrier":
            if (this.state.tSS1 === "Barrier" && sec > this.state.tSt1) {
              this.setState({ tSt1: sec + 180 });
            }
            if (this.state.tSS2 === "Barrier" && sec > this.state.tSt2) {
              this.setState({ tSt2: sec + 180 });
            }
            break;
          case "Smite":
            if (this.state.tSS1 === "Smite" && sec > this.state.tSt1) {
              this.setState({ tSt1: sec + 90 });
            }
            if (this.state.tSS2 === "Smite" && sec > this.state.tSt2) {
              this.setState({ tSt2: sec + 90 });
            }
            break;
          default:
        }
        break;
      case "Jungle":
        switch (val) {
          case "Teleport":
            if (this.state.jSS1 === "Teleport" && sec > this.state.jSt1) {
              this.setState({ jSt1: sec + 360 });
            }
            if (this.state.jSS2 === "Teleport" && sec > this.state.jSt2) {
              this.setState({ jSt2: sec + 360 });
            }
            break;
          case "Flash":
            if (this.state.jSS1 === "Flash" && sec > this.state.jSt1) {
              this.setState({ jSt1: sec + 300 });
            }
            if (this.state.jSS2 === "Flash" && sec > this.state.jSt2) {
              this.setState({ jSt2: sec + 300 });
            }
            break;
          case "Heal":
            if (this.state.jSS1 === "Heal" && sec > this.state.jSt1) {
              this.setState({ jSt1: sec + 240 });
            }
            if (this.state.jSS2 === "Heal" && sec > this.state.jSt2) {
              this.setState({ jSt2: sec + 240 });
            }
            break;
          case "Cleanse":
            if (this.state.jSS1 === "Cleanse" && sec > this.state.jSt1) {
              this.setState({ jSt1: sec + 210 });
            }
            if (this.state.jSS2 === "Cleanse" && sec > this.state.jSt2) {
              this.setState({ jSt2: sec + 210 });
            }
            break;
          case "Exhaust":
            if (this.state.jSS1 === "Exhaust" && sec > this.state.jSt1) {
              this.setState({ jSt1: sec + 210 });
            }
            if (this.state.jSS2 === "Exhaust" && sec > this.state.jSt2) {
              this.setState({ jSt2: sec + 210 });
            }
            break;
          case "Ghost":
            if (this.state.jSS1 === "Ghost" && sec > this.state.jSt1) {
              this.setState({ jSt1: sec + 180 });
            }
            if (this.state.jSS2 === "Ghost" && sec > this.state.jSt2) {
              this.setState({ jSt2: sec + 180 });
            }
            break;
          case "Ignite":
            if (this.state.jSS1 === "Ignite" && sec > this.state.jSt1) {
              this.setState({ jSt1: sec + 180 });
            }
            if (this.state.jSS2 === "Ignite" && sec > this.state.jSt2) {
              this.setState({ jSt2: sec + 180 });
            }
            break;
          case "Barrier":
            if (this.state.jSS1 === "Barrier" && sec > this.state.jSt1) {
              this.setState({ jSt1: sec + 180 });
            }
            if (this.state.jSS2 === "Barrier" && sec > this.state.jSt2) {
              this.setState({ jSt2: sec + 180 });
            }
            break;
          case "Smite":
            if (this.state.jSS1 === "Smite" && sec > this.state.jSt1) {
              this.setState({ jSt1: sec + 90 });
            }
            if (this.state.jSS2 === "Smite" && sec > this.state.jSt2) {
              this.setState({ jSt2: sec + 90 });
            }
            break;
          default:
        }
        break;
      case "Middle":
        switch (val) {
          case "Teleport":
            if (this.state.mSS1 === "Teleport" && sec > this.state.mSt1) {
              this.setState({ mSt1: sec + 360 });
            }
            if (this.state.mSS2 === "Teleport" && sec > this.state.mSt2) {
              this.setState({ mSt2: sec + 360 });
            }
            break;
          case "Flash":
            if (this.state.mSS1 === "Flash" && sec > this.state.mSt1) {
              this.setState({ mSt1: sec + 300 });
            }
            if (this.state.mSS2 === "Flash" && sec > this.state.mSt2) {
              this.setState({ mSt2: sec + 300 });
            }
            break;
          case "Heal":
            if (this.state.mSS1 === "Heal" && sec > this.state.mSt1) {
              this.setState({ mSt1: sec + 240 });
            }
            if (this.state.mSS2 === "Heal" && sec > this.state.mSt2) {
              this.setState({ mSt2: sec + 240 });
            }
            break;
          case "Cleanse":
            if (this.state.mSS1 === "Cleanse" && sec > this.state.mSt1) {
              this.setState({ mSt1: sec + 210 });
            }
            if (this.state.mSS2 === "Cleanse" && sec > this.state.mSt2) {
              this.setState({ mSt2: sec + 210 });
            }
            break;
          case "Exhaust":
            if (this.state.mSS1 === "Exhaust" && sec > this.state.mSt1) {
              this.setState({ mSt1: sec + 210 });
            }
            if (this.state.mSS2 === "Exhaust" && sec > this.state.mSt2) {
              this.setState({ mSt2: sec + 210 });
            }
            break;
          case "Ghost":
            if (this.state.mSS1 === "Ghost" && sec > this.state.mSt1) {
              this.setState({ mSt1: sec + 180 });
            }
            if (this.state.mSS2 === "Ghost" && sec > this.state.mSt2) {
              this.setState({ mSt2: sec + 180 });
            }
            break;
          case "Ignite":
            if (this.state.mSS1 === "Ignite" && sec > this.state.mSt1) {
              this.setState({ mSt1: sec + 180 });
            }
            if (this.state.mSS2 === "Ignite" && sec > this.state.mSt2) {
              this.setState({ mSt2: sec + 180 });
            }
            break;
          case "Barrier":
            if (this.state.mSS1 === "Barrier" && sec > this.state.mSt1) {
              this.setState({ mSt1: sec + 180 });
            }
            if (this.state.mSS2 === "Barrier" && sec > this.state.mSt2) {
              this.setState({ mSt2: sec + 180 });
            }
            break;
          case "Smite":
            if (this.state.mSS1 === "Smite" && sec > this.state.mSt1) {
              this.setState({ mSt1: sec + 90 });
            }
            if (this.state.mSS2 === "Smite" && sec > this.state.mSt2) {
              this.setState({ mSt2: sec + 90 });
            }
            break;
          default:
        }
        break;
      case "Bottom":
        switch (val) {
          case "Teleport":
            if (this.state.bSS1 === "Teleport" && sec > this.state.bSt1) {
              this.setState({ bSt1: sec + 360 });
            }
            if (this.state.bSS2 === "Teleport" && sec > this.state.bSt2) {
              this.setState({ bSt2: sec + 360 });
            }
            break;
          case "Flash":
            if (this.state.bSS1 === "Flash" && sec > this.state.bSt1) {
              this.setState({ bSt1: sec + 300 });
            }
            if (this.state.bSS2 === "Flash" && sec > this.state.bSt2) {
              this.setState({ bSt2: sec + 300 });
            }
            break;
          case "Heal":
            if (this.state.bSS1 === "Heal" && sec > this.state.bSt1) {
              this.setState({ bSt1: sec + 240 });
            }
            if (this.state.bSS2 === "Heal" && sec > this.state.bSt2) {
              this.setState({ bSt2: sec + 240 });
            }
            break;
          case "Cleanse":
            if (this.state.bSS1 === "Cleanse" && sec > this.state.bSt1) {
              this.setState({ bSt1: sec + 210 });
            }
            if (this.state.bSS2 === "Cleanse" && sec > this.state.bSt2) {
              this.setState({ bSt2: sec + 210 });
            }
            break;
          case "Exhaust":
            if (this.state.bSS1 === "Exhaust" && sec > this.state.bSt1) {
              this.setState({ bSt1: sec + 210 });
            }
            if (this.state.bSS2 === "Exhaust" && sec > this.state.bSt2) {
              this.setState({ bSt2: sec + 210 });
            }
            break;
          case "Ghost":
            if (this.state.bSS1 === "Ghost" && sec > this.state.bSt1) {
              this.setState({ bSt1: sec + 180 });
            }
            if (this.state.bSS2 === "Ghost" && sec > this.state.bSt2) {
              this.setState({ bSt2: sec + 180 });
            }
            break;
          case "Ignite":
            if (this.state.bSS1 === "Ignite" && sec > this.state.bSt1) {
              this.setState({ bSt1: sec + 180 });
            }
            if (this.state.bSS2 === "Ignite" && sec > this.state.bSt2) {
              this.setState({ bSt2: sec + 180 });
            }
            break;
          case "Barrier":
            if (this.state.bSS1 === "Barrier" && sec > this.state.bSt1) {
              this.setState({ bSt1: sec + 180 });
            }
            if (this.state.bSS2 === "Barrier" && sec > this.state.bSt2) {
              this.setState({ bSt2: sec + 180 });
            }
            break;
          case "Smite":
            if (this.state.bSS1 === "Smite" && sec > this.state.bSt1) {
              this.setState({ bSt1: sec + 90 });
            }
            if (this.state.bSS2 === "Smite" && sec > this.state.bSt2) {
              this.setState({ bSt2: sec + 90 });
            }
            break;
          default:
        }
        break;
      case "Support":
        switch (val) {
          case "Teleport":
            if (this.state.sSS1 === "Teleport" && sec > this.state.sSt1) {
              this.setState({ sSt1: sec + 360 });
            }
            if (this.state.sSS2 === "Teleport" && sec > this.state.sSt2) {
              this.setState({ sSt2: sec + 360 });
            }
            break;
          case "Flash":
            if (this.state.sSS1 === "Flash" && sec > this.state.sSt1) {
              this.setState({ sSt1: sec + 300 });
            }
            if (this.state.sSS2 === "Flash" && sec > this.state.sSt2) {
              this.setState({ sSt2: sec + 300 });
            }
            break;
          case "Heal":
            if (this.state.sSS1 === "Heal" && sec > this.state.sSt1) {
              this.setState({ sSt1: sec + 240 });
            }
            if (this.state.sSS2 === "Heal" && sec > this.state.sSt2) {
              this.setState({ sSt2: sec + 240 });
            }
            break;
          case "Cleanse":
            if (this.state.sSS1 === "Cleanse" && sec > this.state.sSt1) {
              this.setState({ sSt1: sec + 210 });
            }
            if (this.state.sSS2 === "Cleanse" && sec > this.state.sSt2) {
              this.setState({ sSt2: sec + 210 });
            }
            break;
          case "Exhaust":
            if (this.state.sSS1 === "Exhaust" && sec > this.state.sSt1) {
              this.setState({ sSt1: sec + 210 });
            }
            if (this.state.sSS2 === "Exhaust" && sec > this.state.sSt2) {
              this.setState({ sSt2: sec + 210 });
            }
            break;
          case "Ghost":
            if (this.state.sSS1 === "Ghost" && sec > this.state.sSt1) {
              this.setState({ sSt1: sec + 180 });
            }
            if (this.state.sSS2 === "Ghost" && sec > this.state.sSt2) {
              this.setState({ sSt2: sec + 180 });
            }
            break;
          case "Ignite":
            if (this.state.sSS1 === "Ignite" && sec > this.state.sSt1) {
              this.setState({ sSt1: sec + 180 });
            }
            if (this.state.sSS2 === "Ignite" && sec > this.state.sSt2) {
              this.setState({ sSt2: sec + 180 });
            }
            break;
          case "Barrier":
            if (this.state.sSS1 === "Barrier" && sec > this.state.sSt1) {
              this.setState({ sSt1: sec + 180 });
            }
            if (this.state.sSS2 === "Barrier" && sec > this.state.sSt2) {
              this.setState({ sSt2: sec + 180 });
            }
            break;
          case "Smite":
            if (this.state.sSS1 === "Smite" && sec > this.state.sSt1) {
              this.setState({ sSt1: sec + 90 });
            }
            if (this.state.sSS2 === "Smite" && sec > this.state.sSt2) {
              this.setState({ sSt2: sec + 90 });
            }
            break;
          default:
        }
        break;
      default:
    }
    // switch (val) {
    //   case "Teleport":
    //     this.setState({ tSt1: sec + 360 });
    //     break;
    // case "Flash":
    //   this.setState({ tSt2: sec + 300 });
    //   break;
    // case "Heal":
    //   this.setState({ tSt2: sec + 240 });
    //   break;
    // case "Cleanse":
    //   this.setState({ tSt2: sec + 210 });
    //   break;
    // case "Exhaust":
    //   this.setState({ tSt2: sec + 210 });
    //   break;
    // case "Ghost":
    //   this.setState({ tSt2: sec + 180 });
    //   break;
    // case "Ignite":
    //   this.setState({ tSt2: sec + 180 });
    //   break;
    // case "Barrier":
    //   this.setState({ tSt2: sec + 180 });
    //   break;
    // case "Smite":
    //   this.setState({ tSt2: sec + 90 });
    //     break;
    //   default:
    // }
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
          time={this.state.jSt1}
          time2={this.state.jSt2}
          timeSpell={this.timeSpell}
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
          time={this.state.mSt1}
          time2={this.state.mSt2}
          timeSpell={this.timeSpell}
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
          time={this.state.bSt1}
          time2={this.state.bSt2}
          timeSpell={this.timeSpell}
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
          time={this.state.sSt1}
          time2={this.state.sSt2}
          timeSpell={this.timeSpell}
          name="sSS1"
          name2="sSS2"
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default App;
