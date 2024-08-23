import React from 'react';
import './App.css';
import LeftOrRightGame from './components/LeftOrRightGame';

function App() {
  console.log("LeftOrRightGame:", LeftOrRightGame);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Left or Right Game - Updated</h1>
        <p>This is a test message. If you see this, App.js has been updated.</p>
        {LeftOrRightGame ? <LeftOrRightGame /> : <p>LeftOrRightGame not loaded</p>}
      </header>
    </div>
  );
}

export default App;