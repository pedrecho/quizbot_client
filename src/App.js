import React from 'react';
import './App.css';

const tg = window.Telegram.WebApp;
function App() {

    const [name, setName] = React.useState(tg.initDataUnsafe?.user?.first_name)

    return (
      <div id='mainMenuDiv'>
          <p id='greetingText'>Бобро пожаловать</p>
          <input id='nameInput' autoComplete="off" defaultValue={name} onChange={e => setName(e.target.value)}/>
          <div id='buttonsDiv'>
              <button className='buttonMainMenu'>Присоединиться</button>
              <button className='buttonMainMenu'>Создать комнату</button>
          </div>
      </div>
  );

}

export default App;
