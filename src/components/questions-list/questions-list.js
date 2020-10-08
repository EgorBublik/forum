import React, {useEffect, useState} from 'react';
import Question from "../question";
import {getAll} from "../../services/database";
import './question-list.css';

const QuestionsList = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getAll();
            setQuestions(data.questions);
        }

        fetchData();
    }, []);

    return (
        <div className="question-list container">
            <div className="col-12">
                <h1>Вопросы участников</h1>
            </div>
            <ul>
                {questions.map(function (question1, index) {
                        return (
                            <Question key={index} question={question1}/>
                        )
                    }
                )
                }
            </ul>
        </div>
    );
}

export default QuestionsList;