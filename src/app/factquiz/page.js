"use client";
import { useState, useEffect } from "react";
import quizData from "../components/data"; // Ensure this file exists

export default function Page() {
    const [quiz, setQuiz] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({}); // Stores selected answers
    const [answerStatus, setAnswerStatus] = useState({}); // Stores whether answer is correct or not

    // Shuffle function to randomize options once
    const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

    useEffect(() => {
        // Shuffle options only once and store in state
        const shuffledQuiz = quizData.map((q) => ({
            ...q,
            options: shuffleArray([...q.incorrect_answers, q.correct_answer]),
        }));
        setQuiz(shuffledQuiz);
    }, []); // Runs only once when component mounts

    // Handle option selection
    const handleOptionChange = (questionIndex, selectedOption, correctAnswer) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: selectedOption,
        });

        // Check if selected option is correct
        setAnswerStatus({
            ...answerStatus,
            [questionIndex]: selectedOption === correctAnswer ? "correct" : "incorrect",
        });
    };

    return (
        <div>
            <h1>FactQuiz</h1>
            <p>FactQuiz is a quiz app that tests your knowledge of random facts. Are you ready?</p>

            {quiz.map((q, questionIndex) => (
                <div key={questionIndex}>
                    <h2>{q.question}</h2>
                    {q.options.map((option, i) => (
                        <div
                            key={i}
                            style={{
                                border: selectedAnswers[questionIndex] === option
                                    ? answerStatus[questionIndex] === "correct"
                                        ? "2px solid green" // Green for correct
                                        : "2px solid red"   // Red for incorrect
                                    : "2px solid transparent", // No border if not selected
                                padding: "5px",
                                marginBottom: "5px",
                                borderRadius: "5px",
                            }}
                        >
                            <input
                                type="radio"
                                name={`question-${questionIndex}`} // Group radio buttons per question
                                value={option}
                                checked={selectedAnswers[questionIndex] === option}
                                onChange={() => handleOptionChange(questionIndex, option, q.correct_answer)}
                            />
                            <label>{option}</label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
