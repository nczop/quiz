import React from "react";
import "./css/QuestionsList.css";

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

function Question(props) {
  console.log(props);
  return (
    <>
      <div className="questionsList">
        <div className="question">{props.question.question}</div>
        {props.question.answers.map((text) => (
          <Answer
            computeAnswer={props.computeAnswer}
            answer={text}
            correct={props.question.correct}
          ></Answer>
        ))}
        <br></br>
      </div>
    </>
  );
}

export default Question;
