import React, { useState } from 'react';

function GuessInput({ handleSubmit, guess, setGuess, showBanner }) {  
  const handleOnChange = (e) => {
    const nextValue = e.target.value.toUpperCase();
    setGuess(nextValue);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required
        id="guess-input" 
        type="text" 
        value={guess}
        onChange={handleOnChange}
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        // Note: title will show in the error message if users don't enter the right format
        title="5 letter word"
        placeholder="Please enter 5 letters"
        disabled={showBanner}
      />
    </form>
  );
}

export default GuessInput;
