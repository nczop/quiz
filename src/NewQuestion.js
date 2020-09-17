import React from "react";
// import "./css/QuestionsList.css";

class NewQuestion extends React.Component {
  state = {
    question: "",
  };

  handleChange = (e) => {
    this.setState({ question: e.target.value });
  };

  handleSubmit = () => {
    this.props.addQuestion(this.state.question);
    // this.setState({ question: "" });
  };

  render() {
    return (
      <>
        <div className="questionsList">
          <input className="question" onChange={this.handleChange}></input>
          <br></br>
        </div>
        <button type="submit" onClick={this.handleSubmit}>
          Add
        </button>
      </>
    );
  }
}
export default NewQuestion;
