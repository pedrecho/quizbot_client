import * as React from "react";
import './MainMenu.css'

export function MainMenu({name, setName, playGame, stageApp}){

    const [stage, setStage] = React.useState('main');

    const showEnterWindow = function (){
        setStage('enter');
    };

    return (
        <div style={{visibility: stageApp === 'main' ? 'visible' : 'hidden'}}>
            <div id='mainMenuDiv'>
                <p id='greetingText'>Бобро пожаловать</p>
                <input id='nameInput' autoComplete="off" defaultValue={name} onChange={e => setName(e.target.value)}/>
                <div id='buttonsDiv'>
                    <button className='buttonMainMenu' onClick={showEnterWindow}>Присоединиться</button>
                    <button className='buttonMainMenu' onClick={() => playGame(10)}>Создать комнату</button>
                </div>
            </div>
            <div onClick={() => setStage('main')} id='overlay' style={{visibility: stage === 'main' ? 'hidden' : 'visible'}}/>
            <div id='enterDiv' style={{visibility: stage === 'enter' ? 'visible' : 'hidden'}}>
                <input id='enterInput' placeholder='Код комнаты'/>
                <button id='enterButton'>Продолжить</button>
            </div>
        </div>
    );
}