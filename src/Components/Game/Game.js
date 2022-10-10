import * as React from "react";
import './Game.css'

import {Question} from "./Question";

export function Game({stageApp}){

    React.useEffect(() => {
        if(stageApp === 'game') {
            timer();
        }
    }, [stageApp]);

    const [step, setStep] = React.useState(0);

    const questions = [
        {
            title: 'В каком году была крещена Русь?',
            answers: ['988', '996', '1012', '1001'],
            rightAnswer: 0,
        }
    ]

    const timer = () =>{
        let seconds = 5;
        let secondsTitle = document.getElementById('secondsTitle');
        let gameDiv = document.getElementById('gameDiv');
        let seconds_timer_id = setInterval(function() {
            if (seconds > 0) {
                seconds --;
                if(seconds === 0){
                    secondsTitle.textContent = 'Игра началась!';
                    secondsTitle.classList.add('animated');
                    gameDiv.classList.add('animated');
                }
                else {
                    secondsTitle.textContent = seconds.toString();
                    setStep(0);
                }
            } else {
                clearInterval(seconds_timer_id);
            }
        }, 1000);
    }

    return(
        <div style={{visibility: stageApp === 'game' ? 'visible' : 'hidden'}}>
            <p id='secondsTitle'>5</p>
            <div id='gameDiv'>
                <div id='gameDivContent'>
                    <Question question={questions[step]}/>
                </div>
            </div>
            <div id='overlayGame'/>
        </div>
    )

}