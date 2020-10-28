import React from "react";
import history from "./utils/history";
import { v4 } from "uuid";

class NewQuestion extends React.Component {
  state = {
    question: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { question, answerA, answerB, answerC, answerD } = this.state;
    const newQuestion = {
      id: v4(),
      question: question,
      answers: [answerA, answerB, answerC, answerD],
      correct: "B",
    };
    this.props.addQuestion(newQuestion);
    history.push("/questionsList");
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div className="questionsList">
          <input
            className="question"
            placeholder="Add question"
            name="question"
            onChange={this.handleChange}
          ></input>
          <br></br>
          <input
            className="answer"
            placeholder="Add answer A"
            name="answerA"
            onChange={this.handleChange}
          ></input>
          <input
            className="answer"
            placeholder="Add answer B"
            name="answerB"
            onChange={this.handleChange}
          ></input>
          <input
            className="answer"
            placeholder="Add answer C"
            name="answerC"
            onChange={this.handleChange}
          ></input>
          <input
            className="answer"
            placeholder="Add answer D"
            name="answerB"
            onChange={this.handleChange}
          ></input>
        </div>
        <button type="submit" onClick={this.handleSubmit}>
          Add
        </button>
      </>
    );
  }
}
export default NewQuestion;
