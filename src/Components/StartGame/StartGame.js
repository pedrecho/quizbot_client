import * as React from "react";

import './StartGame.css'
import { UserCard } from './UserCard'

const tg = window.Telegram.WebApp;

export function StartGame({gameId, name, stageApp, setStageApp}){

    const [themeQuestions] = React.useState('История');
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
    photos = photos.sort(() => 0.5 - Math.random())
    users.push({id: tg.initDataUnsafe?.user?.id, name: name})

    return (
        <div style={{visibility: stageApp === 'startGame' ? 'visible' : 'hidden'}}>
            <div id='startGameDiv'>
                <div id='startGameContentDiv'>
                    <p>{tg.initDataUnsafe?.user?.photo_url}</p>
                    <p id='startGameId'>Код игры: {gameId}</p>
                    <p id='startThemeQuestions'>Тема вопросов: {themeQuestions} </p>
                    <div id='startGameUsersDiv'>
                        {users.map((user, index) => (
                            <div key={index}>
                                <UserCard index={index} name={user.name} id={user.id} photoUrl={photos[index]}/>
                            </div>
                        ))}
                    </div>
                    {users[0].id !== tg.initDataUnsafe?.user?.id && (
                        <button id='startGameButton' onClick={() => setStageApp('game')}>Начать игру</button>
                    )}
                    {users[0].id === tg.initDataUnsafe?.user?.id && (
                        <p id='startGameWaitingTitle'>Подождите, пока создатель <br/> начнет игру.</p>
                    )}
                </div>
            </div>
            <div id='overlayGame'/>
        </div>
    );
}