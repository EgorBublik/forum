import React, {Component} from 'react';
import Answer from "../answer";
import AnswerPeople from "../answer-people";


class QuestionPage extends Component {
    render() {
        return (
            <div className="container">
            <Answer/>
            <AnswerPeople/>
            </div>
        );
    }
}

export default QuestionPage;