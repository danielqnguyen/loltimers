import React from "react";

const Lanes = props => {
  if (props.con === false) {
    return (
      <>
        <div className="testbox">
          <h3>{props.lane}</h3>
          <select
            onChange={props.onChange}
            name={props.name}
            className="ssSelector"
          >
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
          <select
            onChange={props.onChange}
            name={props.name2}
            className="ssSelector"
          >
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
          <div>00:00 | 00:00</div>
        </div>
      </>
    );
  } else if (props.con === true) {
    if (props.time > 1 || props.time2 > 1) {
      let dTimer = Math.floor(props.time / 60);
      let dSec = Math.round([[props.time / 60] - dTimer] * 60);
      let fTimer = Math.floor(props.time2 / 60);
      let fSec = Math.round([[props.time2 / 60] - fTimer] * 60);
      if (dSec < 10 && fSec < 10) {
        return (
          <>
            <div className="testbox">
              <h3>{props.lane}</h3>
              <button
                onClick={props.timeSpell}
                value={props.ss1}
                name={props.lane}
              >
                {props.ss1}
              </button>
              <button
                onClick={props.timeSpell}
                value={props.ss2}
                name={props.lane}
              >
                {props.ss2}
              </button>
              <div>
                {dTimer}:0{dSec} | {fTimer}:0{fSec}
              </div>
            </div>
          </>
        );
      } else if (dSec < 10) {
        return (
          <>
            <div className="testbox">
              <h3>{props.lane}</h3>
              <button
                onClick={props.timeSpell}
                value={props.ss1}
                name={props.lane}
              >
                {props.ss1}
              </button>
              <button
                onClick={props.timeSpell}
                value={props.ss2}
                name={props.lane}
              >
                {props.ss2}
              </button>
              <div>
                {dTimer}:0{dSec} | {fTimer}:{fSec}
              </div>
            </div>
          </>
        );
      } else if (fSec < 10) {
        return (
          <>
            <div className="testbox">
              <h3>{props.lane}</h3>
              <button
                onClick={props.timeSpell}
                value={props.ss1}
                name={props.lane}
              >
                {props.ss1}
              </button>
              <button
                onClick={props.timeSpell}
                value={props.ss2}
                name={props.lane}
              >
                {props.ss2}
              </button>
              <div>
                {dTimer}:{dSec} | {fTimer}:0{fSec}
              </div>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div className="testbox">
              <h3>{props.lane}</h3>
              <button
                onClick={props.timeSpell}
                value={props.ss1}
                name={props.lane}
              >
                {props.ss1}
              </button>
              <button
                onClick={props.timeSpell}
                value={props.ss2}
                name={props.lane}
              >
                {props.ss2}
              </button>
              <div>
                {dTimer}:{dSec} | {fTimer}:{fSec}
              </div>
            </div>
          </>
        );
      }
    }
    return (
      <>
        <div className="testbox">
          <h3>{props.lane}</h3>
          <button onClick={props.timeSpell} value={props.ss1} name={props.lane}>
            {props.ss1}
          </button>
          <button onClick={props.timeSpell} value={props.ss2} name={props.lane}>
            {props.ss2}
          </button>
          <div>00:00 | 00:00</div>
        </div>
      </>
    );
  }
};

export default Lanes;
