import React, { Component } from "react";
import "./css/QuestionsList.css";
import Answer from "./Answer";
import EditAnswer from "./EditAnswer"
import history from "./utils/history";

class EditQuestion extends Component {
    state = {
        question: this.props.question.question,
        answerA: this.props.question.answers[0],
        answerB: this.props.question.answers[1],
        answerC: this.props.question.answers[2],
        answerD: this.props.question.answers[3],
        isEditable: false,
    }

    handleChange = (e) => {
        this.setState({ question: e.target.value });
    };

    handleEditButton = () => {
        this.setState({ isEditable: true });
    }

    handleSaveButton = () => {
        const { question, answerA, answerB, answerC, answerD } = this.state;
        const newQuestion = {
            id: this.props.question.id,
            question: question,
            answers: [answerA, answerB, answerC, answerD],
            correct: "B",
        };
        this.props.editQuestion(newQuestion);
        this.setState({ isEditable: false });
    };

    handleChangeA = (e) => {
        this.setState({ answerA: e.target.value });
    };

    handleChangeB = (e) => {
        this.setState({ answerB: e.target.value });
    };

    handleChangeC = (e) => {
        this.setState({ answerC: e.target.value });
    };

    handleChangeD = (e) => {
        this.setState({ answerD: e.target.value });
    };


    question = (props) => {
        if (this.state.isEditable) {
            return (
                <>
                    <div className="questionsList">
                        <input value={this.state.question} className="question" onChange={this.handleChange} type="text"></input>
                        {/* {props.question.answers.map((text) => (
                            <EditAnswer
                                answer={text}
                            ></EditAnswer>
                        ))} */}
                        <EditAnswer
                            ansA={this.state.answerA}
                            ansB={this.state.answerB}
                            ansC={this.state.answerC}
                            ansD={this.state.answerD}
                            handleChangeA = {this.handleChangeA}
                            handleChangeB = {this.handleChangeB}
                            handleChangeC = {this.handleChangeC}
                            handleChangeD = {this.handleChangeD}
                        ></EditAnswer>
                        <button onClick={this.handleEditButton}>Edit</button>
                        <button onClick={this.handleSaveButton}>Save</button>
                        <br></br>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="questionsList">
                        <div className="question">{props.question.question}</div>
                        {props.question.answers.map((text) => (
                            <Answer
                                answer={text}
                            ></Answer>
                        ))}
                        <button onClick={this.handleEditButton}>Edit</button>
                        <button>Save</button>
                        <br></br>
                    </div>
                </>
            )
        }
    }

    render() {
        console.log(this.state)

        return (
            <>
                <div>{this.question(this.props)}</div>
            </>
        )
    }
}



export default EditQuestion;
