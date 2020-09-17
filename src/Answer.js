import React from "react";

function Answer(props) {
  return (
    <button
      onClick={() => props.computeAnswer(props.correct, props.answer)}
      className="answer"
    >
      {props.answer}
    </button>
  );
}

export default Answer;
