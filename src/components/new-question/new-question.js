import React from 'react';
import './new-question.css';

const NewQuestion = () => {
    return (
        <div className="new-question container">
            <div className="col-12">
                <textarea className='new-question-input' placeholder='Задай свой вопрос'/>
            </div>
            <div className="col-12">
                <button type="button" className="btn btn-primary">
                    Задать вопрос
                </button>
            </div>
        </div>
    )
}

export default NewQuestion;
