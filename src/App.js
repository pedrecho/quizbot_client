import React from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {

  const sendData = () => {
      tg.sendData('hello dima, go dota')
  }

  return (
      <div className="hello">
          <button onClick={sendData}>Послать 2</button>
      </div>
  );

}

export default App;
