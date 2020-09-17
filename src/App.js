import React from "react";
import Question from "./Question";
import MainView from "./MainView";
import "./css/App.css";
import { v4 } from "uuid";
import axios from "axios";
import QuestionView from "./QuestionView";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Score from "./Score";
import NewQuestion from "./NewQuestion";
import uuid from "uuid";
// import Item from "./Item";

class App extends React.Component {
  state = {
    isClicked: false,
    score: 0,
    items: [],
    letsPlay: false,
  };

  componentDidMount() {
    axios
      .get("https://dgbpcn9nz4.execute-api.us-east-1.amazonaws.com/question")
      .then((res) => this.setState({ items: res.data }));
  }

  handleButton = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  handleButtonLetsPlay = () => {
    this.setState({
      letsPlay: !this.state.letsPlay,
    });
  };

  itemsList = () => {
    return (
      <div>
        {this.state.items.map((item) => (
          <Question
            question={item}
            computeAnswer={this.computeAnswer}
          ></Question>
        ))}
        <NewQuestion addQuestion={this.addQuestion}></NewQuestion>
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

  checkView = () => {
    if (this.state.isClicked) {
      {
        return this.itemsList();
      }
    }
    if (this.state.letsPlay) {
      {
        return this.questionOneByOne();
      }
    }
    return (
      <MainView
        handleButton={this.handleButton}
        handleButtonLetsPlay={this.handleButtonLetsPlay}
      />
    );
  };

  addQuestion = (question) => {
    const newQuestion = {
      id: v4(),
      question,
      answers: ["A", "B", "C", "D"],
      correct: "B",
    };
    axios
      .post(
        "https://dgbpcn9nz4.execute-api.us-east-1.amazonaws.com/question",
        newQuestion
      )
      .then((res) => {
        this.setState({ items: [...this.state.items, newQuestion] });
      });
  };

  render() {
    const history = createBrowserHistory();
    return (
      <Router history={history}>
        <div className="mainClass">{this.checkView()}</div>
      </Router>
    );
  }

  // render() {
  //   return (
  //     <div className="mainClass">
  //       <div>{this.state.score}</div>
  //       {this.state.isClicked ? (
  //         this.itemsList()
  //       ) : (
  //         <>
  //           <MainView
  //             handleButton={this.handleButton}
  //             handleButtonLetsPlay={this.handleButtonLetsPlay}
  //           />
  //         </>
  //       )}
  //     </div>
  //   );
  // }

  // state = {
  //   items: [
  //     { id: v4(), name: "cos", isCrossedOut: false },
  //     { id: v4(), name: "dzbanek", isCrossedOut: false },
  //     { id: v4(), name: "toćka", isCrossedOut: false },
  //   ],
  //   item: { name: "", isCrossedOut: false },
  // };

  // crossOut = (id) => {
  //   const newItems = this.state.items.map((item) => {
  //     if (item.id === id) {
  //       item.isCrossedOut = !item.isCrossedOut;
  //     }
  //     return item;
  //   });

  //   this.setState({
  //     items: newItems,
  //   });
  // };

  // editItem = (name, id) => {
  //   const newItems = this.state.items.map((item) => {
  //     if (item.id === id) {
  //       item.name = name;
  //     }
  //     return item;
  //   });

  //   this.setState({
  //     items: newItems,
  //   });
  //   console.log(name);
  // };

  // removeItem = (id) => {
  //   let newIemList = this.state.items.filter((item) => item.id !== id);
  //   this.setState({
  //     items: newIemList,
  //   });
  // };

  // addItem = () => {
  //   const newItems = [...this.state.items, this.state.item];
  //   this.setState({
  //     items: newItems,
  //     item: { id: v4(), name: "", isCrossedOut: false },
  //   });
  // };

  // handleChange = (e) => {
  //   this.setState({
  //     item: {
  //       id: v4(),
  //       name: e.target.value,
  //       isCrossedOut: false,
  //     },
  //   });
  // };

  // render() {
  //   console.log(this.state.items);
  //   return (
  //     <>
  //       <input
  //         value={this.state.item.name}
  //         onChange={this.handleChange}
  //       ></input>
  //       <button onClick={this.addItem}>Dodaj</button>
  //       {this.state.items.map((element) => {
  //         return (
  //           <Item
  //             element={element}
  //             key={element.id}
  //             crossOut={this.crossOut}
  //             removeItem={this.removeItem}
  //             editItem={this.editItem}
  //           />
  //         );
  //       })}
  //     </>
  //   );
  // }
}

export default App;
