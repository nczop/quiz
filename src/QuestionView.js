import React, { Component } from "react";
import axios from "axios";
import Answer from "./Answer";

class QuestionView extends Component {
  state = {
    question: null,
    questionNumber: 0,
    nextButtonShouldBeDisabled: false,
    previousButtonShouldBeDisabled: true,
  };

  fetchQuestion = (number = 0) => {
    axios
      .get(
        `https://dgbpcn9nz4.execute-api.us-east-1.amazonaws.com/question/` +
          number
      )
      .then((res) => {
        this.setState({ question: res.data });
      })
      .catch((error) => {
        if (error.response.status === 404) {
          this.setState({
            nextButtonShouldBeDisabled: !this.state.nextButtonShouldBeDisabled,
          });
          console.log(error.response.status);
          alert(error.response.data);
        }
      });
  };
  componentDidMount() {
    this.fetchQuestion();
  }

  increment = () => {
    this.fetchQuestion(this.state.questionNumber + 1);
    if (this.state.previousButtonShouldBeDisabled === true) {
      this.handlePreviousButtonDisabling();
    }
    this.setState((prevState) => ({
      questionNumber: prevState.questionNumber + 1,
    }));
  };

  handlePreviousButtonDisabling = () => {
    this.setState((prev) => ({
      previousButtonShouldBeDisabled: !prev.previousButtonShouldBeDisabled,
    }));
  };

  handleNextButtonDisabling = () => {
    this.setState((prev) => ({
      nextButtonShouldBeDisabled: !prev.nextButtonShouldBeDisabled,
    }));
  };

  decrementation = () => {
    if (this.state.questionNumber <= 0) {
      this.handlePreviousButtonDisabling();
      alert("tam juz nic nie ma");
    } else {
      this.fetchQuestion(this.state.questionNumber - 1);
      this.setState((prevState) => ({
        questionNumber: prevState.questionNumber - 1,
      }));
      if (this.state.nextButtonShouldBeDisabled === true) {
        this.handleNextButtonDisabling();
      }
    }
  };

  render() {
    const { question } = this.state;
    if (question)
      return (
        <>
          <div className="questionsList">
            <div className="question">{question.question}</div>
            {question.answers.map((text) => (
              <Answer
                computeAnswer={this.props.computeAnswer}
                answer={text}
                correct={question.correct}
              ></Answer>
            ))}
            <br></br>
          </div>
          <button
            onClick={this.increment}
            disabled={this.state.nextButtonShouldBeDisabled}
          >
            Następne pytanie
          </button>
          <button
            onClick={this.decrementation}
            disabled={this.state.previousButtonShouldBeDisabled}
          >
            Poprzednie pytanie{" "}
          </button>
        </>
      );

    return <div>Loading..</div>;
  }
}

export default QuestionView;
