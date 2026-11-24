import { useState } from "react";

export default function Card({ question, answer } : { question: string; answer: string; }) {
    const [isQuestion, setIsQuestion] = useState(true)
    return (
        <div className='w-96 h-96 flex border border-gray-200 bg-gray-100 flex-col rounded-md' onClick={() => setIsQuestion(!isQuestion)}>
            <div className='justify-center align-middle'>{isQuestion ? question : answer}</div>
        </div>
    )
}