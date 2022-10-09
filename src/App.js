import React from 'react';
import './App.css';
import {MainMenu} from "./Components/MainMenu/MainMenu.js";
import {Game} from "./Components/Game/Game.js"
import {Route, Routes} from "react-router-dom";

const tg = window.Telegram.WebApp;

function App() {

    const [name, setName] = React.useState(tg.initDataUnsafe?.user?.first_name)

    return (
        <div>
            <Routes>
                <Route path='/' element={<MainMenu name={name} setName={setName}/>}></Route>
                <Route path='/game/:id' element={<Game/>}></Route>
            </Routes>
        </div>
    );

}

export default App;
