import React from 'react';
import './App.css';
import {MainMenu} from "./Components/MainMenu/MainMenu.js";
import {StartGame} from "./Components/StartGame/StartGame.js"
import {Game} from "./Components/Game/Game";

const tg = window.Telegram.WebApp;

function App() {

    // window.screen.orientation.lock('portrait')

    const [name, setName] = React.useState(tg.initDataUnsafe?.user?.first_name)
    const [stageApp, setStageApp] = React.useState('main')
    const [gameId, setGameId] = React.useState(0);


    const startGame = (id) => {
        setStageApp('startGame')
        setGameId(id)
        tg.expand()
    }

    return (
        <div>
            <MainMenu startGame={startGame} name={name} setName={setName} stageApp={stageApp}/>
            <StartGame gameId={gameId} name={name} stageApp={stageApp} setStageApp={setStageApp}/>
            <Game stageApp={stageApp}/>
        </div>
    );

}

export default App;
