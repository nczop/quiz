import React from "react";
import Question from "./Question";
import MainView from "./MainView";
import { v4 } from "uuid";
import axios from "axios";
import QuestionView from "./QuestionView";
import { Router, Route } from "react-router-dom";
import Score from "./Score";
import NewQuestion from "./NewQuestion";
import Edit from "./Edit";
import history from "./utils/history";
class App extends React.Component {
  state = {
    score: 0,
    items: [],
  };

  componentDidMount() {
    axios
      .get("https://dgbpcn9nz4.execute-api.us-east-1.amazonaws.com/question")
      .then((res) => this.setState({ items: res.data }));
  }

  itemsList = () => {
    return (
      <div>
        {this.state.items.map((item) => (
          <Question
            question={item}
            computeAnswer={this.computeAnswer}
          ></Question>
        ))}
        <Score score={this.state.score} />
      </div>
    );
  };

  questionOneByOne = () => {
    return (
      <>
        <Score score={this.state.score} />
        <QuestionView computeAnswer={this.computeAnswer}></QuestionView>
      </>
    );
  };

  computeAnswer = (answer, correctAns) => {
    if (answer === correctAns) {
      this.setState({
        score: this.state.score + 1,
      });
    } else {
      alert("błędna odpowiedz");
    }
  };

  addQuestion = (question) => {
    axios
      .post(
        "https://dgbpcn9nz4.execute-api.us-east-1.amazonaws.com/question",
        question
      )
      .then((res) => {
        this.setState({ items: [...this.state.items, question] });
      });
  };

  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={MainView} />
        <Route path="/questionsList" component={() => this.itemsList()} />
        <Route path="/quiz" component={() => this.questionOneByOne()} />
        <Route path="/editingQuestion" component={Edit} />
        <Route
          path="/addingQuestion"
          component={() => <NewQuestion addQuestion={this.addQuestion} />}
        />
      </Router>
    );
  }
}

export default App;
