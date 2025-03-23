"use client";
import { useState, useEffect } from "react";
import quizData from "../components/data"; // Ensure this file exists
import "./style.css";
export default function Page() {
    const [quiz, setQuiz] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({}); // Stores selected answers
    const [answerStatus, setAnswerStatus] = useState({}); // Stores whether answer is correct or not
    const [selectedValue, setSelectedValue] = useState('any')
    const [search, setSearch] = useState([])
    // Shuffle function to randomize options once
    const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);
    useEffect(() => {
        // Shuffle options only once and store in state
        const shuffledQuiz = quizData.map((q) => ({
            ...q,
            options: shuffleArray([...q.incorrect_answers, q.correct_answer]),
        }));
        setQuiz(shuffledQuiz);
    }, []);


    const handleOptionChange = (questionIndex, selectedOption, correctAnswer) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: selectedOption,
        });
        setAnswerStatus({
            ...answerStatus,
            [questionIndex]: selectedOption === correctAnswer ? "correct" : "incorrect",
        });
    };

    const filterQuiz = (event) => {
        const selectedDifficulty = event.target.value;
        if (selectedDifficulty === 'any') {

            const shuffledQuiz = quizData.map((q) => ({
                ...q,
                options: shuffleArray([...q.incorrect_answers, q.correct_answer]),
            }));
            setQuiz(shuffledQuiz);
            setSelectedValue(selectedDifficulty);

            return
        }
        setSelectedValue(selectedDifficulty);
        const filteredQuiz = quizData.filter((quiz) => quiz.difficulty === selectedDifficulty);
        setQuiz(filteredQuiz.map(q => ({
            ...q,
            options: shuffleArray([...q.incorrect_answers, q.correct_answer]),
        })));
    };

    const handleSearch = (e) => {
        let v = e.target.value.toLowerCase();
        if (v.trim() === "") {
            setSearch([]); // Clear search results if input is empty
            return;
        }
    
        const filteredQuestions = quizData
            .filter(q => q.category.toLowerCase().includes(v))
            .map(q => q.question);
    
        setSearch(filteredQuestions); // Update state once
    };

    return (
        <div>
            <h1>FactQuiz</h1>
            <p>FactQuiz is a quiz app that tests your knowledge of random facts. Are you ready?</p>
            <label htmlFor="difficulty">Select Difficulty:</label>
            <br />
            <input type="search" onChange={handleSearch} />
            {search.map((q) => (<h3>{q}</h3>))}
            <select onChange={filterQuiz} value={selectedValue} id="difficulty" name="difficulty" >
                <option value="any">Any</option>

                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

            {quiz.map((q, questionIndex) => (
                <div key={questionIndex}>
                    <h2>{q.question}</h2>
                    <label style={{
                        color: q.difficulty === "easy" ? "green" :
                            q.difficulty === "medium" ? "yellow" :
                                q.difficulty === "hard" ? "red" : "black",
                        padding: "2px",
                        borderRadius: "5px",
                        border: `2px solid ${q.difficulty === "easy" ? "green" :
                            q.difficulty === "medium" ? "yellow" :
                                q.difficulty === "hard" ? "red" : "black"}`,
                    }}>
                        {q.difficulty}
                    </label>
                    {q.options.map((option, i) => (
                        <div
                            key={i}
                            style={{
                                border: selectedAnswers[questionIndex] === option
                                    ? answerStatus[questionIndex] === "correct"
                                        ? "2px solid green"
                                        : "2px solid red"
                                    : "2px solid grey",
                                padding: "5px",
                                marginBottom: "5px",
                                borderRadius: "5px",
                                cursor: "pointer", // Makes it look clickable
                                display: "flex",
                                alignItems: "center",
                                gap: "10px" // Adds spacing between radio and text
                            }}
                            onClick={() => handleOptionChange(questionIndex, option, q.correct_answer)} // ✅ Click anywhere to select
                        >
                            <input
                                className="option"
                                type="radio"
                                name={`question-${questionIndex}`} // Group radio buttons by question
                                value={option}
                                checked={selectedAnswers[questionIndex] === option}
                                onChange={() => handleOptionChange(questionIndex, option, q.correct_answer)}
                            />
                            <label style={{ cursor: "pointer" }}>{option}</label>
                        </div>
                    ))}

                </div>
            ))}
        </div>
    );
}
