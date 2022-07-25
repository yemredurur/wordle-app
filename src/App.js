import React, { useState, useEffect } from "react";
import WordleRow from "./components/WordleRow";
import GuessInput from "./components/GuessInput";
import GameFinised from "./components/GameFinised";
import getWordleWord from './data/Word';
import './App.css';

function App() {
  const [correctWord, setCorrectWord] = useState(null)
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [isGameFinished, setGameFinised] = useState(false);
  const [restartGame, setRestartGame] = useState(false);
  
  useEffect(() => {
    if (correctWord === null) {
      setWordFromApi();
    }
  },[correctWord]);

  useEffect(() => {
    if (guesses && correctWord && guesses.indexOf(correctWord) > -1) {
      setGameFinised(true);
    }
  },[guesses, correctWord]);

  useEffect(() => {
    if (restartGame) {
      setGuesses(Array(6).fill(null));
      setGameFinised(false);
      setRestartGame(false);
      setWordFromApi();
    }
  },[restartGame]);

  const setWordFromApi = async () => {
    let searchData = await getWordleWord();
    setCorrectWord(searchData);
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="wordle-container">
          {guesses.map((guess,key) => (
            <WordleRow key={key} solution={correctWord} word={guess ?? ''} />
          ))}
        </div>
        <div className="correct-word">{correctWord}</div>
        {isGameFinished && (
          <GameFinised onSubmit={setRestartGame} />
        )}
        {!isGameFinished && (
          <GuessInput onSubmit={setGuesses} userGuesses={guesses}/>
        )}
      </header>
    </div>
  );
}

export default App;
