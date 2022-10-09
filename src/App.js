import React from 'react';
import './App.css';
import {MainMenu} from "./Components/MainMenu/MainMenu.js";
import {Game} from "./Components/Game/Game.js"

const tg = window.Telegram.WebApp;

function App() {

    const [name, setName] = React.useState(tg.initDataUnsafe?.user?.first_name)
    const [stageApp, setStageApp] = React.useState('main')
    const [gameId, setGameId] = React.useState(0);

    const playGame = (id) => {
        setStageApp('game');
        setGameId(id);
    }

    return (
        <div>
            <MainMenu playGame={playGame} name={name} setName={setName} stageApp={stageApp}/>
            <Game gameId={gameId} name={name} stageApp={stageApp}/>
        </div>
    );

}

export default App;
