import React from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {

  const sendData = () => {
      tg.onEvent('backButtonClicked', 'hello')
  }

  return (
      <div>
          <button onClick={sendData}>Послать</button>
      </div>
  );

}

export default App;
