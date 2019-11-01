import React from "react";

const Lanes = props => {
  if (props.con === false) {
    return (
      <>
        <div className="testbox">
          <h3>{props.lane}</h3>
          <select onChange={props.onChange} name={props.name}>
            <option value="">Select</option>
            <option value="Smite">Smite</option>
            <option value="Barrier">Barrier</option>
            <option value="Ignite">Ignite</option>
            <option value="Ghost">Ghost</option>
            <option value="Exhaust">Exhaust</option>
            <option value="Cleanse">Cleanse</option>
            <option value="Heal">Heal</option>
            <option value="Flash">Flash</option>
            <option value="Teleport">Teleport</option>
          </select>
          <select onChange={props.onChange} name={props.name2}>
            <option value="">Select</option>
            <option value="Smite">Smite</option>
            <option value="Barrier">Barrier</option>
            <option value="Ignite">Ignite</option>
            <option value="Ghost">Ghost</option>
            <option value="Exhaust">Exhaust</option>
            <option value="Cleanse">Cleanse</option>
            <option value="Heal">Heal</option>
            <option value="Flash">Flash</option>
            <option value="Teleport">Teleport</option>
          </select>
          <button onClick={props.onConfirm} name={props.lane}>
            ✔
          </button>
        </div>
      </>
    );
  } else if (props.con === true) {
    if (props.time > 1 || props.time2 > 1) {
      return (
        <>
          <div className="testbox">
            <h3>{props.lane}</h3>
            <button>{props.ss1}</button>
            {props.time}
            <button>{props.ss2}</button>
            {props.time2}
          </div>
        </>
      );
    }
    return (
      <>
        <div className="testbox">
          <h3>{props.lane}</h3>
          <button onClick={props.timeSpell} name={props.ss1}>
            {props.ss1}
          </button>
          <button onClick={props.timeSpell} name={props.ss2}>
            {props.ss2}
          </button>
        </div>
      </>
    );
  }
};

export default Lanes;
