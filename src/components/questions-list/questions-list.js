import React, {useEffect, useState} from 'react';
import Question from "../question";
import {getAll} from "../../services/database";
import './question-list.css';
// import {Link} from "react-router-dom";

const QuestionsList = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getAll();
            setQuestions(data.questions);
            console.log(data.questions);
        }

        fetchData();
    }, []);

    return (
        <div className="question-list container">
            <div className="col-12">
                <h1>Вопросы участников</h1>
            </div>
            <ul>
                {questions.map(question => (
                    <Question question={question}/>
                ))}
            </ul>
        </div>
    );
}

export default QuestionsList;