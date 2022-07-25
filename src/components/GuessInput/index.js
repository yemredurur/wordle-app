
import React, { useState } from 'react';
import './guessInput.css';

export default function GuessInput({onSubmit, userGuesses}) {

    const [userGuess, setUserGuess] = useState(null);

    const handleOnChange = (e) => {
        setUserGuess(e.target.value);
    }
    const handleOnSubmit = (e) => {
        if (userGuess) {
            const indexofEl = getFindIndex(userGuesses);
            const newGuesses = [...userGuesses];
            newGuesses[indexofEl] = userGuess.toUpperCase();
            onSubmit(newGuesses);
        }
    }

    return (
        <div className="input-container">
            <input type="text" name="guessInput" onChange={(e) => handleOnChange(e) } />
            <input type="button" className="button" name="submitGuess" onClick={(e) => handleOnSubmit(e) } value="Make Guess" />
        </div>
    )
} 

const getFindIndex = (guesses) => {
    return guesses.findIndex(val => val === null);
}