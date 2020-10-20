import React from 'react';
import {Link} from 'react-router-dom';
import {deleteAll} from "../../services/database";

const Question = (props) => {

    const {question} = props;

    const handleClick = (event) => {
        deleteAll({id: question.id});
        event.preventDefault()
    }

    return (
        <Link to='/question'>
            <li>{question.question}
                <button className={'delete-question btn btn-outline-danger float-right'} onClick={handleClick}>
                    <i className="far fa-trash-alt"/>
                </button>
            </li>
        </Link>
    );
}

export default Question;