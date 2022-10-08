import React from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {

  const sendData = () => {
      tg.sendData('hello dima, go dota')
  }

  return (
      <div>
          <button onClick={sendData}>Послать 1</button>
      </div>
  );

}

export default App;
