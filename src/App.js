import React from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {

  const sendData = () => {
      tg.sendData(JSON.stringify({'hello': 'hello dima'}))
  }

  return (
      <div>
          <button onClick={sendData}>Послать</button>
      </div>
  );

}

export default App;
