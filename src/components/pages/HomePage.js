import React, {Component} from 'react';
import NewQuestion from "../new-question";
import QuestionPeople from "../question-people";

class HomePage extends Component {
    render() {
        return (
            <div>
                <NewQuestion/>
                <QuestionPeople/>
            </div>
        );
    }
}

export default HomePage;