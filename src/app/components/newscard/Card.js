'use client'
import { useState } from 'react';
import './Card.css'

export default function Card({ article }) {
    // const [word, setword] = useState("hello");
    // const [ani, setani] = useState("word")
    // setTimeout(() => {
    //     setword(word == "hello" ? "i'am khan" : "hello")
    //     setani(ani == "word" ? "word1" : "word")
    // }, 2000);

    return (
        <div>
            <div className="card-container">
                <h2>{article.title}</h2>
                {/* <p className={`${ani}`}>{word}</p> */}
                <p>{article.description}</p>
            </div>
                <aside>hello i am good </aside>
        </div>
    )
}
