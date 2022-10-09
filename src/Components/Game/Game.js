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
            id: '2131231',
            name: 'Григорий',
            photoUrl: 'https://static.life.ru/e3341037a5753acd963114cc00f5be65.jpg'
        },
        {
            id: '2131231',
            name: 'Григорий',
            photoUrl: 'https://static.life.ru/e3341037a5753acd963114cc00f5be65.jpg'
        },
        {
            id: '2131231',
            name: 'Григорий',
            photoUrl: 'https://static.life.ru/e3341037a5753acd963114cc00f5be65.jpg'
        },
        {
            id: '2131231',
            name: 'Григорий',
            photoUrl: 'https://static.life.ru/e3341037a5753acd963114cc00f5be65.jpg'
        },
        {
            id: '2131231',
            name: 'Григорий',
            photoUrl: 'https://static.life.ru/e3341037a5753acd963114cc00f5be65.jpg'
        },
    ]

    let photos = [
        'https://nemcd.com/wp-content/uploads/2013/11/Animals-01.jpg',
        'https://nemcd.com/wp-content/uploads/2013/11/Animals-02.jpg',
        'https://nemcd.com/wp-content/uploads/2013/11/Animals-03.jpg',
        'https://nemcd.com/wp-content/uploads/2013/11/Animals-04.jpg',
        'https://nemcd.com/wp-content/uploads/2013/11/Animals-05.jpg',
        'https://nemcd.com/wp-content/uploads/2013/11/Animals-06.jpg',
        'https://nemcd.com/wp-content/uploads/2013/11/Animals-07.jpg',
        'https://nemcd.com/wp-content/uploads/2013/11/Animals-08.jpg',
        'https://nemcd.com/wp-content/uploads/2013/11/Animals-09.jpg',
        'https://nemcd.com/wp-content/uploads/2013/11/Animals-10.jpg',
    ]

    photos = photos.sort((a , b) => 0.5 - Math.random())

    users.push({id: tg.initDataUnsafe?.user?.id, name: name})

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
                            <UserCard index={index} name={user.name} id={user.id} photoUrl={photos[index]}/>
                        ))}
                    </div>
                    {users[0].id === tg.initDataUnsafe?.user?.id && (
                        <button>Начать игру</button>
                    )}
                    {users[0].id !== tg.initDataUnsafe?.user?.id && (
                        <p>Подождите, пока создатель начнет игру</p>
                    )}
                </div>
            </div>
            <div id='overlayGame'/>
        </div>
    );
}