import React from 'react';
import './App.css';

const tg = window.Telegram.WebApp;
//tg.initDataUnsafe?.user?.first_name
function App() {

  const [name, setName] = React.useState(tg.initDataUnsafe?.user?.first_name)

  return (
      <div>
          <p>Бобро пожаловать</p>
          <input defaultValue={name} onChange={e => setName(e.target.value)}/>
          <button>Присоединиться</button>
          <button>Создать комнату</button>
      </div>
  );

}

export default App;
