import React from 'react';
import {Link} from 'react-router-dom';

const Question = (props) => {

   const {question} = props;

   console.log(question);
    return (
        <Link to='/question'><li>{question.question}</li></Link>
    );
}

export default Question;