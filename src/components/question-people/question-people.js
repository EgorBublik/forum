import React from 'react';
import './question-people.css';
import {Link} from 'react-router-dom';

const QuestionPeople = () => {
    return (
        <div className="question-people container">
            <div className="col-12">
                <h1>Вопросы участников</h1>
            </div>
            <ul>
                <Link to='/question'><li>Вопрос 1</li></Link>
                <li>Вопрос 2</li>
                <li>Вопрос 3</li>
                <li>Вопрос 4</li>
                <li>Вопрос 5</li>
                <li>Вопрос 6</li>
                <li>Вопрос 7</li>
            </ul>
        </div>
    )
}

export default QuestionPeople;
