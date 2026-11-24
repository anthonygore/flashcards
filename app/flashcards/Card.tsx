import { useState } from "react";

export default function Card({ question, answer } : { question: string; answer: string; }) {
    const [isQuestion, setIsQuestion] = useState(true)
    return (
        <div className='p-4 w-96 h-96 flex border border-gray-200 bg-gray-100 flex-col rounded-md justify-center items-center prose' onClick={() => setIsQuestion(!isQuestion)}>
            {
                isQuestion 
                ? <h3 className='text-2xl text-center' dangerouslySetInnerHTML={{ __html: question }} />
                : <div className='overflow-scroll' dangerouslySetInnerHTML={{ __html: answer }} />
            }
        
        </div>
    )
}