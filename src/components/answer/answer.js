import React, {Component} from 'react';
import './answer.css'

class Answer extends Component {
    render() {
        return (
            <div className='answer'>
                <textarea name="" id="" rows="3"/>
                <button className="btn btn-primary btn-block" type="submit">Отправить</button>
            </div>
        );
    }
}

export default Answer;