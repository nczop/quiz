import React, { Component } from "react";
import Question from "./Question";
import axios from "axios";
import EditQuestions from "./EditQuestions"

class ItemsList extends Component {
    state = {
        items: [],
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: "",
    };

    componentDidMount() {
        axios
            .get("https://dgbpcn9nz4.execute-api.us-east-1.amazonaws.com/question")
            .then((res) => this.setState({ items: res.data }));
    }

    editQuestion = (newQuestion) => {
        let newItems = this.state.items.map(el => el.id === newQuestion.id ? newQuestion : el)
        this.setState({ 
            items: newItems
        })

        axios.put("https://dgbpcn9nz4.execute-api.us-east-1.amazonaws.com/question/" + newQuestion.id, newQuestion)
        .then(res => {           
        })
    }
    
    itemsList = () => {
        return (
            <div>
                {this.state.items.map((item) => (
                    <EditQuestions
                        question={item}
                        editQuestion={this.editQuestion}
                    ></EditQuestions>
                ))}
            </div>
        );
    };

    render() {
        return (
            <div>{this.itemsList()}</div>
        )
    }
}
export default ItemsList;