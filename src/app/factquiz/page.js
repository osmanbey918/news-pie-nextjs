
"use client";
import { useState } from 'react';
import axios from 'axios';
import quiz from '../components/data';
export default function page() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quiz, setQuiz] = useState(null);
    const startQuiz = async () => {
        try {
            // const response = await axios.get('/api/factquiz');
            // setQuiz(response.data.quiz.results);
            // console.log(response.data.quiz.results);
            setQuiz(quiz)


            setLoading(false);
        } catch (err) {
            setError('Failed to start quiz');
            setLoading(false);
        }
    }
    setQuiz(quiz)

    return (
        <div>
            <h1>FactQuiz</h1>
            <p>FactQuiz is a quiz app that tests your knowledge of random facts. Are you ready?</p>
            {/* <button onClick={startQuiz}>St8art Quiz</button> */}
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {quiz && (quiz.map(quiz =>
                <div key={quiz.question}>
                    <h2>{quiz.question}</h2>
                    <p>{quiz.category}</p>
                    <p>{quiz.difficulty}</p>
                    <p>{quiz.type}</p>
                    <p>{quiz.correct_answer}</p>
                    <p>{quiz.incorrect_answers}</p>
                </div>
            ))}

        </div>
    )
}
