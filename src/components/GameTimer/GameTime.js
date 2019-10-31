import React from "react";

const Time = props => {
  if (props.gameSec < 10 && props.gameMin === 0) {
    return (
      <>
        <div className="timer">
          <h2> 1Game Time| 00:0{props.gameSec} </h2>
          <button onClick={props.gameStart}> Start </button>
          <button onClick={props.gameEnd}> End </button>
          <button> +.01secs</button>
        </div>
      </>
    );
  } else if (props.gameSec > 10 && props.gameMin === 0) {
    return (
      <>
        <div className="timer">
          <h2> 2Game Time| 00:{props.gameSec} </h2>
          <button onClick={props.gameStart}> Start </button>
          <button onClick={props.gameEnd}> End </button>
          <button> +.01secs</button>
        </div>
      </>
    );
  } else if (props.gameSec < 10 && props.gameMin < 10) {
    return (
      <>
        <div className="timer">
          <h2>
            3Game Time| 0{props.gameMin}:0{props.gameSec}
          </h2>
          <button onClick={props.gameStart}> Start </button>
          <button onClick={props.gameEnd}> End </button>
          <button> +.01secs</button>
        </div>
      </>
    );
  } else if (props.gameSec > 10 && props.gameMin < 10) {
    return (
      <>
        <div className="timer">
          <h2>
            4Game Time| 0{props.gameMin}:{props.gameSec}
          </h2>
          <button onClick={props.gameStart}> Start </button>
          <button onClick={props.gameEnd}> End </button>
          <button> +.01secs</button>
        </div>
      </>
    );
  } else if (props.gameSec < 10 && props.gameMin >= 10) {
    return (
      <>
        <div className="timer">
          <h2>
            5Game Time| {props.gameMin}:0{props.gameSec}
          </h2>
          <button onClick={props.gameStart}> Start </button>
          <button onClick={props.gameEnd}> End </button>
          <button> +.01secs</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="timer">
          <h2>
            6Game Time| {props.gameMin}:{props.gameSec}
          </h2>
          <button onClick={props.gameStart}> Start </button>
          <button onClick={props.gameEnd}> End </button>
          <button> +.01secs</button>
        </div>
      </>
    );
  }
};
export default Time;
