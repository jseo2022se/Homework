import {  useState, useEffect } from "react"

export default function TriviaDisplay({question}) {

    // console.log(question === true)
    // console.log(question[0])
    // var arr = question[0]
    // console.log(arr)
    // {arr.question}
    // {arr.category.title}

    let [hide, setHide] = useState(true)

    let [score, setScore] = useState(0)

    const handleClick = () => {

        if(hide === true) {
            setHide(false)
        } else {
            setHide(true)
        }
    }

    
    
    const loaded = () => {

        var arr = question[0]

        const handleIncrement = () => {
        setScore(score + arr.value)
        }
    
        const handleDecrement = () => {
            setScore(score - arr.value)
        }

        return (
            <div>
                <h1>Hello Player</h1>
                <div>
                    <h2>Score: {score}</h2>
                    <button className='button-54' onClick={handleIncrement}>Increment</button>
                    <button className='button-54' onClick={handleDecrement}>Decrement</button>
                </div>
                <h2>Question: {arr.question}</h2>
                <h2>Category: {arr.category.title}</h2>
                <h2>Points: {arr.value}</h2>
                <h2 hidden={hide}> Answer: {arr.answer}</h2>
                <button className='button-54' onClick={handleClick}>Show Answer</button>
            </div>
        )
    }

    const loading = () => {
        return <h2>Question is not loaded...</h2>
    }

    return question ? loaded() : loading()
}