import React, { useState } from 'react';

function LeftOrRightGame() {
  console.log("LeftOrRightGame component is rendering");
  const [score, setScore] = useState(0);
  const [currentChoice, setCurrentChoice] = useState(null);

  const generateChoice = () => {
    return Math.random() < 0.5 ? 'left' : 'right';
  };

  const handleGuess = (guess) => {
    const correctChoice = generateChoice();
    if (guess === correctChoice) {
      setScore(score + 1);
    }
    setCurrentChoice(correctChoice);
  };

  return (
    <div className="game-container">
      <h2>Score: {score}</h2>
      <div className="button-container">
        <button onClick={() => handleGuess('left')}>Left</button>
        <button onClick={() => handleGuess('right')}>Right</button>
      </div>
      {currentChoice && (
        <p>The correct choice was: {currentChoice}</p>
      )}
    </div>
  );
}

export default LeftOrRightGame;