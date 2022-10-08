import React from 'react';
import './App.css';

const tg = window.Telegram.WebApp;
const user = window.Telegram.WebAppUser;

function App() {

  const sendData = () => {

  }

  return (
      <div className="hello">
          <p>{user.username}</p>
      </div>
  );

}

export default App;
