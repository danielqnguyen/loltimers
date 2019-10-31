import React from "react";

const Lanes = props => {
  return (
    <>
      <div className="testbox">
        <h3>{props.lane}</h3>
        <button>Flash</button>
        <button>Flash</button>
      </div>
    </>
  );
};

export default Lanes;
