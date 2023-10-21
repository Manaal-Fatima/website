import React, { useState } from 'react';
import './b.css';
import questions from './data/question.json';

export default function Bootstrap() {
  const [showfinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [canGo, setCanGo] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const optionClick = (isCorrect, optionIndex) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCanGo(true);
    setSelectedOption(optionIndex);
  };

  const gameRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
    setSelectedOption(null);
  };

  const handleNextQuestion = () => {
    if (canGo) {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setCanGo(false);
        setSelectedOption(null);
      } else {
        setFinalResults(true);
      }
    }
  };

  return (
    <div className='App'>
      <h1>QUIZ</h1>

      <h2>Current Score: {score}</h2>

      {showfinalResults ? (
        <div className='final-result'>
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct ({(score / questions.length) * 100}%)
          </h2>
          <button onClick={gameRestart}>Restart Game</button>
        
        </div>
      ) : (
        <div className='question-card'>
          <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
          <h3 className='question-text'>{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option, index) => {
              return (
                <li
                onClick={() => optionClick(option.isCorrect, index)}
                  key={option.id + index}
                  className={`${selectedOption === index
                      ? option.isCorrect
                        ? 'correct'
                        : 'incorrect'
                      : ''
                    }`}
                    >
                  {option.text}
                </li>
              );
            })}
          </ul>
 <button onClick={handleNextQuestion} disabled={!canGo}>
            Next
          </button>

        </div>
      )}
    </div>
  );
}
