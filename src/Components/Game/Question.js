import * as React from 'react'
import './Question.css'

export function Question({question}){

    const [chosenAnwser, setChosenAnswer] = React.useState(-1)

    const chooseAnswer = (index) => {
        if(chosenAnwser === -1){
            setChosenAnswer(index);
        }
    }

    return(
        <div id='questionDiv'>
            <p id='questionTitle'>{question.title}</p>
            {question.answers.map((answer, index) => (
                <div onClick={() => chooseAnswer(index)} id='answerDiv' className={chosenAnwser === index ? 'chosen' : '' }>
                    <p className='answer'>{answer}</p>
                </div>
            ))}
        </div>
    )

}