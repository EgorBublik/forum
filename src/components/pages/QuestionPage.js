import React, {Component} from 'react';
import Question from "../question";
import Answer from "../answer";
import AnswerPeople from "../answer-people";

class QuestionPage extends Component {
    render() {
        return (
            <div className="container">
                <Question/>
                <Answer/>
                <AnswerPeople/>
            </div>
        );
    }
}

export default QuestionPage;