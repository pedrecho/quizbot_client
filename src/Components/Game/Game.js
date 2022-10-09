import * as React from "react";

import './Game.css'
import { UserCard } from './UserCard'

const tg = window.Telegram.WebApp;

export function Game({gameId, name, stageApp}){

    const users = [
        {
            id: '2131231',
            name: 'Григорий',
            photoUrl: 'https://static.life.ru/e3341037a5753acd963114cc00f5be65.jpg'
        },
        {
            id: '1',
            name: 'Дмитрий',
            photoUrl: 'https://m.buro247.ru/images/dasha/news/putin4.jpg'
        },        {
            id: '2131231',
            name: 'Григорий',
            photoUrl: 'https://static.life.ru/e3341037a5753acd963114cc00f5be65.jpg'
        },
        {
            id: '1',
            name: 'Дмитрий',
            photoUrl: 'https://m.buro247.ru/images/dasha/news/putin4.jpg'
        },        {
            id: '2131231',
            name: 'Григорий',
            photoUrl: 'https://static.life.ru/e3341037a5753acd963114cc00f5be65.jpg'
        },
        {
            id: '1',
            name: 'Дмитрий',
            photoUrl: 'https://m.buro247.ru/images/dasha/news/putin4.jpg'
        },
        {
            id: '2131231',
            name: 'Григорий',
            photoUrl: 'https://static.life.ru/e3341037a5753acd963114cc00f5be65.jpg'
        },
        {
            id: '1',
            name: 'Дмитрий',
            photoUrl: 'https://m.buro247.ru/images/dasha/news/putin4.jpg'
        },
        {
            id: '2131231',
            name: 'Григорий',
            photoUrl: 'https://static.life.ru/e3341037a5753acd963114cc00f5be65.jpg'
        },
    ]

    users.push({id: tg.initDataUnsafe?.user?.id, name: name, photoUrl: tg.initDataUnsafe?.user?.photo_url})

    const [themeQuestions] = React.useState('История');

    return (
        <div style={{visibility: stageApp === 'game' ? 'visible' : 'hidden'}}>
            <div id='startGameDiv'>
                <div id='startGameContentDiv'>
                    <p>{tg.initDataUnsafe?.user?.photo_url}</p>
                    <p id='startGameId'>Код игры: {gameId}</p>
                    <p id='startThemeQuestions'>Тема вопросов: {themeQuestions} </p>
                    <div id='startGameUsersDiv'>
                        {users.map((user, index) => (
                            <UserCard index={index} name={user.name} id={user.id} photoUrl={user.photoUrl}/>
                        ))}
                    </div>
                    <button>Начать игру</button>
                    <p>Подождите, пока создатель начнет игру</p>
                </div>
            </div>
            <div id='overlayGame'/>
        </div>
    );
}