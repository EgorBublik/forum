import React, {Component} from 'react';
import './answer-people.css'

class AnswerPeople extends Component {
    render() {
        return (
            <div className='answer-people'>
                <div className="col-12">
                    <h3>Ответы участников</h3>
                </div>
                <ul>
                    <li>Ответ 1</li>
                    <li>Ответ 2</li>
                    <li>Ответ 3</li>
                    <li>Ответ 4</li>
                    <li>Ответ 5</li>
                    <li>Ответ 6</li>
                    <li>Ответ 7</li>
                </ul>
            </div>
        );
    }
}

export default AnswerPeople;