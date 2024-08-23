import React from 'react';
import './App.css';
// import LeftOrRightGame from './components/LeftOrRightGame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Left or Right Game - Test</h1>
        <p>If you see this, App.js is updating correctly.</p>
        <button onClick={() => alert('Button clicked!')}>Test Button</button>
      </header>
    </div>
  );
}

export default App;