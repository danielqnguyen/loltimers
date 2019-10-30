import React from "react";

const Time = props => {
  if (props.gameSec < 10 && props.gameMin === 0) {
    return (
      <>
        <h2> 1Game Time| 00:0{props.gameSec} </h2>
        <button onClick={props.gameStart}> Start </button>
        <button onClick={props.gameEnd}> End </button>
        <button> +.01secs</button>
      </>
    );
  } else if (props.gameSec > 10 && props.gameMin === 0) {
    return (
      <>
        <h2> 2Game Time| 00:{props.gameSec} </h2>
        <button onClick={props.gameStart}> Start </button>
        <button onClick={props.gameEnd}> End </button>
        <button> +.01secs</button>
      </>
    );
  } else if (props.gameSec < 10 && props.gameMin < 10) {
    return (
      <>
        <h2>
          3Game Time| 0{props.gameMin}:0{props.gameSec}
        </h2>
        <button onClick={props.gameStart}> Start </button>
        <button onClick={props.gameEnd}> End </button>
        <button> +.01secs</button>
      </>
    );
  } else {
    return (
      <>
        <h2>
          4Game Time| {props.gameMin}:{props.gameSec}
        </h2>
        <button onClick={props.gameStart}> Start </button>
        <button onClick={props.gameEnd}> End </button>
        <button> +.01secs</button>
      </>
    );
  }
};
export default Time;
