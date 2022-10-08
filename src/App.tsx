import React from 'react';
import './App.css';

function App() {
    const [count, setCount] = React.useState(0)

    const plusFunc = (val: number) => {
      setCount(count + val);
    };

    return (
        <div className='hello'>
            <button onClick={() => plusFunc(1)}>+</button>
            {count}
            <button onClick={() => plusFunc(-1)}>-</button>
        </div>
  );
}

export default App;
