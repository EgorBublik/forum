import React, {Component} from 'react';
import NewQuestion from "../new-question";
import QuestionsList from "../questions-list";

class HomePage extends Component {
    render() {
        return (
            <div>
                <NewQuestion/>
                <QuestionsList/>
            </div>
        );
    }
}

export default HomePage;