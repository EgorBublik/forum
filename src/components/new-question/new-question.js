import React from 'react';
import './new-question.css';
import {postAll} from "../../services/database";


export default class NewQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        postAll({question: this.state.value});
        event.preventDefault();
    }

    render() {
        return (
            <form className="new-question container" onSubmit={this.handleSubmit}>
                <textarea className='new-question-input' placeholder='Задай свой вопрос'
                          value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" className="btn btn-primary" value="Отправить"/>
            </form>
        );
    }
}