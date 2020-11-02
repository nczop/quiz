import React, { Component } from "react";
import Question from "./Question";
import Score from "./Score";
import axios from "axios";

class ItemsList extends Component {
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

    render() {
        return (
            <div>{this.itemsList()}</div>
        )
    }
}
export default ItemsList;