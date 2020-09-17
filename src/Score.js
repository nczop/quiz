import React from "react";

function Score(props) {
  return (
    <h1 className="score">
      {"Twoj wynik:"} {props.score}
    </h1>
  );
}

export default Score;
