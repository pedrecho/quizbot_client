import React from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {

  return (
      <div>
          <p>Мой юзернэйм: {tg.initDataUnsafe?.user?.username}</p>
      </div>
  );

}

export default App;
