import React from 'react';
import './new-question.css';
import axios from 'axios';

export default class newQuestion extends React.Component {
    state = {
        questions: '',
    }

    handleChange = event => {
        this.setState({ questions: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const question = {
            questions: this.state.questions
        };

        axios.post(`http://localhost:3005/questions`, { question })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    render() {
        return (
            <div className="new-question container">
                <div className="col-12">
                    <textarea className='new-question-input' placeholder='Задай свой вопрос' onChange={this.handleChange}/>
                </div>
                <div className="col-12">
                    <button type="button" className="btn btn-primary">
                        Задать вопрос
                    </button>
                </div>
            </div>
        )
    }

}

// export default NewQuestion;
