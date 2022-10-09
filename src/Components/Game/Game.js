import * as React from "react";

import './Game.css'

export function Game({gameId, name, stageApp}){

    const users = [
        {
            id: '2131231',
            name: 'Григорий',
            photoUrl: 'src1221'
        }
    ]

    const [themeQuestions] = React.useState('История');

    return (
        <div style={{visibility: stageApp === 'game' ? 'visible' : 'hidden'}}>
            <div id='startGameDiv'>
                <div id='startGameContentDiv'>
                    <p>Код игры: {gameId}</p>
                    <p>Тема вопросов: {themeQuestions} </p>
                    <div>
                        <p>{users[0].name}</p>
                    </div>
                    <button>Начать игру</button>
                    <p>Подождите, пока создатель начнет игру</p>
                </div>
            </div>
            <div id='overlayGame'/>
        </div>
    );
}