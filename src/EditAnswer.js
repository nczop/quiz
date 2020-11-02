import React, { Component } from "react";

class Answer extends Component {

    answer = () => {
        return (
            <>
                <input value={this.props.ansA} className="answer" onChange={this.props.handleChangeA} />
                <input value={this.props.ansB} className="answer" onChange={this.props.handleChangeB} />
                <input value={this.props.ansC} className="answer" onChange={this.props.handleChangeC} />
                <input value={this.props.ansD} className="answer" onChange={this.props.handleChangeD} />
            </>
        );
    }

    render() {
        return (
            <>
                <div>{this.answer()}</div>
            </>
        )
    }


}

export default Answer;



// function Answer(props) {
//   return (
//     <input value={props.answer} className="answer" />
//   );
// }